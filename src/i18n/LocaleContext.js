import React, { createContext, useContext, useState } from "react";
import en from "./portfolioData/en";
import zhTW from "./portfolioData/zh-TW";
import es from "./portfolioData/es";
import enProjects from "./projectsData/en.json";
import zhTWProjects from "./projectsData/zh-TW.json";
import esProjects from "./projectsData/es.json";
import { uiStrings } from "./uiStrings";

export const DEFAULT_LOCALE = "en";

export const LOCALES = [
  { code: "en", label: "EN" },
  { code: "zh-TW", label: "繁中" },
  { code: "es", label: "ES" },
];

const PORTFOLIO_BY_LOCALE = { en, "zh-TW": zhTW, es };
const PROJECTS_BY_LOCALE = {
  en: enProjects,
  "zh-TW": zhTWProjects,
  es: esProjects,
};

const STORAGE_KEY = "portfolio_locale";

function readStoredLocale() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && PORTFOLIO_BY_LOCALE[stored]) return stored;
  } catch (e) {
    // localStorage unavailable (privacy mode, SSR, etc.) - ignore and fall back
  }
  return DEFAULT_LOCALE;
}

function lookup(dict, key) {
  const parts = key.split(".");
  let node = dict;
  for (let i = 0; i < parts.length; i++) {
    if (node == null) return undefined;
    node = node[parts[i]];
  }
  return node;
}

function interpolate(str, vars) {
  if (!vars) return str;
  return Object.keys(vars).reduce(
    (acc, k) => acc.replace(new RegExp(`\\{${k}\\}`, "g"), vars[k]),
    str
  );
}

export const LocaleContext = createContext(null);

export function LocaleProvider(props) {
  const [locale, setLocaleState] = useState(readStoredLocale);

  const setLocale = (next) => {
    if (!PORTFOLIO_BY_LOCALE[next]) return;
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
      // ignore
    }
  };

  const strings = uiStrings[locale] || uiStrings[DEFAULT_LOCALE];
  const fallbackStrings = uiStrings[DEFAULT_LOCALE];

  const t = (key, vars) => {
    let value = lookup(strings, key);
    if (value === undefined) value = lookup(fallbackStrings, key);
    if (value === undefined) return key;
    return interpolate(value, vars);
  };

  const value = {
    locale,
    setLocale,
    locales: LOCALES,
    t,
    portfolio:
      PORTFOLIO_BY_LOCALE[locale] || PORTFOLIO_BY_LOCALE[DEFAULT_LOCALE],
    projects: PROJECTS_BY_LOCALE[locale] || PROJECTS_BY_LOCALE[DEFAULT_LOCALE],
  };

  return (
    <LocaleContext.Provider value={value}>
      {props.children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return ctx;
}
