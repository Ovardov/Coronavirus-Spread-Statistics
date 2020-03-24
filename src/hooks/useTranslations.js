import { useContext, createContext, useState } from 'react'
import translations from '../translations.json'

export const LanguageContext = createContext()

export const useTranslations = () => useContext(LanguageContext);

export const useTranslationsProvider = () => {
  let defaultLanguage = localStorage.getItem('language') ? localStorage.getItem('language') : 'bg';

  const [activeLanguage, setActiveLanguage] = useState(defaultLanguage);

  const changeLanguage = language => {
    setActiveLanguage(language);

    localStorage.setItem('language', language)
  }

  const translate = path => {
    let translation = translations[activeLanguage];

    path.split('.').forEach(key => {
      translation = translation[key]
    })

    return translation
  }

  return {
    activeLanguage,
    translate,
    changeLanguage
  }
}
