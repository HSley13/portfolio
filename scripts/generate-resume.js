#!/usr/bin/env node
// Regenerates src/assets/docs/Sley_Hortes_Resume.pdf from src/portfolio.js and
// src/shared/projects.json, so the downloadable resume never drifts out of
// sync with the site. Runs automatically before `npm start` / `npm run build`
// (see package.json's prestart/prebuild hooks) and in CI on every push.
//
// Requires esbuild-register because src/portfolio.js is an ES module
// (`export { ... }`) and this script runs as plain CommonJS Node, not through
// CRA's webpack/babel pipeline.
require("esbuild-register");

const path = require("path");
const fs = require("fs");
const React = require("react");
const {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
  render,
} = require("@react-pdf/renderer");

const e = React.createElement;

const {
  greeting,
  socialMediaLinks,
  degrees,
  experience,
  skills,
  spokenLanguages,
  contactPageData,
  seo,
} = require(path.join(__dirname, "..", "src", "portfolio.js"));
const projects = require(path.join(
  __dirname,
  "..",
  "src",
  "shared",
  "projects.json"
));

const OUTPUT_PATH = path.join(
  __dirname,
  "..",
  "src",
  "assets",
  "docs",
  "Sley_Hortes_Resume.pdf"
);

const email =
  socialMediaLinks
    .find((m) => m.link.startsWith("mailto:"))
    ?.link.replace("mailto:", "") ?? "";
const githubLink =
  socialMediaLinks.find((m) => m.name === "Github")?.link ??
  greeting.githubProfile;
const phone = contactPageData.phoneSection?.subtitle ?? "";
const location = contactPageData.addressSection?.subtitle ?? "";
const portfolioUrl = seo?.og?.url ?? greeting.portfolio_repository;

const styles = StyleSheet.create({
  page: {
    paddingTop: 26,
    paddingBottom: 26,
    paddingHorizontal: 42,
    fontSize: 9.5,
    fontFamily: "Helvetica",
    color: "#1a1a1a",
  },
  name: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    textAlign: "center",
  },
  role: {
    fontSize: 10.5,
    textAlign: "center",
    marginTop: 1,
  },
  contactLine: {
    fontSize: 8.5,
    textAlign: "center",
    marginTop: 3,
    color: "#333333",
  },
  sectionHeading: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    marginTop: 7,
    marginBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: "#1a1a1a",
    paddingBottom: 1,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  subHeading: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    marginTop: 4,
    color: "#333333",
  },
  entryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 3,
  },
  entryTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9.5,
  },
  entrySubtitle: {
    fontSize: 8.5,
    fontStyle: "italic",
    color: "#333333",
  },
  entryMeta: {
    fontSize: 8,
    textAlign: "right",
    color: "#333333",
  },
  bullet: {
    fontSize: 8.5,
    marginTop: 1,
    marginLeft: 10,
    lineHeight: 1.2,
  },
  skillLine: {
    fontSize: 8.5,
    marginTop: 1,
    lineHeight: 1.2,
  },
});

const Bullets = ({ items }) =>
  e(
    View,
    null,
    items.map((text, i) =>
      e(Text, { key: i, style: styles.bullet }, `• ${text}`)
    )
  );

const SectionHeading = (text) =>
  e(Text, { style: styles.sectionHeading }, text);

const EducationSection = () =>
  e(
    View,
    null,
    SectionHeading("Education"),
    ...degrees.degrees.map((degree, i) =>
      e(
        View,
        { key: i },
        e(
          View,
          { style: styles.entryRow },
          e(Text, { style: styles.entryTitle }, degree.title),
          e(Text, { style: styles.entryMeta }, degree.duration)
        ),
        e(Text, { style: styles.entrySubtitle }, degree.subtitle),
        e(Bullets, { items: degree.descriptions })
      )
    )
  );

const ExperienceSection = () =>
  e(
    View,
    null,
    SectionHeading("Experience"),
    ...experience.sections
      .filter((section) => section.experiences.length > 0)
      .map((section, sIdx) =>
        e(
          View,
          { key: sIdx },
          e(Text, { style: styles.subHeading }, section.title),
          ...section.experiences.map((exp, i) =>
            e(
              View,
              { key: i },
              e(
                View,
                { style: styles.entryRow },
                e(Text, { style: styles.entryTitle }, exp.title),
                e(
                  Text,
                  { style: styles.entryMeta },
                  `${exp.duration} · ${exp.location}`
                )
              ),
              e(Text, { style: styles.entrySubtitle }, exp.company),
              e(Bullets, { items: [exp.description] })
            )
          )
        )
      )
  );

const SkillsSection = () =>
  e(
    View,
    null,
    SectionHeading("Technical Skills"),
    ...skills.data.map((category, i) =>
      e(
        Text,
        { key: i, style: styles.skillLine },
        e(
          Text,
          { style: { fontFamily: "Helvetica-Bold" } },
          `${category.title}: `
        ),
        category.softwareSkills.map((s) => s.skillName).join(", ")
      )
    )
  );

const LanguagesSection = () =>
  e(
    View,
    null,
    SectionHeading("Languages"),
    e(
      Text,
      { style: styles.skillLine },
      spokenLanguages.languages
        .map((lang) => `${lang.name} (${lang.level})`)
        .join("  •  ")
    )
  );

const ProjectsSection = () =>
  e(
    View,
    null,
    SectionHeading("Projects"),
    ...projects.data.map((project, i) =>
      e(
        View,
        { key: i, style: { marginTop: 4 } },
        e(
          View,
          { style: styles.entryRow },
          e(Text, { style: styles.entryTitle }, project.name),
          e(
            Link,
            { src: project.url, style: styles.entryMeta },
            project.url.replace("https://", "")
          )
        ),
        e(Bullets, { items: [project.description] })
      )
    )
  );

const ResumeDocument = () =>
  e(
    Document,
    null,
    e(
      Page,
      { size: "A4", style: styles.page },
      e(Text, { style: styles.name }, greeting.title),
      e(Text, { style: styles.role }, greeting.role),
      e(
        Text,
        { style: styles.contactLine },
        [email, phone, location].filter(Boolean).join("  •  ")
      ),
      e(
        Text,
        { style: styles.contactLine },
        [
          portfolioUrl.replace(/^https?:\/\//, "").replace(/\/$/, ""),
          githubLink.replace(/^https?:\/\//, ""),
        ]
          .filter(Boolean)
          .join("  •  ")
      ),
      e(EducationSection),
      e(ExperienceSection),
      e(SkillsSection),
      e(LanguagesSection),
      e(ProjectsSection)
    )
  );

fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });

render(e(ResumeDocument), OUTPUT_PATH)
  .then(() => {
    console.log(
      `Resume generated: ${path.relative(process.cwd(), OUTPUT_PATH)}`
    );
  })
  .catch((err) => {
    console.error("Failed to generate resume PDF:", err);
    process.exit(1);
  });
