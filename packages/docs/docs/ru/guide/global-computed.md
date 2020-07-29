# Глобальные вычисляемые свойства

VuePress предоставляет некоторые базовые [вычисляемые свойства](https://ru.vuejs.org/v2/guide/computed.html#Вычисляемые-свойства), которые можно использовать в [теме по умолчанию](../theme/default-theme-config.md) или пользовательских темах.

## $site

`$site` - значение сайта, который вы сейчас читаете:

``` json
{
  "title": "VuePress",
  "description": "Vue-powered static site generator",
  "base": "/",
  "pages": [
    {
      "lastUpdated": 1524027677000,
      "path": "/",
      "title": "VuePress",
      "frontmatter": {}
    },
    ...
  ]
}
```

## $page

`$page` - значение страницы, которую вы сейчас читаете:

``` json
{
  "title": "Global Computed",
  "frontmatter": {},
  "regularPath": "/guide/global-computed.html",
  "key": "v-d4cbeb69eff3d",
  "path": "/guide/global-computed.html",
  "headers": [
    {
      "level": 2,
      "title": "$site",
      "slug": "site"
    },
    {
      "level": 2,
      "title": "$page",
      "slug": "$page"
    },
    ...
  ]
}
```

## $frontmatter

Ссылка на [$page](#page).frontmatter.

## $lang

Язык текущей страницы. По умолчанию: `en-US`.

Для получения дополнительной информации см. [Интернационализация](../guide/i18n.md).

## $localePath

Префикс локального пути текущей страницы. По умолчанию: `/`.

## $title

Значение тэга `<title>` текущей страницы.

## $description

Значение `content` из `<meta name= "description" content= "...">` для текущей страницы.

## $themeConfig

Ссылка на `siteConfig.themeConfig`.
