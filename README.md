
![Logo](https://i.ibb.co/V2kwCdP/Aqua-Black-Cloud-Upload-Brand-Logo.png )


# Upload App

Platform for users to upload and manage files. Built using Node.js and Next.js


## Screenshots

![App Screenshot](https://i.ibb.co/gD5yrz0/Screenshot-8.png)
![App Screenshot](https://i.ibb.co/yY0F7y0/Screenshot-9.png)
![App Screenshot](https://i.ibb.co/PW5zGFQ/Screenshot-10.png)
![App Screenshot](https://i.ibb.co/gtg9FML/Screenshot-3.png)
![App Screenshot](https://i.ibb.co/hWXSBSm/Screenshot-6.png)
![App Screenshot](https://i.ibb.co/3W5FwHp/Screenshot-7.png)




## Installation

git clone https://github.com/TarikSogukpinar/upload-app.git

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

Docker
```bash
  cd upload-app
  docker-compose up
```
    
## Features

- Login / Register

- Update Password

- Delete Account

- Account Information

- Security Information

- User location and session information

- Docker

- Responsive Fixes (It's still going on)


## Roadmap
- Swagger Documentation

- Language Support (TR - EN)

- Redis





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


## Running Tests

To run tests, run the following command (Unit testing not yet completed)

```bash
  npm run test
```

## Sample test methods

```bash
describe('Register', () => {
  it('should create a new user and return 200 status', async () => {
    const res = await request(app).post('/api/auth/register').send({
      firstName: 'exampleuserFirstName',
      lastName: 'exampleuserLastName',
      email: 'example@example.com',
      password: 'testTarik123password',
      confirmPassword: 'testTarik123password',
    })

    expect(res.statusCode).toEqual(200)
  })
})

describe('Login', () => {
  it('should login user and return 200 status', async () => {
    const res = await request(app).post('/api/auth/login').send({
      email: 'example@gmail.com',
      password: 'Tarik123',
    })

    expect(res.statusCode).toEqual(200)
  })
})

```


## Tech Stack

**Client:** Next.js, Tailwind CSS 

**(Packages: axios, jose, jwt-decode, tailwindcss, react-hot-toast)**

**Server:** Node.js, Express.js 

**(Packages: express, bcryptjs, compression, cookie-parser, jsonwebtoken, dotenv, cors, geoip-lite, helmet, joi, joi-password-complexity, mongoose, moment, multer, nodemailer, slugify, uuid, xss-clean, express-mongo-sanitize, express-rate-limit, jest, nodemon, supertest, cross-env, ipify, http-status-codes)**

**Database:** Mongo DB
## Demo

This project is still under construction and will be added very soon


## Feedback

If you have any feedback, please reach out to me at tariksogukpinar@outlook.com

