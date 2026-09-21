import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { useLocale } from "../../i18n/LocaleContext";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  const { portfolio, t } = useLocale();
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          {t("footer.madeWithLoveBy", { name: portfolio.greeting.title })}
        </p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
    </div>
  );
}
