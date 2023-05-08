import { cleanData, connect, disconnect, loginPayload, loginUser, registerUser, userPayload } from './mongodb.memory'

beforeAll(connect)
beforeEach(cleanData)
afterAll(disconnect)

describe('Auth', () => {
  describe('Register User route', () => {
    it('should return register success', async () => {
      const { body, statusCode }: any = await registerUser(userPayload)
      expect(statusCode).toBe(200)
      expect(body.data.name).toBe(userPayload.name)
      expect(body.data.email).toBe(userPayload.email)
      expect(body.data.pic).toBe(userPayload.pic)
    })
  })

  describe('Login User route', () => {
    describe('login without user registered', () => {
      it('should return a 422 status', async () => {
        const { statusCode }: any = await loginUser(loginPayload)

        expect(statusCode).toBe(422)
      })
    })

    describe('login with user already registered and wrong username or password', () => {
      it('should return a 422 status and wrong username or password', async () => {
        const { body, statusCode }: any = await loginUser({ email: 'jane.do@example.com', password: 'JaneDoe123' })

        expect(statusCode).toBe(422)
        expect(body.description).toBe('incorrect email or password')
      })
    })

    describe('success login user', () => {
      it('should return a 200 status and the user', async () => {
        await registerUser(userPayload)
        const { body, statusCode }: any = await loginUser(loginPayload)

        expect(statusCode).toBe(200)
        expect(body.data.name).toBe(userPayload.name)
        expect(body.data.email).toBe(userPayload.email)
      })
    })
  })
})
