# Запуск приложения

### 1) Клонируем проект к себе на локальный пк
### 2) В командной строке пишем `npm install`
### 3) Там же пишем `npm start` (В случае возникновения проблем с импортом, переименовать папки (button, input, modal, select в components) и (board, header в app/main) на те же имена, только с заглавной буквы)
### 4) Запустится приложение с адресом http://localhost:3000. В случае, если порт другой, его необходимо запомнить.
### 5) Клонируем сервер на локальный пк с отдельного репозитория https://github.com/SergeyShabalin/Trello-Server (желательно в другую папку)
### 6) В командной строке пишем `npm install`
### 7) Открываем в корне репозитория файл .env, в нём необходимо выставить параметр CLIENT_URL=http://localhost:3000(в случае, если он действительно 3000, иначе изменить на тот, что запомнили в 4 пункте) 
### 8) Запускаем `node src/index.js`. Сервер поднимается на http://localhost:4000/

Готово, можно тестировать приложение



# Стек

###-Redux
###-React-router-dom
###-Redux-thunk

###Логика redux находится в папке store
###В папке hooks находятся пара кастомных хуков
###Запросы к серверу - в папке api
###Преиспользуемые компоненты - в папке components
###Остальное приложение - в папке app
