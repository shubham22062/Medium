import { PrismaClient } from "@prisma/client/extension";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import {verify} from "hono/jwt";

export const bookRouter = new Hono<{
    Bindings:{
        DATABASE_URL:string;
        JWT_SECRET:string
    }
    variables:{
        userId:string
    }
}>();


bookRouter.use(async (c, next)=>{
    const jwt = c.req.header('')
})