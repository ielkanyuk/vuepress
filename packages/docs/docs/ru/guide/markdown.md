# Расширения Markdown

## Header Anchors

Headers automatically get anchor links applied. Rendering of anchors can be configured using the [`markdown.anchor`](../config/README.md#markdown-anchor) option.

## Ссылки

### Внутренние ссылки

Внутренние ссылки преобразуются в `<router-link>` для навигации по SPA. Кроме того, каждый `README.md` или `index.md` , содержащийся в каждом подкаталоге, будет автоматически преобразован в `index.html`, с соответствующим URL `/`.

Например, с учетом следующей структуры каталогов:

```
.
├─ README.md
├─ foo
│  ├─ README.md
│  ├─ one.md
│  └─ two.md
└─ bar
   ├─ README.md
   ├─ three.md
   └─ four.md
```

И если вы находитесь в `foo/one.md`:

```md
[Home](/) <!-- Направляет пользователя в корень README.md -->
[foo](/foo/) <!-- Направляет пользователя на страницу index.html каталога foo -->
[foo heading](./#heading) <!-- Привязывает пользователя к заголовку в файле README каталога foo -->
[bar - three](../bar/three.md) <!-- Вы можете добавить .md (рекомендуется) -->
[bar - four](../bar/four.html) <!-- Или можете добавить .html -->
```

### Перенаправления для URL

VuePress supports redirecting to clean links. If a link `/foo` is not found, VuePress will look for a existing `/foo/` or `/foo.html`. Conversely, when one of `/foo/` or `/foo.html` is not found, VuePress will try the other. With this feature, we can customize your website’s URLs with the official plugin [vuepress-plugin-clean-urls](https://vuepress.github.io/plugins/clean-urls/).

::: tip
Regardless of whether the permalink and clean-urls plugins are used, your relative path should be defined by the current file structure. In the above example, even though you set the path of `/foo/one.md` to `/foo/one/`, you should still access `/foo/two.md` via `./two.md`.
:::

### Внешние ссылки

Внешние ссылки автоматически устанавливают параметры `target="_blank" rel="noopener noreferrer"`:

- [vuejs.org](https://ru.vuejs.org)
- [VuePress на GitHub](https://github.com/vuejs/vuepress)

Вы можете настроить атрибуты, добавленные к внешним ссылкам, установив [config.markdown.externalLinks](../config/README.md#markdown-externallinks).

## Форматирование

[YAML frontmatter](https://jekyllrb.com/docs/frontmatter/) поддерживается из коробки:

``` yaml
---
title: Blogging Like a Hacker
lang: en-US
---
```

This data will be available to the rest of the page, along with all custom and theming components.

Для получения более подробной информации см. [Frontmatter](./frontmatter.md).

## GitHub-Style Tables

**Input**

```
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

**Output**

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## Emoji :tada:

**Input**

```
:tada: :100:
```

**Output**

:tada: :100:

A [list of all emojis](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json) is available.

## Table of Contents

**Input**

```
[[toc]]
```

**Output**

<!--lint disable no-shortcut-reference-link no-undefined-references-->

[[toc]]

<!--lint enable no-shortcut-reference-link no-undefined-references-->

Rendering of the TOC can be configured using the [`markdown.toc`](../config/README.md#markdown-toc) option.

## Custom Containers <Badge text="default theme"/>

Custom containers can be defined by their types, titles, and contents.

### Default Title
**Input**

```md
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in IE / Edge
:::
```

**Output**

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in That is / Edge
:::

### Custom Title
**Input**

````md
::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
```js
console.log('Hello, VuePress!')
```
:::
````

**Output**

::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
```js
console.log('Hello, VuePress!')
```
:::

**Also see:**

- [vuepress-plugin-container](https://vuepress.github.io/plugins/container/)

## Syntax Highlighting in Code Blocks

VuePress uses [Prism](https://prismjs.com/) to highlight language syntax in Markdown code blocks, using coloured text. Prism supports a wide variety of programming languages. All you need to do is append a valid language alias to the beginning backticks for the code block:

**Input**

````
``` js
export default {
  name: 'MyComponent',
  // ...
}
```
````

**Output**

``` js
export default {
  name: 'MyComponent',
  // ...
}
```

**Input**

````
``` html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```
````

**Output**

``` html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```

A [list of valid languages](https://prismjs.com/#languages-list) is available on Prism’s site.

## Line Highlighting in Code Blocks

**Input**

````
``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

In addition to a single line, you can also specify multiple single lines, ranges, or both:

- Line ranges: for example `{5-8}`, `{3-10}`, `{10-17}`
- Multiple single lines: for example `{4,7,9}`
- Line ranges and single lines: for example `{4,7-13,16,23-27,40}`

**Input**

````
``` js{1,4,6-7}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VuePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```
````

**Output**

``` js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VuePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```

## Line Numbers

You can enable line numbers for each code blocks via config:

``` js
module.exports = {
  markdown: {
    lineNumbers: true
  }
}
```

<!-- TODO Support line numbers for specific fence block -->

- Demo:

<picture>
  <source srcset="/line-numbers-desktop.png" media="(min-width: 719px)">
  <img src="/line-numbers-desktop.png" class="line-numbers-desktop-snap" alt="Image">
</picture>

<picture>
  <source srcset="/line-numbers-mobile.gif" media="(max-width: 719px)">
  <img src="/line-numbers-mobile.gif" class="line-numbers-mobile-snap" alt="Image">
</picture>

<style>
  @media screen and (min-width:  719px) {
    .line-numbers-mobile-snap {
       display: none;
    }
  }
  @media screen and (max-width:  719px) {
    .line-numbers-desktop-snap {
       display: none;
    }
    .line-numbers-mobile-snap {
      max-width: none!important;
      margin: 0 -1.5rem;
      width: 100vw;
    }
  }
</style>

## Import Code Snippets <Badge text="beta" type="warning"/>

You can import code snippets from existing files via following syntax:

``` md
<<< @/filepath
```

It also supports [line highlighting](#line-highlighting-in-code-blocks):

``` md
<<< @/filepath{highlightLines}
```

**Input**

``` md
<<< @/../@vuepress/markdown/__tests__/fragments/snippet.js{2}
```

**Output**

<!--lint disable strong-marker-->

<<< @/../@vuepress/markdown/__tests__/fragments/snippet.js{2}

<!--lint enable strong-marker-->

::: tip
Since the import of the code snippets will be executed before webpack compilation, you can’t use the path alias in webpack. The default value of `@` is `process.cwd()`.
:::

You can also use a [VS Code region](https://code.visualstudio.com/docs/editor/codebasics#_folding) to only include the corresponding part of the code file. You can provide a custom region name after a `#` following the filepath (`snippet` by default):

**Input**

``` md
<<< @/../@vuepress/markdown/__tests__/fragments/snippet-with-region.js#snippet{1}
```

**Code file**

<!--lint disable strong-marker-->

<<< @/../@vuepress/markdown/__tests__/fragments/snippet-with-region.js

<!--lint enable strong-marker-->

**Output**

<!--lint disable strong-marker-->

<<< @/../@vuepress/markdown/__tests__/fragments/snippet-with-region.js#snippet{1}

<!--lint enable strong-marker-->

## Advanced Configuration

VuePress uses [markdown-it](https://github.com/markdown-it/markdown-it) as the Markdown renderer. A lot of the extensions above are implemented via custom plugins. You can further customize the `markdown-it` instance using the `markdown` option in `.vuepress/config.js`:

``` js
module.exports = {
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },
    extendMarkdown: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-xxx'))
    }
  }
}
```
