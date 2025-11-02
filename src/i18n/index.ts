import { createI18n } from 'vue-i18n'
import pt from './locales/pt.json'

export default createI18n({
  legacy: false,
  locale: 'pt',
  fallbackLocale: 'pt',
  messages: {
    pt,
  },
})
