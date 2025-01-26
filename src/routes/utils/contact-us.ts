import Elysia, { t } from "elysia";
import { prisma } from "~libs/prisma";
import { isAuthenticated } from "~middlewares/isAuthenticated";

// Contact Message Service
export const contactMessage = (app: Elysia) =>
    app.group(
      "/contact",
      {
        detail: {
          tags: ["ContactMessage"],
        },
      },
      (app) =>
        app
          .get(
            "/",
            async () => {
              return await prisma.contactMessage.findMany();
            },
            {
              detail: {
                summary: "Get All Messages",
              },
            }
          )
          .get(
            "/:id",
            async ({ params }) => {
              const { id } = params;
              const message = await prisma.contactMessage.findFirst({
                where: { id },
              });
              
              if (!message) {
                return { Message: `Message with id ${id} is not found` };
              }
              return message;
            },
            {
              detail: {
                summary: "Get Message",
              },
            }
          )
          .post(
            "/",
            async ({ body }) => {
              return await prisma.contactMessage.create({
                data: body,
              });
            },
            {
              body: t.Object({
                name: t.String(),
                email: t.String(),
                subject: t.String(),
                message: t.String(),
              }),
              detail: {
                summary: "Create Message",
              },
            }
          )
          .use(isAuthenticated)
          .put(
            "/:id",
            async ({ params, body }) => {
              const { id } = params;
              const existingMessage = await prisma.contactMessage.findFirst({
                where: { id },
              });
              
              if (!existingMessage) {
                return { Message: `Message with id ${id} is not found` };
              }
  
              return await prisma.contactMessage.update({
                where: { id },
                data: body,
              });
            },
            {
              body: t.Object({
                isRead: t.Optional(t.Boolean()),
              }),
              detail: {
                summary: "Update Message",
              },
            }
          )
          .delete(
            "/:id",
            async ({ params }) => {
              const { id } = params;
              const existingMessage = await prisma.contactMessage.findFirst({
                where: { id },
              });
              
              if (!existingMessage) {
                return { Message: `Message with id ${id} is not found` };
              }
  
              return await prisma.contactMessage.delete({
            where: { id },
            });
          },
          {
            detail: {
              summary: "Delete Message",
            },
          }
        )
  );