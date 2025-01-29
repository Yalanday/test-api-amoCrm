# amo-widget-server

тестовый веб-сервер 

1. для приема code и последующего обмена code на авторизационный токен (accessToken) amoCRM

2. для просмотра данных amoCRM через API

[Видео: amoCRM и oAuth 2.0](https://youtu.be/CxQcB5AsyHI)


### install & run

установить и запустить amo-widget-server

> git clone https://github.com/antirek/amo-widget-server.git

> cd amo-widget-server

> npm install

> npm run start:server


установить и запусть localtunnel

> npm install -g localtunnel

> lt --port 3000 --subdomain test-amo-widget-server --print-requests


### ссылки

[AmoCRM Developers: Описание механизмов и работы с oAuth 2.0](https://www.amocrm.ru/developers/content/oauth/oauth)
