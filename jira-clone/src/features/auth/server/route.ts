import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { loginSchema, registerSchema } from "../schema";
const app = new Hono()
    .post(
        "/login",
        zValidator("json", loginSchema),
        //zValidator("param", z.object({ userId: z.number()})),
        async (c) => {
            const { email, password } = c.req.valid("json");
            console.log({ email, password });
            //const {userId } = c.req.param();
            return c.json({ success: "ok" });
        }
    )
    .post("/register", zValidator("json", registerSchema), async (c) => {
        const { name, email, password } = c.req.valid("json");
        console.log({ name, email, password });
        //const {userId } = c.req.param();
        return c.json({ name, email, password });
    });
export default app;
//2:16:59
