import Request from 'supertest'
import { app } from './App'

const request = Request(app.server)

describe('UserController', () => {
  it('Should work', async (done) => {
    const res = await request.post('/').send({ name: 'donny' })

    expect(res.status).toEqual(200)
    done()
  })
})
