import Elysia, { t } from "elysia";
import { prisma } from "~libs/prisma";

// Project Service
export const project = (app: Elysia) =>
  app.group(
    "/projects",
    {
      detail: {
        tags: ["Project"],
      },
    },
    (app) =>
      app
        .get(
          "/",
          async () => {
            return await prisma.project.findMany();
          },
          {
            detail: {
              summary: "Get All Projects",
            },
          }
        )
        .get(
          "/:id",
          async ({ params }) => {
            const { id } = params;
            const project = await prisma.project.findFirst({
              where: { id },
            });
            
            if (!project) {
              return { Message: `Project with id ${id} is not found` };
            }
            return project;
          },
          {
            detail: {
              summary: "Get Project",
            },
          }
        )
        .post(
          "/",
          async ({ body }) => {
            return await prisma.project.create({
              data: body,
            });
          },
          {
            body: t.Object({
              title: t.String(),
              description: t.String(),
              imageUrl: t.Optional(t.String()),
              technologies: t.Array(t.String()),
              demoUrl: t.Optional(t.String()),
              githubUrl: t.Optional(t.String()),
              featured: t.Optional(t.Boolean()),
            }),
            detail: {
              summary: "Create Project",
            },
          }
        )
        .put(
          "/:id",
          async ({ params, body }) => {
            const { id } = params;
            const existingProject = await prisma.project.findFirst({
              where: { id },
            });
            
            if (!existingProject) {
              return { Message: `Project with id ${id} is not found` };
            }

            return await prisma.project.update({
              where: { id },
              data: body,
            });
          },
          {
            body: t.Object({
              title: t.String(),
              description: t.String(),
              imageUrl: t.Optional(t.String()),
              technologies: t.Array(t.String()),
              demoUrl: t.Optional(t.String()),
              githubUrl: t.Optional(t.String()),
              featured: t.Optional(t.Boolean()),
            }),
            detail: {
              summary: "Update Project",
            },
          }
        )
  );