# IH MOVIE DB

description:
Create CRUD API for Master Data of Movie
Create CRUD API for Review of the Movie (one to many - relationship)
Create Auth API for user registration n login.
Add authentication and authorization

List of available endpoints:

CRUD Buku

- `POST /buku`
- `GET /buku`
- `GET /buku/:id`
- `PUT /buku/:id`
- `DELETE /buku/:id`

CRUD Anggota

- `POST /anggota`
- `GET /anggota`
- `PUT /anggota/:id`
- `DELETE /anggota/:id`

CRUD Peminjaman

- `POST /peminjaman`
- `GET /peminjaman`
- `PUT /peminjaman/:id`
- `DELETE /peminjaman/:id`

CRUD Auth

- `POST /register`
- `POST /login`

### POST /movie

description:
Create Master Data of Movie

Request:

- headers:

```json
{
  "authorization": "Bearer TokenFromJWT"
}
```

- body:

```json
{
  "title": "Ice Cold",
  "description": "Pembunuhan Jessica Mirna"
}
```

Response:

Success

- status: 201
- body:

```json
{
  "id": 1,
  "title": "Ice Cold",
  "description": "Pembunuhan Jessica Mirna",
  "createdAt": "2023-10-10T04:39:48.537Z",
  "updatedAt": "2023-10-10T04:39:48.537Z"
}
```

Forbidden

- status: 404
- body:

```json
{
  "message": "akses hanya untuk user admin"
}
```

Unauthorized

- status: 401
- body:

```json
{
  "message": "user tidak terauthentikasi"
}
```

### GET /movie

description:
get all movie list

Response:

- status: 200
- body:

```json
{
  "movie": [
    {
      "id": 1,
      "title": "Ice Cold",
      "description": "Pembunuhan Jessica Mirna",
      "createdAt": "2023-10-10T04:39:48.537Z",
      "updatedAt": "2023-10-10T04:39:48.537Z"
    }
  ]
}
```

### GET /movie/:id

description:
get detail movie Left join to its review

Request:

- param:

```json
{
  "id": 1
}
```

Response:

- status: 200
- body:

```json
{
  "id": 1,
  "title": "Ice Cold",
  "description": "Pembunuhan Jessica Mirna",
  "createdAt": "2023-10-10T04:39:48.537Z",
  "updatedAt": "2023-10-10T04:39:48.537Z",
  "Reviews": []
}
```

### PUT /movie/:id

description:
edit single genre data

Request:

- headers:

```json
{
  "authorization": "Bearer TokenFromJWT"
}
```

- param:

```json
{
  "id": 1
}
```

- body:

```json
{
  "title": "Ice Cold",
  "description": "Documentary Kematian mirna"
}
```

Response:

- status: 200
- body:

```json
{
  "id": 1,
  "title": "Ice Cold",
  "description": "Documentary Kematian mirna",
  "createdAt": "2023-10-10T04:39:48.537Z",
  "updatedAt": "2023-10-11T04:39:48.537Z"
}
```

Forbidden

- status: 404
- body:

```json
{
  "message": "akses hanya untuk user admin"
}
```

Unauthorized

- status: 401
- body:

```json
{
  "message": "user tidak terauthentikasi"
}
```

### DELETE /movie/:id

description:
delete Movie from list
when deleting movie that is used in at least one review, the on delete association should also delete the review entity

Request:

- headers:

```json
{
  "authorization": "Bearer TokenFromJWT"
}
```

- param:

```json
{
  "id": 1
}
```

- body:
  none

Response:

- status: 200
- body:

```json
{
  "message": "movie Ice Cold telah dihapus"
}
```

Forbidden

- status: 404
- body:

```json
{
  "message": "akses hanya untuk user admin"
}
```

Unauthorized

- status: 401
- body:

```json
{
  "message": "user tidak terauthentikasi"
}
```

## Review

### POST /review

description:
Create Review of Movie

Request:

- headers:

```json
{
  "authorization": "Bearer TokenFromJWT"
}
```

- body:

```json
{
  "title": "MENCENGANGKAN",
  "description": "dari documentary ini malah makin curiga sama ayahnya mirna, karna dari kasus ini dia doang yang diuntungin, ya ga sih???",
  "rating": 5,
  "movieId": 1
}
```

Response:

- status: 201
- body:

```json
{
  "id": 1,
  "title": "MENCENGANGKAN",
  "description": "dari documentary ini malah makin curiga sama ayahnya mirna, karna dari kasus ini dia doang yang diuntungin, ya ga sih???",
  "rating": 5,
  "movieId": 1,
  "userId": 1,
  "createdAt": "2023-10-10T04:39:48.537Z",
  "updatedAt": "2023-10-10T04:39:48.537Z",
  "Movie": {
    "id": 1,
    "title": "Ice Cold",
    "description": "Documentary Kematian mirna",
    "createdAt": "2023-10-10T04:39:48.537Z",
    "updatedAt": "2023-10-11T04:39:48.537Z"
  }
}
```

Forbidden

- status: 404
- body:

```json
{
  "message": "user tidak punya akses data ini"
}
```

Unauthorized

- status: 401
- body:

```json
{
  "message": "user tidak terauthentikasi"
}
```

### GET /review

description:
get all review with its movie

Response:

- status: 200
- body:

```json
{
  "review": [
    {
      "id": 1,
      "title": "MENCENGANGKAN",
      "description": "dari documentary ini malah makin curiga sama ayahnya mirna, karna dari kasus ini dia doang yang diuntungin, ya ga sih???",
      "rating": 5,
      "movieId": 1,
      "userId": 1,
      "createdAt": "2023-10-10T04:39:48.537Z",
      "updatedAt": "2023-10-10T04:39:48.537Z",
      "Movie": {
        "id": 1,
        "title": "Ice Cold",
        "description": "Documentary Kematian mirna",
        "createdAt": "2023-10-10T04:39:48.537Z",
        "updatedAt": "2023-10-11T04:39:48.537Z"
      }
    }
  ]
}
```

### PUT /review/:id

description:
edit single review data

Request:

- headers:

```json
{
  "authorization": "Bearer TokenFromJWT"
}
```

- query param:

```json
{
  "id": 1
}
```

- body:

```json
{
  "title": "MENCENGANGKAN",
  "description": "dari documentary ini malah makin curiga sama ayahnya mirna, karna dari kasus ini dia doang yang diuntungin, ya ga sih???",
  "rating": 10
}
```

Response:

- status: 200
- body:

```json
{
  "id": 1,
  "title": "MENCENGANGKAN",
  "description": "dari documentary ini malah makin curiga sama ayahnya mirna, karna dari kasus ini dia doang yang diuntungin, ya ga sih???",
  "rating": 10,
  "movieId": 1,
  "userId": 1,
  "createdAt": "2023-10-10T04:39:48.537Z",
  "updatedAt": "2023-10-11T04:39:48.537Z"
}
```

Forbidden

- status: 404
- body:

```json
{
  "message": "user tidak punya akses data ini"
}
```

Unauthorized

- status: 401
- body:

```json
{
  "message": "user tidak terauthentikasi"
}
```

### DELETE /review/:id

description:
delete single review
when deleting review that is used in at least one movies, the on delete association should also delete the one to many relationship

Request:

- headers:

```json
{
  "authorization": "Bearer TokenFromJWT"
}
```

- param:

```json
{
  "id": 1
}
```

- body:
  none

Response:

- status: 200
- body:

```json
{
  "message": "review dengan id 1 telah dihapus"
}
```

Forbidden

- status: 404
- body:

```json
{
  "message": "user tidak punya akses data ini"
}
```

Unauthorized

- status: 401
- body:

```json
{
  "message": "user tidak terauthentikasi"
}
```

## Auth

### POST /register

description:
Register user

Request:

- headers:

```json
{
  "authorization": "Bearer TokenFromJWT"
}
```

- body:

```json
{
  "name": "Ice Cold",
  "email": "vocasia@email.com",
  "password": "12345678"
}
```

Response:

Success

- status: 201
- body:

```json
{
  "message": "akun berhasil dibuat, silahkan login."
}
```

### POST /login

description:
Login user

Request:

- headers:

```json
{
  "authorization": "Bearer TokenFromJWT"
}
```

- body:

```json
{
  "email": "vocasia@email.com",
  "password": "12345678"
}
```

Response:

Success

- status: 200
- body:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ2b2Nhc2lhQGVtYWlsLmNvbSIsImlhdCI6MTY5NzUyODM2M30.ciOlPjuhBoNGRmad98VOAYK4eUnwTPryphF9bfGd7-4"
}
```
