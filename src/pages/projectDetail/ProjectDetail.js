import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Button from "../../components/button/Button";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import { Fade } from "react-reveal";
import { LocaleContext } from "../../i18n/LocaleContext";
import { projectImageUrl } from "../../projectImages";
import "./ProjectDetail.css";

class ProjectDetail extends Component {
  static contextType = LocaleContext;

  // lightbox: index of the image shown full screen, or null when closed
  state = { lightbox: null };

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKey);
    document.body.style.overflow = "";
  }

  openLightbox = (index) => {
    this.setState({ lightbox: index });
    document.addEventListener("keydown", this.handleKey);
    document.body.style.overflow = "hidden";
  };

  closeLightbox = () => {
    this.setState({ lightbox: null });
    document.removeEventListener("keydown", this.handleKey);
    document.body.style.overflow = "";
  };

  // step through the images, wrapping around at either end
  stepLightbox = (delta, count) => {
    this.setState(({ lightbox }) => ({
      lightbox: (lightbox + delta + count) % count,
    }));
  };

  handleKey = (e) => {
    const count = this.currentImageCount || 0;
    if (e.key === "Escape") {
      this.closeLightbox();
    } else if (e.key === "ArrowRight" && count > 1) {
      this.stepLightbox(1, count);
    } else if (e.key === "ArrowLeft" && count > 1) {
      this.stepLightbox(-1, count);
    }
  };

  renderFigure(image, index, theme, className) {
    return (
      <figure className={className} key={image.src}>
        <button
          type="button"
          className="project-detail-image-button"
          onClick={() => this.openLightbox(index)}
          style={{ borderColor: theme.highlight }}
        >
          <img
            src={projectImageUrl(image.src)}
            alt={image.caption}
            loading={index === 0 ? "eager" : "lazy"}
          />
        </button>
        {image.caption && (
          <figcaption style={{ color: theme.secondaryText }}>
            {image.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  renderLightbox(images, t) {
    const { lightbox } = this.state;
    if (lightbox === null || !images[lightbox]) {
      return null;
    }
    const image = images[lightbox];
    const many = images.length > 1;
    return (
      <div
        className="project-lightbox"
        role="dialog"
        aria-modal="true"
        onClick={this.closeLightbox}
      >
        <button
          type="button"
          className="project-lightbox-close"
          aria-label={t("projectDetail.closeImage")}
          onClick={this.closeLightbox}
        >
          ×
        </button>
        {many && (
          <button
            type="button"
            className="project-lightbox-nav prev"
            aria-label={t("projectDetail.previousImage")}
            onClick={(e) => {
              e.stopPropagation();
              this.stepLightbox(-1, images.length);
            }}
          >
            ‹
          </button>
        )}
        <figure onClick={(e) => e.stopPropagation()}>
          <img src={projectImageUrl(image.src)} alt={image.caption} />
          <figcaption>
            {many && (
              <span className="project-lightbox-count">
                {lightbox + 1} / {images.length}
              </span>
            )}
            {image.caption}
          </figcaption>
        </figure>
        {many && (
          <button
            type="button"
            className="project-lightbox-nav next"
            aria-label={t("projectDetail.nextImage")}
            onClick={(e) => {
              e.stopPropagation();
              this.stepLightbox(1, images.length);
            }}
          >
            ›
          </button>
        )}
      </div>
    );
  }

  render() {
    const theme = this.props.theme;
    const { id } = this.props.match.params;
    const { projects, t } = this.context;
    const project = projects.data.find((p) => p.id === id);

    if (!project) {
      return (
        <div className="project-detail-main">
          <Header theme={theme} />
          <div className="project-detail-notfound">
            <Fade bottom duration={1000} distance="40px">
              <h1 style={{ color: theme.text }}>
                {t("projectDetail.notFound")}
              </h1>
              <Link
                className="main-button"
                to="/projects"
                style={{
                  color: theme.body,
                  backgroundColor: theme.text,
                  border: `solid 1px ${theme.text}`,
                  display: "inline-flex",
                }}
              >
                {t("projectDetail.backToProjectsButton")}
              </Link>
            </Fade>
          </div>
          <Footer theme={theme} onToggle={this.props.onToggle} />
          <TopButton theme={theme} />
        </div>
      );
    }

    const images = project.images || [];
    const steps = project.howItWorks || [];
    this.currentImageCount = images.length;

    return (
      <div className="project-detail-main">
        <Header theme={theme} />
        <div className="project-detail-content">
          <Fade bottom duration={1000} distance="40px">
            <Link
              className="project-detail-back"
              to="/projects"
              style={{ color: theme.secondaryText }}
            >
              {t("projectDetail.backToProjects")}
            </Link>
            <h1 className="project-detail-title" style={{ color: theme.text }}>
              {project.name}
            </h1>
            {project.tagline && (
              <p
                className="project-detail-tagline"
                style={{ color: theme.secondaryText }}
              >
                {project.tagline}
              </p>
            )}
            {project.languages && project.languages.length > 0 && (
              <div className="project-detail-languages">
                <ProjectLanguages logos={project.languages} />
              </div>
            )}
          </Fade>

          {images.length > 0 && (
            <Fade bottom duration={1000} distance="40px">
              {this.renderFigure(images[0], 0, theme, "project-detail-hero")}
            </Fade>
          )}

          {steps.length > 0 && (
            <Fade bottom duration={1000} distance="40px">
              <div className="project-detail-section">
                <h2 style={{ color: theme.text }}>
                  {t("projectDetail.howItWorks")}
                </h2>
                <ol className="project-detail-steps">
                  {steps.map((step, i) => (
                    <li key={i} style={{ borderColor: theme.highlight }}>
                      <span
                        className="project-detail-step-number"
                        style={{
                          color: theme.body,
                          backgroundColor: theme.text,
                        }}
                      >
                        {i + 1}
                      </span>
                      <div>
                        <h3 style={{ color: theme.text }}>{step.title}</h3>
                        <p style={{ color: theme.text }}>{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Fade>
          )}

          {project.importance && (
            <Fade bottom duration={1000} distance="40px">
              <div className="project-detail-section">
                <h2 style={{ color: theme.text }}>
                  {t("projectDetail.whyItMatters")}
                </h2>
                <p style={{ color: theme.text }}>{project.importance}</p>
              </div>
            </Fade>
          )}

          {project.highlights && project.highlights.length > 0 && (
            <Fade bottom duration={1000} distance="40px">
              <div className="project-detail-section">
                <h2 style={{ color: theme.text }}>
                  {t("projectDetail.keyFeatures")}
                </h2>
                <ul className="project-detail-highlights">
                  {project.highlights.map((item, i) => (
                    <li key={i} style={{ color: theme.text }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Fade>
          )}

          {images.length > 1 && (
            <Fade bottom duration={1000} distance="40px">
              <div className="project-detail-section">
                <h2 style={{ color: theme.text }}>
                  {t("projectDetail.gallery")}
                </h2>
                <div className="project-detail-gallery">
                  {images
                    .slice(1)
                    .map((image, i) =>
                      this.renderFigure(
                        image,
                        i + 1,
                        theme,
                        "project-detail-gallery-item"
                      )
                    )}
                </div>
              </div>
            </Fade>
          )}

          <Fade bottom duration={1000} distance="40px">
            <div className="project-detail-cta">
              <Button
                text={t("projectDetail.viewOnGithub")}
                newTab={true}
                href={project.url}
                theme={theme}
              />
            </div>
          </Fade>
        </div>
        {this.renderLightbox(images, t)}
        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default ProjectDetail;
