Тестовое задание на позицию fullstack разработчик для ООО Сервис Финанс Консалтинг

<div style="font-size: 12px">
Необходимо применить:

- TypeScript
- express, jwt
- react, redux, styled, material ui (опционально)

Цель — создать веб приложение для заказа товаров со склада
Личный кабинет с разделением на роли: админ и пользователь

Реализовать авторизацию и регистрацию:

- Форма регистрации для пользователей
- Использовать JWT
- Админ создается в БД, форма регистрации для него не нужна

Раздел с товарами:

- CRUD товаров для админа
- Обычные пользователи могут только заказывать товары
- Данные о товарах, их кол-ве и стоимости должны хранится в БД MySQL

Будет плюсом:

- Использовать Sequelize для работы с БД
- Упаковка в докер
- Написание gitlab CI - тестирование, линтинг, билд, деплой (ssh...)
- Тесты
</div>


итого применены:
<ul>
  <li>Сервер <b>Node.js/express</b></li>
  <li>БД <b>MySQL/sequelize</b></li>
  <li>Клиент <b>Typescript/React</b></li>
  <li>Стейт менеджер <b>Redux Toolkit</b></li>
</ul>
Из заданий с плюсом выполнены работы с использованием sequelize
на текущий момент на задание потрачено ~24-26 часов(будет добавляться по мере продвижения проекта)

для для использования создать файл .env в папке server, заполнить поля как в файле env.txt

для запуска сервера npm run dev
для зпуска клиента npm run start
