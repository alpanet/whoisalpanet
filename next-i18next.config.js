// next-i18next.config.js
module.exports = {
    i18n: {
      defaultLocale: 'tr',
      locales: ['en', 'tr'],
      localeDetection: false,
    },
    fallbackLng: 'tr',
    ns: ['common'],
    reloadOnPrerender: process.env.NODE_ENV === 'development',
  };