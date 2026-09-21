import React, { Component } from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import { LocaleContext } from "../../i18n/LocaleContext";
import CertificationCard from "../../components/certificationCard/CertificationCard";

class Certifications extends Component {
  static contextType = LocaleContext;

  render() {
    const theme = this.props.theme;
    const { certifications } = this.context.portfolio;
    const { t } = this.context;
    return (
      <div className="main" id="certs">
        <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="certs-header" style={{ color: theme.text }}>
              {t("education.certifications")}
            </h1>
          </Fade>
        </div>
        <div className="certs-body-div">
          {certifications.certifications.map((cert) => {
            return <CertificationCard certificate={cert} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default Certifications;
