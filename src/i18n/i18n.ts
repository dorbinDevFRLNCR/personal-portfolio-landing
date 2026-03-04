import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './locales/en/en.json'
import ru from './locales/ru/ru.json'
import de from './locales/de/de.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      de: { translation: de },
    },
    fallbackLng: 'en',
    debug: true,
  })

export default i18n
