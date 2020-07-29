module.exports = [
  {
    text: 'Руководство',
    link: '/ru/guide/'
  },
  {
    text: 'Настройка',
    link: '/ru/config/'
  },
  {
    text: 'Плагины',
    link: '/ru/plugin/'
  },
  {
    text: 'Темы',
    link: '/ru/theme/'
  },
  {
    text: 'Ещё',
    ariaLabel: 'Ещё',
    items: [
      {
        text: 'API',
        items: [
          {
            text: 'CLI',
            link: '/ru/api/cli.html'
          },
          {
            text: 'Node',
            link: '/ru/api/node.html'
          }
        ]
      },
      {
        text: 'Контрибьюторам',
        items: [
          {
            text: 'Локальная разработка',
            link: '/ru/miscellaneous/local-development.html'
          },
          {
            text: 'Концепции дизайна',
            link: '/ru/miscellaneous/design-concepts.html'
          },
          {
            text: 'FAQ',
            link: '/ru/faq/'
          },
          {
            text: 'Глоссарий',
            link: '/ru/miscellaneous/glossary.html'
          }
        ]
      },
      {
        text: 'Разное',
        items: [
          {
            text: 'Миграция с версии 0.x',
            link: '/ru/miscellaneous/migration-guide.html'
          },
          {
            text: 'Changelog',
            link: 'https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md'
          }
        ]
      }
    ]
  },
  {
    text: '0.x',
    link: 'https://v0.vuepress.vuejs.org/'
  }
]
