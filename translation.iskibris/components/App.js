import React from "react";
import { Trans, useTranslation } from "react-i18next";
import Cookies from "js-cookie";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
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
      
      <div >{t("mano")}</div>
    </div>
  );
}

export default App;
