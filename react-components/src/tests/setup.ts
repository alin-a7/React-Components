/* eslint-env jest */
import '@testing-library/jest-dom'
import { server } from '../mooks/server'

beforeAll(() =>
  server.listen({
    onUnhandledRequest: 'error',
  }),
)

afterEach(() => server.resetHandlers())

afterAll(() => server.close())
