## Blogging Platform API

A simple blogging platform API execise from https://roadmap.sh/projects/blogging-platform-api


## API Reference

#### Get all posts

```http
  GET /api/v1/posts
```

#### Search post by term

```http
  GET /api/v1/posts?term=
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `term`      | `string` | **Required**. Term of post to fetch |

#### Get post

```http
  GET /api/v1/posts/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of post to fetch |

#### Create post

```http
  POST /api/v1/posts
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**.|
| `content`      | `string` | **Required**.|
| `category`      | `string` | **Required**.|
| `tags`      | `string[]` | **Required**.|

#### Update post

```http
  PUT /api/v1/posts/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**.|

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**.|
| `content`      | `string` | **Required**.|
| `category`      | `string` | **Required**.|
| `tags`      | `string[]` | **Required**.|

#### Delete post

```http
  DELETE /api/v1/posts/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**.|