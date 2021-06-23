
# Css Gradient Generator API

This is the API for a CSS-Gradient templates generator, created with nodeJs, Express and PostgreSQL.


## API Reference

#### Get all templates

```http
  GET /api/templates
```
#### Response
```json
  {
        "id": 2,
        "name": "first",
        "author": "laural",
        "gradient_type": "linear",
        "first_direction": "top",
        "second_direction": "right",
        "first_color": "rgb(26, 81, 120)",
        "second_color": "rgb(229, 239, 23)",
        "created_at": "2021-06-22T17:24:13.868Z"
    },
    {
        "id": 3,
        "name": "test",
        "author": "lauralj",
        "gradient_type": "linear",
        "first_direction": "top",
        "second_direction": "right",
        "first_color": "rgb(26, 81, 120)",
        "second_color": "rgb(229, 239, 23)",
        "created_at": "2021-06-22T17:50:38.259Z"
    }
```


#### Get template by id

```http
  GET /api/templates/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of template to fetch |

#### Response
```json
  {
        "id": 2,
        "name": "first",
        "author": "laural",
        "gradient_type": "linear",
        "first_direction": "top",
        "second_direction": "right",
        "first_color": "rgb(26, 81, 120)",
        "second_color": "rgb(229, 239, 23)",
        "created_at": "2021-06-22T17:24:13.868Z"
    }
```

#### Get template by name

```http
  GET /api/templates/name/${name}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Name of template to fetch |

#### Response
```json
  {
        "id": 2,
        "name": "first",
        "author": "laural",
        "gradient_type": "linear",
        "first_direction": "top",
        "second_direction": "right",
        "first_color": "rgb(26, 81, 120)",
        "second_color": "rgb(229, 239, 23)",
        "created_at": "2021-06-22T17:24:13.868Z"
    }
```

#### Create template 

```http
  POST /api/templates
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Name of template to POST |
| `author`      | `string` | **Required**. Author of the template to POST|
| `gradient_type`      | `string` | **Required**. Type of gradient of template to POST |
| `first_direction`      | `string` | First direction of Gradient of Template to POST |
| `second_direction`      | `string` | Second direction of Gradient of Template to POST |
| `first_color`      | `string` | **Required** First color of Gradient of Template to POST |
| `second_color`      | `string` |**Required** Second color of Gradient of Template to POST |





  
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL`



  
## Run Locally

Clone the project

```bash
  git clone https://github.com/laulujan/gradient-generator-api.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

  
## Authors

- [@laulujan](https://www.github.com/laulujan)

  
