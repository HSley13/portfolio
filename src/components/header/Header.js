import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { settings } from "../../settings.js";
import { LocaleContext } from "../../i18n/LocaleContext";
import SeoHeader from "../seoHeader/SeoHeader";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

class Header extends Component {
  static contextType = LocaleContext;

  render() {
    const theme = this.props.theme;
    const link = settings.isSplash ? "/splash" : "home";
    const { greeting } = this.context.portfolio;
    const { t, locale, setLocale, locales } = this.context;
    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <div>
          <header className="header">
            <NavLink to={link} tag={Link} className="logo">
              <span style={{ color: theme.text }}> &lt;</span>
              <span className="logo-name" style={{ color: theme.text }}>
                {greeting.logo_name}
              </span>
              <span style={{ color: theme.text }}>/&gt;</span>
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu" style={{ backgroundColor: theme.body }}>
              <li>
                <NavLink
                  to="/home"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  {t("nav.home")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/education"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  {t("nav.education")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/experience"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  {t("nav.experience")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  {t("nav.projects")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  {t("nav.contact")}
                </NavLink>
              </li>
              <li className="lang-switcher">
                {locales.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    className="lang-switcher-btn"
                    aria-pressed={l.code === locale}
                    onClick={() => setLocale(l.code)}
                    style={{
                      color: l.code === locale ? theme.body : theme.text,
                      backgroundColor:
                        l.code === locale ? theme.text : "transparent",
                      borderColor: theme.text,
                    }}
                  >
                    {l.label}
                  </button>
                ))}
              </li>
            </ul>
          </header>
        </div>
      </Fade>
    );
  }
}
export default Header;
