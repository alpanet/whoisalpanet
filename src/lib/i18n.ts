import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en/common.json";
import tr from "../locales/tr/common.json";
i18next
  .use(initReactI18next)
  .init({
    lng: 'tr', // Default language
    fallbackLng: 'tr',
    resources: {
      en: { translation: en },
      tr: { translation: tr },
    },
    interpolation: { escapeValue: false },
  });

export default i18next;
