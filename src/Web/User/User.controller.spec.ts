import Request from 'supertest'
import { app } from '../App'

const request = Request(app.server)

describe('UserController', () => {
  it('Should get an OK response', async (done) => {
    const res = await request.post('/').send({ name: 'donny' })

    expect(res.status).toEqual(200)
    done()
  })
})
