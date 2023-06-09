import request from 'supertest'
import mongoose from 'mongoose'
import app from '../../app.js'
import dotenv from 'dotenv'

const envFile =
  process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development'
dotenv.config({
  path: envFile,
})

/* Connecting to the database before each test. */
beforeEach(async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
})

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close()
})

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
