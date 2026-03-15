import { Hono } from 'hono'

export const app = new Hono<{
  Bindings:{
    DATABASE_URL: string;
    JWT_SECRET:string;
  }
}>()


app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
