# Публикация

The following guides are based on some shared assumptions:

- You are placing your docs inside the `docs` directory of your project;
- You are using the default build output location (`.vuepress/dist`);
- VuePress is installed as a local dependency in your project, and you have setup the following npm scripts:

``` json
{
  "scripts": {
    "docs:build": "vuepress build docs"
  }
}
```

## GitHub Pages

1. Установите корректное значение параметра `base` в `docs/.vuepress/config.js`.

   Если вы публикуете в `https://<USERNAME>.github.io/`, то вы можете выставить `base` в дефолтное значение `"/"`.

   Если вы публикуете в `https://<USERNAME>.github.io/<REPO>/`, например если ваш репозиторий находится по адресу `https://github.com/<USERNAME>/<REPO>`, то установите значение `base` в `"/<REPO>/"`.

2. Внутри своего проекта создайте файл `deploy.sh` со следующим содержимым (раскомментируйте выделенные строки), и запустите его для публикации:

``` bash{13,20,23}
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```

::: tip Подсказка
Вы также можете запустить приведенный выше скрипт из своей CI системы, прописав его в настройках, чтобы включить автоматическую публикацию при каждом push'e.
:::

### GitHub Pages и Travis CI

1. Установите корректное значение параметра `base` в `docs/.vuepress/config.js`.

   If you are deploying to `https://<USERNAME or GROUP>.github.io/`, you can omit `base` as it defaults to `"/"`.

   If you are deploying to `https://<USERNAME or GROUP>.github.io/<REPO>/`, for example your repository is at `https://github.com/<USERNAME>/<REPO>`, then set `base` to `"/<REPO>/"`.

2. Создайте `.travis.yml` в корне своего проекта.

3. Выполните локально команду `yarn` или `npm install` и сделайте commit сгенерированного lock-файла (это файлы `yarn.lock` или `package-lock.json`).

4. Use the GitHub Pages deploy provider template, and follow the [Travis CI documentation](https://docs.travis-ci.com/user/deployment/pages/).

``` yaml
language: node_js
node_js:
  - lts/*
install:
  - yarn install # npm ci
script:
  - yarn docs:build # npm run docs:build
deploy:
  provider: pages
  skip_cleanup: true
  local_dir: docs/.vuepress/dist
  github_token: $GITHUB_TOKEN # A token generated on GitHub allowing Travis to push code on you repository. Set in the Travis settings page of your repository, as a secure variable
  keep_history: true
  on:
    branch: master
```

### GitLab Pages и GitLab CI

1. Set the correct `base` in `docs/.vuepress/config.js`.

   If you are deploying to `https://<USERNAME or GROUP>.gitlab.io/`, you can omit `base` as it defaults to `"/"`.

   If you are deploying to `https://<USERNAME or GROUP>.gitlab.io/<REPO>/`, for example your repository is at `https://gitlab.com/<USERNAME>/<REPO>`, then set `base` to `"/<REPO>/"`.

2. Set `dest` in `.vuepress/config.js` to `public`.

3. Create a file called `.gitlab-ci.yml` in the root of your project with the content below. This will build and deploy your site whenever you make changes to your content:

``` yaml
image: node:9.11.1

pages:
  cache:
    paths:
    - node_modules/

  script:
  - yarn install # npm install
  - yarn docs:build # npm run docs:build
  artifacts:
    paths:
    - public
  only:
  - master
```


## Netlify

1. В [Netlify](https://netlify.com), создайте новый проект из GitHub со следующими настройками:

- **Build Command:** `vuepress build docs` or `yarn docs:build` or `npm run docs:build`
- **Publish directory:** `docs/.vuepress/dist`

2. Нажмите конопку публикации.

## Google Firebase

1. Убедитесь, что у вас установлены [firebase-tools](https://www.npmjs.com/package/firebase-tools).

2. Создайте файлы `firebase.json` и `.firebaserc` в корне вашего проекта со следующим содержимым:

`firebase.json`:
```json
{
 "hosting": {
   "public": "./docs/.vuepress/dist",
   "ignore": []
 }
}
```

`.firebaserc`:
```js
{
 "projects": {
   "default": "<YOUR_FIREBASE_ID>"
 }
}
```

3. После запуска `yarn docs:build` или `npm run docs:build`, сделайте публикацию командой `firebase deploy`.

## Surge

1. Установите [surge](https://www.npmjs.com/package/surge), if you haven’t already.

2. Запустите `yarn docs:build` или `npm run docs:build`.

3. Deploy to surge by typing `surge docs/.vuepress/dist`.

You can also deploy to a [custom domain](http://surge.sh/help/adding-a-custom-domain) by adding `surge docs/.vuepress/dist yourdomain.com`.

## Heroku

1. Установите [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).

2. Create a Heroku account by [signing up](https://signup.heroku.com).

3. Запустите `heroku login` и заполните ваши авторизационные данные Heroku:

   ``` bash
   heroku login
   ```

4. Создайте файл `static.json` в корне вашего проекта со следующим содержимым:

   `static.json`:
   ```json
   {
     "root": "./docs/.vuepress/dist"
   }
   ```

This is the configuration of your site; read more at [heroku-buildpack-static](https://github.com/heroku/heroku-buildpack-static).

5. Set up your Heroku git remote:

``` bash
# version change
git init
git add .
git commit -m "My site ready for deployment."

# creates a new app with a specified name
heroku apps:create example

# set buildpack for static sites
heroku buildpacks:set https://github.com/heroku/heroku-buildpack-static.git
```

6. Опубликуйте ваш сайт:

``` bash
# publish site
git push heroku master

# opens a browser to view the Dashboard version of Heroku CI
heroku open
```

## Vercel

См. [Создание и публикация приложения VuePress с Vercel](https://vercel.com/guides/deploying-vuepress-to-vercel).
