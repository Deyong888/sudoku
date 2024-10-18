import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './locales/en.json';
import zhTranslations from './locales/zh.json';
import jaTranslations from './locales/ja.json';
import esTranslations from './locales/es.json';
import hiTranslations from './locales/hi.json';
import arTranslations from './locales/ar.json';
import ptTranslations from './locales/pt.json';
import bnTranslations from './locales/bn.json';
import ruTranslations from './locales/ru.json';
import frTranslations from './locales/fr.json';
import urTranslations from './locales/ur.json';
import idTranslations from './locales/id.json';
import deTranslations from './locales/de.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      zh: { translation: zhTranslations },
      ja: { translation: jaTranslations },
      es: { translation: esTranslations },
      hi: { translation: hiTranslations },
      ar: { translation: arTranslations },
      pt: { translation: ptTranslations },
      bn: { translation: bnTranslations },
      ru: { translation: ruTranslations },
      fr: { translation: frTranslations },
      ur: { translation: urTranslations },
      id: { translation: idTranslations },
      de: { translation: deTranslations },
    },
    lng: navigator.language.split('-')[0], // 使用浏览器语言设置
    fallbackLng: 'en', // 如果检测到的语言不可用,则使用英语
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
