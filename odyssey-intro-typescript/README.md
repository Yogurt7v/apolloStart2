# Введение в GraphQL с TypeScript (Курс Odyssey)

Добро пожаловать в стартовый код для курса **Введение в GraphQL с TypeScript**. Вы можете найти [уроки курса и инструкции](https://apollographql.com/tutorials/intro-typescript) на платформе обучения Odyssey от [Apollo](https://apollographql.com).

## Как использовать этот репозиторий

Курс проведет вас шаг за шагом по всем действиям. Этот код является отправной точкой вашего путешествия!

Перейдите в корневую директорию проекта и выполните следующие команды:

```bash
npm install && npm run dev
```

Ветка `final` этого репозитория содержит финальную стадию курса со всеми завершенными шагами и кодом! Если вы застряли, вы можете обратиться к ней и сравнить свой код.

## Доступные скрипты

- `npm run dev` - запускает сервер разработки с автоматической перезагрузкой
- `npm start` - компилирует проект и запускает production сервер
- `npm run compile` - компилирует TypeScript в JavaScript
- `npm test` - запускает тесты
- `npm run generate` - генерирует TypeScript типы из GraphQL схемы

## Структура проекта

```
src/
├── index.ts          # Точка входа сервера
├── schema.graphql    # GraphQL схема
├── resolvers.ts      # Резолверы GraphQL
├── context.ts        # Контекст Apollo Server
├── helpers.ts        # Вспомогательные функции
├── datasources/      # Источники данных
│   └── listing-api.ts
└── types.ts          # Сгенерированные типы
```

## Получение помощи

Этот репозиторий _не отслеживается регулярно_.

По любым вопросам или проблемам, касающимся содержания курса, обращайтесь в [раздел Odyssey нашего сообщества](https://community.apollographql.com/tags/c/help/6/odyssey). Также вы можете [присоединиться к Discord Apollo](https://discord.gg/graphos).

## Справочная документация

Для дополнительной информации рассмотрите следующие разделы:

- [Официальная документация TypeScript](https://www.typescriptlang.org/docs/)
- [Документация Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- [Документация GraphQL](https://graphql.org/learn/)
