import React from "react";
import logo from "./logo.svg";

import { Trans, useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import "../i18n";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language:any) => {
    i18n.changeLanguage(language);
  };
  var date = new Date();
  date.setTime(date.getTime() + (2000 * 1000));
  return (
    <div className="App">
      <button
        onClick={() => {
          changeLanguage("en");
          Cookies.set("lng", "en",{ expires: date }) ;
        }}
      >
        EN
      </button>
      <button
        onClick={() => {
          changeLanguage("de");
          Cookies.set("lng", "de",{ expires: date }) ;
        }}
      >
        DE
      </button>
      <hr />
      <Trans i18nKey="description.part1">
        To get started, edit <code>src/App.js</code> and save to reload. am
        hungry tho but what can i do smhi
      </Trans>
      <div>{t("mano")}</div>
    </div>
  );
}

export default App;
