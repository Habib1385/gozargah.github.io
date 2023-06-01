import { defineConfig } from 'vitepress'

export const BASE = '/marzban'

const persianThemeConfig = {
  sidebar: [
    // {
    //   text: 'Examples',
    //   items: [
    //     { text: 'Markdown Examples', link: '/documentation/' },
    //     { text: 'Runtime API Examples', link: '/examples/' },
    //   ],
    // },
  ],
  nav: [
    { text: 'خانه', link: '/' },
    { text: 'مستندات', link: '/documentation/' },
    { text: 'نمونه‌ها', link: '/examples/' },
  ],

  footer: {
    message: 'منتشر شده تحت لایسنس AGPL-3.0',
    copyright: 'توسعه داده شده در کارگروه گذرگاه',
  },
  editLink: {
    pattern: 'https://github.com/gozargah/gozargah.github.io/edit/master/marzban/fa/:path',
    text: 'ویرایش این صفحه در گیت‌هاب',
  },
}

const englishThemeConfig = {
  sidebar: [
    // {
    //   text: 'Examples',
    //   items: [
    //     { text: 'Markdown Examples', link: '/en/documentation/' },
    //     { text: 'Runtime API Examples', link: '/en/examples/' },
    //   ],
    // },
  ],
  nav: [
    { text: 'Home', link: '/en/' },
    { text: 'Documentation', link: '/en/documentation/' },
    { text: 'Examples', link: '/en/examples/' },
  ],

  footer: {
    message: 'Released under AGPL-3.0 License.',
    copyright: 'Copyright © 2023-present Gozargah',
  },
  editLink: {
    pattern: 'https://github.com/gozargah/gozargah.github.io/edit/master/marzban/:path',
    text: 'Edit this page on GitHub',
  },
}

const persianLang = {
  label: 'فارسی',
  lang: 'fa',
  dir: 'rtl',
  title: 'مرزبان',
  description: '',
  link: '/',
  themeConfig: persianThemeConfig,
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Marzban',
  description: 'Unified Censorship Resistant Solution',
  base: BASE,
  cleanUrls: true,
  lang: 'fa',
  locales: {
    root: persianLang,
    fa: {
      ...persianLang,
      link: '/fa/',
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: englishThemeConfig,
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    i18nRouting: true,
    logo: '/images/logo-dark.png',
    socialLinks: [{ icon: 'github', link: 'https://github.com/gozargah/marzban' }],
  },
})
