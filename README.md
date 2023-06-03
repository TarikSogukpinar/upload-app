
# Upload App (work in progress)

Platform for users to upload and manage files. Built using Node.js and Next.js


## Installation

git clone https://github.com/TarikSogukpinar/note.git

Node.js
```bash
  cd server
  npm install
  npm run dev:production & npm run dev:development
```

Next.js
```bash
  cd client
  npm install
  npm run dev
```
    
## Features

- Login / Register

- Update Password

- Delete Account

- Account Information

- Security Information

- User location and session information


## Roadmap
- Swagger Documentation

- Language Support (TR - EN)

- Docker

- Redis

- Responsive Fixes




## API Reference

#### Register User

```http
  POST /api/auth/register
```

| Parameter | Type     | 
| :-------- | :------- | 
| `userName`, `email` `password` `confirmPassword`| `string` | 

#### Login User

```http
  POST /api/auth/login
```

| Parameter | Type     | 
| :-------- | :------- | 
| `email` `password` `confirmPassword`| `string` | 

#### Logout User

```http
  GET /api/auth/logout
```

| Parameter | Type     | 
| :-------- | :------- | 
| `no parameter needed` | `string` | 


#### Update Password

```http
  PUT /api/auth/updatePassword/:id
```

| Parameter | Type     | 
| :-------- | :------- | 
| `User ID` | `string` | 


#### Get User By Id

```http
  GET /api/user/getUserById/:id
```

| Parameter | Type     | 
| :-------- | :------- | 
| `User ID` | `string` | 


#### Get User Location Information

```http
  GET /api/user/getUserLocationInformation
```

| Parameter | Type     | 
| :-------- | :------- | 
| `no parameter needed` | `string` | 


#### Get User Operating System Type

```http
  GET /api/user/getUserOperatingSystemType
```

| Parameter | Type     | 
| :-------- | :------- | 
| `no parameter needed` | `string` | 


#### User Account Deleted

```http
  DELETE /api/user/userAccountDeleted/:id
```

| Parameter | Type     | 
| :-------- | :------- | 
| `User ID` | `string` | 


#### Upload File

```http
  POST /api/upload/uploadFile
```

| Parameter | Type     | 
| :-------- | :------- | 
| `File type(.pdf.jpg)` | `string` | 




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

Node.js ENV

`NODE_ENV = deveopment or production`

`PORT = 5000 or 4000`

`CLIENT_HOST = localhost:3000`

`PRIVATE_KEY = yoursecretkey`

`MONGO_URI = yourmongodbURL`

Next.js ENV

`SERVER_HOST = http://localhost:5000`


## Feedback

If you have any feedback, please reach out to me at tariksogukpinar@outlook.com


## Demo

This project is still under construction and will be added very soon

