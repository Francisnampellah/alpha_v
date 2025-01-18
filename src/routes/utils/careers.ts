import Elysia, { t } from "elysia";
import { prisma } from "~libs/prisma";

// Career Service
export const career = (app: Elysia) =>
    app.group(
      "/careers",
      {
        detail: {
          tags: ["Career"],
        },
      },
      (app) =>
        app
          .get(
            "/",
            async () => {
              return await prisma.career.findMany({
                include: { applications: true },
              });
            },
            {
              detail: {
                summary: "Get All Careers",
              },
            }
          )
          .get(
            "/:id",
            async ({ params }) => {
              const { id } = params;
              const career = await prisma.career.findFirst({
                where: { id },
                include: { applications: true },
              });
              
              if (!career) {
                return { Message: `Career with id ${id} is not found` };
              }
              return career;
            },
            {
              detail: {
                summary: "Get Career",
              },
            }
          )
          .post(
            "/",
            async ({ body }) => {
              return await prisma.career.create({
                data: body,
                include: { applications: true },
              });
            },
            {
              body: t.Object({
                title: t.String(),
                department: t.String(),
                location: t.String(),
                description: t.String(),
                requirements: t.Array(t.String()),
                isRemote: t.Optional(t.Boolean()),
                isActive: t.Optional(t.Boolean()),
              }),
              detail: {
                summary: "Create Career",
              },
            }
          )
          .put(
            "/:id",
            async ({ params, body }) => {
              const { id } = params;
              const existingCareer = await prisma.career.findFirst({
                where: { id },
              });
              
              if (!existingCareer) {
                return { Message: `Career with id ${id} is not found` };
              }
  
              return await prisma.career.update({
                where: { id },
                data: body,
                include: { applications: true },
              });
            },
            {
              body: t.Object({
                title: t.Optional(t.String()),
                department: t.Optional(t.String()),
                location: t.Optional(t.String()),
                description: t.Optional(t.String()),
                requirements: t.Optional(t.Array(t.String())),
                isRemote: t.Optional(t.Boolean()),
                isActive: t.Optional(t.Boolean()),
              }),
              detail: {
                summary: "Update Career",
              },
            }
          )
          .delete(
            "/:id",
            async ({ params }) => {
              const { id } = params;
              const existingCareer = await prisma.career.findFirst({
                where: { id },
              });
              
              if (!existingCareer) {
                return { Message: `Career with id ${id} is not found` };
              }
  
              return await prisma.career.delete({
                where: { id },
              });
            },
            {
              detail: {
                summary: "Delete Career",
              },
            }
          )
    );
  