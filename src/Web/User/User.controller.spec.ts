import 'dotenv/config'

import Request from 'supertest'
import { connectToMongo } from '../../Data/Drivers/Mongoose/Connection'
import UserModel from '../../Data/Drivers/Mongoose/User/User.model'
import { app } from '../App'

const request = Request(app.server)

describe('UserController', () => {
  beforeAll(async (done) => {
    // Hacky way to make my life more pleasant
    const uri = process.env.DB_URI?.replace('3layer', 'test') as string
    await connectToMongo(uri)

    await UserModel.deleteMany()

    done()
  })

  it('Should get an OK response', async (done) => {
    const res = await request.post('/').send({ name: 'Donny' })
    expect(res.status).toEqual(200)
    done()
  })
})
