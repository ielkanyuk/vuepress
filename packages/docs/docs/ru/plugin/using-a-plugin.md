# Подключение плагинов

Вы можете подлкючать плагины в файле конфигурации `.vuepress/config.js`:

``` js
module.exports = {
  plugins: [
    require('./my-plugin.js')
  ]
}
```

## Подключение плагинов из зависимостей

Плагины можно публиковать в npm в `CommonJS` в формате `vuepress-plugin-xxx`. Подлючить их можно следующим образом:

``` js
module.exports = {
  plugins: [ 'vuepress-plugin-xxx' ]
}
```

## Сокращения имен

Если имя вашего плагина начинается с `vuepress-plugin-`, вы можете использовать сокращения, чтобы отбросить этот префикс:

``` js
module.exports = {
  plugins: [ 'xxx' ]
}
```

То же самое:

``` js
module.exports = {
  plugins: [ 'vuepress-plugin-xxx' ]
}
```

Это так же работает со [Scoped Packages](https://docs.npmjs.com/misc/scope):

``` js
module.exports = {
  plugins: [ '@org/vuepress-plugin-xxx', '@vuepress/plugin-xxx' ]
}
```

Сокращённо:

``` js
module.exports = {
  plugins: [ '@org/xxx', '@vuepress/xxx' ]
}
```

::: warning Важно
Плагины, имена которых начинаются с `@vuepress/plugin-` - это официально поддерживаемые плагины.
:::

## Опции

### Babel Style

У плагинов могут быть параметры, указанные путем переноса имени и объекта параметров в массив внутри вашего файла конфигурации:

``` js
module.exports = {
  plugins: [
    [
      'vuepress-plugin-xxx',
      { /* options */ }
    ]
  ]
}
```

Поскольку этот стиль соответствует [babel’s Plugin/Preset Options](https://babeljs.io/docs/en/plugins#plugin-preset-options), мы называем его `Babel Style`.

### Object Style

VuePress предоставляет более простой способ подключения плагинов из зависимостей:

``` js
module.exports = {
  plugins: {
    'xxx': { /* options */ }
  }
}
```

::: warning Важно
Плагин может быть отключен, когда `false` явно передается как параметр.

- Babel style

``` js
module.exports = {
  plugins: [
    [ 'xxx', false ] // disabled.
  ]
}
```

- Object style

``` js
module.exports = {
  plugins: {
    'xxx': false // disabled.
  }
}
```

:::
