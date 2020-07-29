# Подключение темы

Темы покдлючаются почти так же, как и плагины.

## Подключение темы из зависимостей

Themes can be published on npm in raw Vue SFC format as `vuepress-theme-xxx`.

``` js
module.exports = {
  theme: 'vuepress-theme-xx'
}
```

## Сокращения

Если название темы начинается с `vuepress-theme-`, вы можете использовать сокращения и отбросить этот префикс:

``` js
module.exports = {
  theme: 'xxx'
}
```

То же самое:

``` js
module.exports = {
  theme: 'vuepress-theme-xxx'
}
```

Это так же работает со [Scoped Packages](https://docs.npmjs.com/misc/scope):

``` js
module.exports = {
  theme: '@org/vuepress-theme-xxx', // or an official theme: '@vuepress/theme-xxx'
}
```

Сокращённо:

``` js
module.exports = {
  theme: '@org/xxx', // or an official theme: '@vuepress/xxx'
}
```

::: warning Важно
Тема, название которой начинается с `@vuepress/theme-`, является официально поддерживаемой темой.
:::
