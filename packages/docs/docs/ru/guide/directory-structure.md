# Структура каталогов

VuePress следует принципу: **"Соглашение лучше конфигурации"**. Рекомендуемая структура каталогов выглядит следующим образом:

<!-- textlint-disable terminology -->

::: vue
.
├── docs
│   ├── .vuepress _(**Optional**)_
│   │   ├── `components` _(**Optional**)_
│   │   ├── `theme` _(**Optional**)_
│   │   │   └── Layout.vue
│   │   ├── `public` _(**Optional**)_
│   │   ├── `styles` _(**Optional**)_
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── `templates` _(**Optional, Danger Zone**)_
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── `config.js` _(**Optional**)_
│   │   └── `enhanceApp.js` _(**Optional**)_
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
:::

<!-- textlint-enable -->

::: warning Важно
Обратите внимание на заглавную букву имени каталога.
:::

- `docs/.vuepress`: Используется для хранения глобальных настроек, компонентов, статических ресурсов и т.д.
- `docs/.vuepress/components`: Компоненты Vue в этом каталоге будут автоматически зарегистрированы как глобальные компоненты.
- `docs/.vuepress/theme`: Используется для хранения локальной темы.
- `docs/.vuepress/styles`: Хранит связанные файлы стилей.
- `docs/.vuepress/styles/index.styl`: Автоматически применяемые глобальные файлы стилей, созданные в конце файла CSS, имеют более высокий приоритет, чем стиль по умолчанию.
- `docs/.vuepress/styles/palette.styl`: Палитра используется для переопределения цветовых констант по умолчанию и для установки цветовых констант Stylus.
- `docs/.vuepress/public`: Каталог статических ресурсов.
- `docs/.vuepress/templates`: Хранит HTML шаблоны.
- `docs/.vuepress/templates/dev.html`: Файл HTML шаблона для среды разработки.
- `docs/.vuepress/templates/ssr.html`: Vue SSR на основе HTML-файла шаблона во время сборки.
- `docs/.vuepress/config.js`: Входная точка файла настроек, так же может быть `yml` или `toml`.
- `docs/.vuepress/enhanceApp.js`: Повышение уровня приложения.

::: warning Важно
При настройке `templates/ssr.html`, или `templates/dev.html`, лучше всего редактировать его на основе [файлов шаблонов по умолчанию](https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/core/lib/client/index.dev.html), в противном случае это может вызвать сбой сборки.
:::

## Дефолтный роутинг страниц

Здесь мы используем каталог `docs` в качестве `targetDir` (см. [Command-line Interface](../api/cli.md#usage)). All the "Relative Paths" below are relative to the `docs` directory. Add `scripts` in `package.json` which is located in your project’s root directory:

```json
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
}
```

For the above directory structure, the default page routing paths are as follows:

|    Relative Path   |  Page Routing  |
|--------------------|----------------|
| `/README.md`       | `/`            |
| `/guide/README.md` | `/guide/`      |
| `/config.md`       | `/config.html` |

**См. также:**

- [Настройка](../config/README.md)
- [Темы](../theme/)
- [Настройка темы по умолчанию](../theme/default-theme-config.md)

