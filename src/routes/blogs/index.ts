import Elysia, { t } from "elysia";
import { prisma } from "~libs/prisma";
import { isAuthenticated } from "~middlewares/isAuthenticated";

// Blog Service
export const blog = (app: Elysia) =>
    app.group(
      "/blogs",
      {
        detail: {
          tags: ["Blog"],
        },
      },
      (app) =>
        app
          .get(
            "/",
            async () => {
              return await prisma.blog.findMany({
                include: { author: true },
              });
            },
            {
              detail: {
                summary: "Get All Blogs",
              },
            }
          )
          .get(
            "/:id",
            async ({ params }) => {
              const { id } = params;
              const blog = await prisma.blog.findFirst({
                where: { id },
                include: { author: true },
              });
              
              if (!blog) {
                return { Message: `Blog with id ${id} is not found` };
              }
              return blog;
            },
            {
              detail: {
                summary: "Get Blog",
              },
            }
          )
          .use(isAuthenticated)
          .post(
            "/",
            async ({ body }) => {
              const { authorId } = body;
              
              const author = await prisma.teamMember.findUnique({
                where: { id: authorId },
              });
              
              // if (!author) {
              //   return { Message: `Author with id ${authorId} not found` };
              // }
  
              return await prisma.blog.create({
                data: body,
                include: { author: true },
              });
            },
            {
              body: t.Object({
                title: t.String(),
                // content: t.String(),
                slug: t.String(),
                authorId: t.String(),
                imageUrl: t.Optional(t.String()),
                tags: t.Array(t.String()),
                published: t.Optional(t.Boolean()),
                content: t.Optional(t.Any()),
                blocks: t.Optional(t.Any()),
              }),
              detail: {
                summary: "Create Blog",
              },
            }
          )
    );


    // Event Service
export const event = (app: Elysia) =>
    app.group(
      "/events",
      {
        detail: {
          tags: ["Event"],
        },
      },
      (app) =>
        app
          .get(
            "/",
            async () => {
              return await prisma.event.findMany();
            },
            {
              detail: {
                summary: "Get All Events",
              },
            }
          )
          .get(
            "/:id",
            async ({ params }) => {
              const { id } = params;
              const event = await prisma.event.findFirst({
                where: { id },
              });
              
              if (!event) {
                return { Message: `Event with id ${id} is not found` };
              }
              return event;
            },
            {
              detail: {
                summary: "Get Event",
              },
            }
          )
          .post(
            "/",
            async ({ body }) => {
              const { date } = body;
              
              // Validate date format
              function isValidDateFormat(date: string): boolean {
                const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
                return dateRegex.test(date);
              }
  
              if (!isValidDateFormat(date)) {
                return { Message: "Invalid date format. Use YYYY-MM-DD." };
              }
  
              return await prisma.event.create({
                data: {
                  ...body,
                  date: new Date(date),
                },
              });
            },
            {
              body: t.Object({
                title: t.String(),
                description: t.String(),
                date: t.String(),
                location: t.Optional(t.String()),
                imageUrl: t.Optional(t.String()),
                isVirtual: t.Optional(t.Boolean()),
                registrationUrl: t.Optional(t.String()),
                content: t.Optional(t.Any()),
                blocks: t.Optional(t.Any()),
              }),
              detail: {
                summary: "Create Event",
              },
            }
          )
    );