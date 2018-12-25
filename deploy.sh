#!/usr/bin/env sh
set -e
yarn run docs:build
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy: 发布到 gh-pages'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:wubaiqing/zaobao.git master:gh-pages

cd -
