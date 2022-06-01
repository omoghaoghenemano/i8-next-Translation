import React from "react";
import { Trans, useTranslation } from "react-i18next";

export default function TestFile() {
    const { t, i18n } = useTranslation();

  return <div >{t("ovie")}</div>;
}
