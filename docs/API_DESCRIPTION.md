# Описание методов API [страница будет обновляться по мере добавления методов]

## Авторизация

`POST /auth { username, password }`. В качестве `username` используется поле `email`. Все пользователи имеют одинаковый пароль `qwerty`.

Сервер отвечает одним из двух http-кодов `(401|200)`. В случае ответа `401` кодом дополнительно отправляется сообщение об ошибки в поле message. В случае успеха сервер возвращает токен, который должен быть использован во всех остальных запросах в заголовке `authorization` в формате `Bearer <token>`, и информацию о текущем пользователе.

Формат ответа:

```javascript
{
  token: string,
  user: {
    _id: string,
    firstName: string,
    lastName: string,
    avatar: string,
    bio: string,
    email: string,
  }
}
```

## Запрос списка фотографий

`GET /api/photos`

При необходимости можно передать query-параметры `page` и `limit` для пагинации. Пример `GET /api/photos?page=2&limit=10`. По умолчанию выводится первая страница в количестве 16 фотографий.

Формат ответа:

```javascript
{
  page: number, // номер текущей страницы
  total: number, // общее количество фото
  photos: array, // массив с фотографиями
}
```

## Запрос определенной фотографии

`GET /api/photos/:photoID` где `:photoID` - id фото

Пример `GET /api/photos/5d037c74d46ab369a8ee73e5`.

Формат ответа:

```javascript
{
  id: string;
  ...
}
```

## Запрос информации по пользователю

`GET /api/users/:userId`

Формат ответа:

```javascript
{
  firstName: string,
  lastName: string,
  avatar: string,
  bio: string,
  email: string,
}
```