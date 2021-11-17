import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import Cache from 'i18next-localstorage-cache';
import LanguageResouces from './LanguageResouces';

// install plugin
// npm install react-i18next i18next-http-backend i18next-browser-languagedetector --save
//https://react.i18next.com/latest/using-with-hooks
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  //.use(Backend)

  .use(Cache)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources:LanguageResouces(),
    //lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',
    //fallbackNS:'common',
    ns:'common',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
      useSuspense: false,
    }
  });
export default i18n;