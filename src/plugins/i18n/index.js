import VueI18n from 'vue-i18n'
import Vue from 'vue'
import { DEFAULT_LANGUAGE, FALLBACK_LANGUAGE } from './Settings'
import en from '@/translations/en.json'

Vue.use(VueI18n)
export const i18n = new VueI18n({
  locale: DEFAULT_LANGUAGE, // set locale
  fallbackLocale: FALLBACK_LANGUAGE,
  messages: { en } // set locale messages
})
