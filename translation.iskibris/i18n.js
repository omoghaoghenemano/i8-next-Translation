import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import Cookies from 'js-cookie'
const getFallBack = Cookies.get('lng')


i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: getFallBack,
  debug: true,
  detection: {
    order: ['queryString', 'cookie'],
    cache: ['cookie'],
    lookupQuerystring: 'lng'
  },
  cookieMinutes: 10,
  cookieDomain: 'myDomain',
  interpolation: {
    escapeValue: false
  }
})

export default i18n