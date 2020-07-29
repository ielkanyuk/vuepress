---
home: true
heroImage: /hero.png
actionText: Начать →
actionLink: /ru/guide/
footer: MIT Licensed | Copyright © 2018-present Evan You
---

<div style="text-align: center">
  <Bit/>
</div>

<div class="features">
  <div class="feature">
    <h2>Простой</h2>
    <p>Минимум настроек с markdown-ориентированной структурой проекта помогает вам сосредоточиться на написании.</p>
  </div>
  <div class="feature">
    <h2>Основан на Vue</h2>
    <p>Наслаждайтесь опытом разработки с Vue + webpack, используя Vue-компоненты в разметке, и создавайте свои собственные темы с Vue.</p>
  </div>
  <div class="feature">
    <h2>Производительный</h2>
    <p>VuePress генерирует предварительно собранные статические HTML-страницы, и запускается как обычное SPA один раз, когда приложение загрузилось.</p>
  </div>
</div>

### Просто, как раз-два-три!

``` bash
# Создайте новый проект из готового шаблона
yarn create vuepress [directoryName]
# ИЛИ npx create-vuepress [directoryName]

# Перейдите в директорию с новым проектом
cd [directoryName]

# Запустите локальный сервер разработки
yarn dev
# ИЛИ npm run dev

# Сборка статических фалов
yarn build
# ИЛИ npm run build
```

::: warning ПРИМЕЧАНИЯ ПО СОВМЕСТИМОСТИ
VuePress работает с Node.js версии 8.6 и выше.
:::
