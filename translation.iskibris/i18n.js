import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import Cookies from 'js-cookie'

let userfallback
if (typeof window !== 'undefined') {

   userfallback = localStorage.getItem('i18nextLng')
}
console.log(userfallback,'your language is')


i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: userfallback,
  debug: true,
  detection: {
    order: ['queryString', 'cookie'],
    cache: ['cookie'],
  
  },
  
  interpolation: {
    escapeValue: false
  }
})

export default i18n