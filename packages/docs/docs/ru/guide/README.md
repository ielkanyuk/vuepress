# Введение

<Bit/>

VuePress состоит из двух частей: [минималистичного генератора статических сайтов](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/core), основанном на Vue [системе тем](../theme/README.md) и [Plugin API](../plugin/README.md), и [теме по умолчанию](../theme/default-theme-config.md), оптимизированной для написания технической документации. Он был создан для поддежки документации подпроектов Vue.

Каждая страница, которую генерирует VuePress, сожержит в себе свою собственную уже готовую статическую HTML-разметку, обеспечивая высокую производительность при загрузке и оптимизацию для SEO. Тем не менее, после загрузки страницы Vue принимает статический контент и превращает его в полноценное одностраничное приложение (SPA). Дополнительные страницы подгружаются по запросу, когда пользователь перемещается по сайту.

## Как это работает

Сайт VuePress - это на самом деле SPA, основанное на [Vue](http://vuejs.org/), [Vue Router](https://github.com/vuejs/vue-router) и [webpack](http://webpack.js.org/). Если вы до этого разрабатывали на Vue, вы заметите знакомый опыт разработки при написании или разработке собственных тем (вы даже можете использовать Vue DevTools для отладки вашей темы!).

Во время сборки мы создаем серверную версию приложения и отображаем соответствующий HTML-код, фактически посещая каждый маршрут. Этот подход вдохновлен командой [Nuxt](https://nuxtjs.org/)'а `nuxt generate` и другими проектами, такими как [Gatsby](https://www.gatsbyjs.org/).

Каждый Markdown-файл компилирууется в HTML с помощью [markdown-it](https://github.com/markdown-it/markdown-it) и затем обрабатывается как шаблон компонента Vue. Это позволяет вам напрямую использовать Vue в ваших файлах Markdown и отлично подходит для встраивания динамического контента.

## Features

**Встроенные расширения Markdown**

* [Table of Contents](../guide/markdown.md#table-of-contents)
* [Custom Containers](../guide/markdown.md#custom-containers)
* [Line Highlighting](../guide/markdown.md#line-highlighting-in-code-blocks)
* [Line Numbers](../guide/markdown.md#line-numbers)
* [Import Code Snippets](../guide/markdown.md#import-code-snippets)

**Использование Vue в Markdown**

* [Templating](../guide/using-vue.md#templating)
* [Using Components](../guide/using-vue.md#using-components)

**Vue-powered custom theme system**

* [Metadata](../theme/writing-a-theme.md#site-and-page-metadata)
* [Content Excerpt](../theme/writing-a-theme.md#content-excerpt)

**Базовая тема**

* Responsive layout
* [Optional Homepage](../theme/default-theme-config.md#homepage)
* [Simple out-of-the-box header-based search](../theme/default-theme-config.md#built-in-search)
* [Algolia Search](../theme/default-theme-config.md#algolia-search)
* Customizable [navbar](../theme/default-theme-config.md#navbar) and [sidebar](../theme/default-theme-config.md#sidebar)
* [Auto-generated GitHub link and page edit links](../theme/default-theme-config.md#git-repo-and-edit-links)
* [PWA: Popup UI to refresh contents](../theme/default-theme-config.md#popup-ui-to-refresh-contents)
* [Last Updated](../theme/default-theme-config.md#last-updated)
* [Multi-Language Support](../guide/i18n.md)

**Тема для блога**

* [Документация](https://vuepress-theme-blog.ulivz.com/)
* [Пример](https://ulivz.com/)


**Плагины**

* [Powerful Plugin API](../plugin/README.md)
* [Blog Plugin](https://vuepress-plugin-blog.ulivz.com/)
* [Search Plugin](../plugin/official/plugin-search.md)
* [PWA Plugin](../plugin/official/plugin-pwa.md)
* [Google Analytics Plugin](../plugin/official/plugin-google-analytics.md)
* ...

## Почему не ...?

### Nuxt

Nuxt is capable of doing what VuePress does, but it’s designed for building applications. VuePress is focused on content-centric static sites and provides features tailored for technical documentation out of the box.

### Docsify / Docute

Both are great projects and also Vue-powered. Except they are both fully runtime-driven and therefore not SEO-friendly. If you don’t care for SEO and don’t want to mess with installing dependencies, these are still great choices.

### Hexo

Hexo has been serving the Vue docs well - in fact, we are probably still a long way to go from migrating away from it for our main site. The biggest problem is that its theming system is static and string-based - we want to take advantage of Vue for both the layout and the interactivity. Also, Hexo’s Markdown rendering isn’t the most flexible to configure.

### GitBook

We’ve been using GitBook for most of our sub project docs. The primary problem with GitBook is that its development reload performance is intolerable with a large amount of files. The default theme also has a pretty limiting navigation structure, and the theming system is, again, not Vue based. The team behind GitBook is also more focused on turning it into a commercial product rather than an open-source tool.
