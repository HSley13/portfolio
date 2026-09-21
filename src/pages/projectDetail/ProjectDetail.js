import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Button from "../../components/button/Button";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import { Fade } from "react-reveal";
import { LocaleContext } from "../../i18n/LocaleContext";
import "./ProjectDetail.css";

class ProjectDetail extends Component {
  static contextType = LocaleContext;

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
        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default ProjectDetail;
