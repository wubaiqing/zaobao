#!/usr/bin/env sh
set -e
yarn run doc:build
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy: 发布到 gh-pages [ci skip]'

git push -f git@github.com:wubaiqing/zaobao.git master:gh-pages

cd -
