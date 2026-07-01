# frozen_string_literal: true

# Generates assets/pdf/Sley_Hortes_CV.pdf from _data/cv.yml after every build.
# Requires xelatex (TeX Live / MacTeX).  If xelatex is absent the build
# continues normally and only a warning is printed.
#
# The PDF is written to _site/assets/pdf/ so it is served on the live site and
# included in the GitHub Pages deployment without needing to commit a binary.
#
# A content-hash cache in assets/pdf/ prevents re-running xelatex when cv.yml
# has not changed (keeps `jekyll serve --watch` fast).

require 'digest'
require 'erb'
require 'fileutils'
require 'open3'
require 'date'
require 'tmpdir'

module Jekyll
  # Renders the ERB LaTeX template with cv data and exposes helper methods
  # that are callable from inside the template via the binding.
  class CvPdfRenderer
    # LaTeX special-character escape map (order matters: \ first)
    TEX_MAP = {
      '\\'  => '\textbackslash{}',
      '{'   => '\{',
      '}'   => '\}',
      '~'   => '\textasciitilde{}',
      '^'   => '\textasciicircum{}',
      '&'   => '\&',
      '%'   => '\%',
      '$'   => '\$',
      '#'   => '\#',
      '_'   => '\_'
    }.freeze
    TEX_RE = Regexp.union(TEX_MAP.keys)

    def initialize(cv, template_src)
      @cv           = cv
      @template_src = template_src
    end

    # Escape a value for safe inclusion in LaTeX
    def t(str)
      return '' if str.nil?
      str.to_s.gsub(TEX_RE) { |m| TEX_MAP[m] }
    end

    # Format an ISO date string → "Mon YYYY"
    def d(date_str)
      return '' if date_str.nil? || date_str.to_s.strip.empty?
      Date.parse(date_str.to_s).strftime('%b %Y')
    rescue ArgumentError
      date_str.to_s
    end

    # Build a "Start – End" string.  Returns '' when start is blank.
    # Shows only start when start == end (same month).
    def period(start_d, end_d = nil)
      s = d(start_d)
      return '' if s.empty?
      e = end_d.nil? || end_d.to_s.strip.empty? ? 'Present' : d(end_d)
      return s if s == e
      "#{s}~--~#{e}"
    end

    def render
      cv = @cv # make accessible to ERB binding
      ERB.new(@template_src, trim_mode: '-').result(binding)
    end
  end
end

Jekyll::Hooks.register :site, :post_write do |site|
  # _data/cv.yml has a top-level `cv:` key; unwrap it
  cv_raw = site.data['cv']
  cv     = cv_raw.is_a?(Hash) && cv_raw.key?('cv') ? cv_raw['cv'] : cv_raw
  template_path = File.join(site.source, 'assets', 'cv', 'cv_template.tex.erb')
  cache_dir     = File.join(site.source, 'assets', 'pdf')
  cache_pdf     = File.join(cache_dir, 'Sley_Hortes_CV.pdf')
  cache_hash    = File.join(cache_dir, '.cv_pdf.md5')
  output_pdf    = File.join(site.dest,   'assets', 'pdf', 'Sley_Hortes_CV.pdf')

  next unless cv
  next unless File.exist?(template_path)

  # ------------------------------------------------------------------
  # 1. Locate xelatex
  # ------------------------------------------------------------------
  xelatex = `which xelatex 2>/dev/null`.strip
  if xelatex.empty?
    Jekyll.logger.warn 'CV PDF:', 'xelatex not found – skipping PDF generation'
    next
  end

  # ------------------------------------------------------------------
  # 2. Check cache: only regenerate when cv.yml content has changed
  # ------------------------------------------------------------------
  cv_yml_path  = File.join(site.source, '_data', 'cv.yml')
  current_hash = Digest::MD5.file(cv_yml_path).hexdigest

  if File.exist?(cache_pdf) && File.exist?(cache_hash) &&
     File.read(cache_hash).strip == current_hash
    # Cached PDF is current – copy to _site/ and skip compilation
    FileUtils.mkdir_p(File.dirname(output_pdf))
    FileUtils.cp(cache_pdf, output_pdf)
    Jekyll.logger.info 'CV PDF:', 'Up-to-date (cached) → /assets/pdf/Sley_Hortes_CV.pdf'
    next
  end

  # ------------------------------------------------------------------
  # 3. Render ERB template → LaTeX source
  # ------------------------------------------------------------------
  template = File.read(template_path)
  renderer = Jekyll::CvPdfRenderer.new(cv, template)

  begin
    latex = renderer.render
  rescue StandardError => e
    Jekyll.logger.warn 'CV PDF:', "Template error: #{e.message}"
    next
  end

  # ------------------------------------------------------------------
  # 4. Compile with xelatex (twice for correct layout)
  # ------------------------------------------------------------------
  Dir.mktmpdir('cv_pdf_') do |dir|
    tex_file = File.join(dir, 'cv.tex')
    File.write(tex_file, latex, encoding: 'utf-8')

    2.times do
      Open3.capture3(
        xelatex,
        '-interaction=nonstopmode',
        '-halt-on-error',
        '-output-directory', dir,
        tex_file
      )
    end

    pdf_src = File.join(dir, 'cv.pdf')

    unless File.exist?(pdf_src)
      Jekyll.logger.warn 'CV PDF:', 'xelatex compilation failed – PDF not updated'
      next
    end

    # ----------------------------------------------------------------
    # 5. Save to cache and to _site/
    # ----------------------------------------------------------------
    FileUtils.mkdir_p(cache_dir)
    FileUtils.cp(pdf_src, cache_pdf)
    File.write(cache_hash, current_hash)

    FileUtils.mkdir_p(File.dirname(output_pdf))
    FileUtils.cp(pdf_src, output_pdf)

    Jekyll.logger.info 'CV PDF:', 'Generated → /assets/pdf/Sley_Hortes_CV.pdf'
  end
end

# ─────────────────────────────────────────────────────────────────────────────
# Chinese CV PDF: generated from _data/cv_zh.yml + assets/cv/cv_template_zh.tex.erb
# ─────────────────────────────────────────────────────────────────────────────
Jekyll::Hooks.register :site, :post_write do |site|
  cv_raw = site.data['cv_zh']
  cv     = cv_raw.is_a?(Hash) && cv_raw.key?('cv_zh') ? cv_raw['cv_zh'] : cv_raw
  template_path = File.join(site.source, 'assets', 'cv', 'cv_template_zh.tex.erb')
  cache_dir     = File.join(site.source, 'assets', 'pdf')
  cache_pdf     = File.join(cache_dir, 'Sley_Hortes_CV_zh.pdf')
  cache_hash    = File.join(cache_dir, '.cv_pdf_zh.md5')
  output_pdf    = File.join(site.dest, 'assets', 'pdf', 'Sley_Hortes_CV_zh.pdf')

  next unless cv
  next unless File.exist?(template_path)

  xelatex = `which xelatex 2>/dev/null`.strip
  next if xelatex.empty?

  cv_yml_path  = File.join(site.source, '_data', 'cv_zh.yml')
  current_hash = Digest::MD5.file(cv_yml_path).hexdigest

  if File.exist?(cache_pdf) && File.exist?(cache_hash) &&
     File.read(cache_hash).strip == current_hash
    FileUtils.mkdir_p(File.dirname(output_pdf))
    FileUtils.cp(cache_pdf, output_pdf)
    Jekyll.logger.info 'CV PDF ZH:', 'Up-to-date (cached) → /assets/pdf/Sley_Hortes_CV_zh.pdf'
    next
  end

  template = File.read(template_path)
  renderer = Jekyll::CvPdfRenderer.new(cv, template)

  begin
    latex = renderer.render
  rescue StandardError => e
    Jekyll.logger.warn 'CV PDF ZH:', "Template error: #{e.message}"
    next
  end

  Dir.mktmpdir('cv_pdf_zh_') do |dir|
    tex_file = File.join(dir, 'cv.tex')
    File.write(tex_file, latex, encoding: 'utf-8')

    2.times do
      Open3.capture3(
        xelatex,
        '-interaction=nonstopmode',
        '-halt-on-error',
        '-output-directory', dir,
        tex_file
      )
    end

    pdf_src = File.join(dir, 'cv.pdf')

    unless File.exist?(pdf_src)
      Jekyll.logger.warn 'CV PDF ZH:', 'xelatex compilation failed – PDF not updated'
      next
    end

    FileUtils.mkdir_p(cache_dir)
    FileUtils.cp(pdf_src, cache_pdf)
    File.write(cache_hash, current_hash)

    FileUtils.mkdir_p(File.dirname(output_pdf))
    FileUtils.cp(pdf_src, output_pdf)

    Jekyll.logger.info 'CV PDF ZH:', 'Generated → /assets/pdf/Sley_Hortes_CV_zh.pdf'
  end
end
