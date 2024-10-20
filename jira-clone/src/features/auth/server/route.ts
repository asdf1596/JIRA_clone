import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { loginSchema } from "../schema";
const app = new Hono().post(
    "/login",
    zValidator("json", loginSchema),
    //zValidator("param", z.object({ userId: z.number()})),
    (c) => {
        const { email, password } = c.req.valid("json");
        console.log({ email, password });
        //const {userId } = c.req.param();
        return c.json({ success: "ok" });
    }
);
export default app;
//2:16:59
