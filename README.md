
## Description

[TheBigShort](https://github.com/vamsys/the-big-short) NestJs TypeScript Example Project.

## Installation


```bash
$ yarn install
```

## Running the app

```bash
# watch mode runs on http://localhost:3000
$ npm run start:dev
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e
```

## Local Test

End point: `/get-big` returns longest string in a sentence.

```bash

curl \
-X  POST \
-H  "Content-Type: application/json" \
--data '{"sentence": "this is too long sentence with !@@£$%%^&*"}' \
http://localhost:3000/get-big

```
End point: `/get-short` returns shortest string in a sentence.

```bash 
curl \
-X  POST \
-H  "Content-Type: application/json" \
--data '{"sentence": "this is too long sentence with !@@£$%%^&*"}' \
http://localhost:3000/get-short
```
