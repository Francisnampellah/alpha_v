import Elysia, { t } from "elysia";
// import { isAuthenticated } from "~middlewares/auth";
// import { prisma } from "../../libs/prisma";
import { prisma } from "~libs/prisma";
import { jwt } from "@elysiajs/jwt";

export const auth = (app: Elysia) =>
  app.group(
    "/auth",
    {
      detail: {
        tags: ["Authentication"],
      },
    },
    (app) =>
      app
        .post(
          "/register",
          async ({ body, set }) => {
            const { name, email, password } = body;

            const existingEmail = await prisma.user.findUnique({
              where: { email: email },
            });
            if (existingEmail) {
              set.status = 400;
              return { Message: "Email already exists" };
            }

            const encryptedPassword = await Bun.password.hash(password, {
              algorithm: "bcrypt",
              cost: 10,
            });

            const user = await prisma.user.create({
              data: {
                name: name,
                email: email,
                password: encryptedPassword,
                status: "ACTIVE",
                role: "ADMIN",
              },
            });
            return { Message: "User registration successfully" };
          },
          {
            body: t.Object({
              name: t.String(),
              email: t.String({ format: "email" }),
              password: t.String({ minLength: 6, maxLength: 20 }),
            }),
            detail: {
              summary: "Registration",
            },
          }
        )
        .use(
          jwt({
            name: "jwt",
            secret: Bun.env.JWT_SECRET!,
            exp: "1h",
          })
        )
        .post(
          "/login",
          async ({ body, set, jwt }) => {
            const { email, password } = body;

            const user = await prisma.user.findUnique({
              where: { email },
            });

            if (!user) {
              set.status = 400;
              return { Message: "Please enter valid email or password" };
            }

            const passwordMatch = await Bun.password.verify(
              password,
              user.password,
              "bcrypt"
            );

            if (!passwordMatch) {
              set.status = 400;
              return { Message: "Please enter valid email or password" };
            }

            const token = await jwt.sign({ sub: user.id.toString() });

            return {
              user:{
                "id":user.id,
                "name":user.name,
                "email":user.email,
                "status":user.status,
                "role":user.role,
                "createdAt":user.createdAt
              },
              token,
            };
          },
          {
            body: t.Object({
              email: t.String({ format: "email" }),
              password: t.String(),
            }),
            detail: {
              summary: "Login",
            },
          }
        )
    // .post(
    //   "/password-reset",
    //   async ({ params }) => {
    //     const { id } = params;

    //     const existingVillage = await prisma.village.findUnique({
    //       where: { id: Number(id) },
    //     });
    //     if (!existingVillage) {
    //       return { Message: "Village with id " + id + " is not found" };
    //     }
    //     await prisma.village.delete({ where: { id: Number(id) } });
    //     return { Message: "Deleted successfully" };
    //   },
    //   {
    //     detail: { summary: "Delete Village" },
    //   }
    // )
    // .post(
    //   "/password-reset-verification",
    //   async ({ params }) => {
    //     const { id } = params;

    //     const existingVillage = await prisma.village.findUnique({
    //       where: { id: Number(id) },
    //     });
    //     if (!existingVillage) {
    //       return { Message: "Village with id " + id + " is not found" };
    //     }
    //     await prisma.village.delete({ where: { id: Number(id) } });
    //     return { Message: "Deleted successfully" };
    //   },
    //   {
    //     detail: { summary: "Delete Village" },
    //   }
    // )
    // .post(
    //   "/refresh-token",
    //   async ({ params }) => {
    //     const { id } = params;

    //     const existingVillage = await prisma.village.findUnique({
    //       where: { id: Number(id) },
    //     });
    //     if (!existingVillage) {
    //       return { Message: "Village with id " + id + " is not found" };
    //     }
    //     await prisma.village.delete({ where: { id: Number(id) } });
    //     return { Message: "Deleted successfully" };
    //   },
    //   {
    //     detail: { summary: "Delete Village" },
    //   }
    // )
  );
