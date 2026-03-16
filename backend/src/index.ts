import { Hono } from 'hono'

export const app = new Hono<{
  Bindings:{
    DATABASE_URL: string;
    JWT_SECRET:string;
  }
}>()


app.route('api/v1/user', userRouter)
app.route('api/v1/boook',bookRouter)

export default app
