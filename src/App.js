import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import { LocaleProvider } from "./i18n/LocaleContext";

function App() {
  return (
    <LocaleProvider>
      <ThemeProvider theme={chosenTheme}>
        <>
          <GlobalStyles />
          <div>
            <Main theme={chosenTheme} />
          </div>
        </>
      </ThemeProvider>
    </LocaleProvider>
  );
}

export default App;
