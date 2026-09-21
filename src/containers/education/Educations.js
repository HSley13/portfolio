import React, { Component } from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { LocaleContext } from "../../i18n/LocaleContext";
import { Fade } from "react-reveal";

class Educations extends Component {
  static contextType = LocaleContext;

  render() {
    const theme = this.props.theme;
    const { degrees } = this.context.portfolio;
    const { t } = this.context;
    return (
      <div className="main" id="educations">
        <div className="educations-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="educations-header" style={{ color: theme.text }}>
              {t("education.degreesReceived")}
            </h1>
          </Fade>
        </div>
        <div className="educations-body-div">
          {degrees.degrees.map((degree) => {
            return (
              <DegreeCard key={degree.title} degree={degree} theme={theme} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Educations;
