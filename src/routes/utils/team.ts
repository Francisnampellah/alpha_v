import Elysia, { t } from "elysia";
import { prisma } from "~libs/prisma";


// TeamMember Service
export const teamMember = (app: Elysia) =>
    app.group(
      "/team",
      {
        detail: {
          tags: ["TeamMember"],
        },
      },
      (app) =>
        app
          .get(
            "/",
            async () => {
              return await prisma.teamMember.findMany({
                include: { blogPosts: true },
                orderBy: { order: 'asc' },
              });
            },
            {
              detail: {
                summary: "Get All Team Members",
              },
            }
          )
          .get(
            "/:id",
            async ({ params }) => {
              const { id } = params;
              const member = await prisma.teamMember.findFirst({
                where: { id },
                include: { blogPosts: true },
              });
              
              if (!member) {
                return { Message: `Team member with id ${id} is not found` };
              }
              return member;
            },
            {
              detail: {
                summary: "Get Team Member",
              },
            }
          )
          .post(
            "/",
            async ({ body }) => {
              // Check for unique email
              const existingMember = await prisma.teamMember.findUnique({
                where: { email: body.email },
              });
              
              if (existingMember) {
                return { Message: `Team member with email ${body.email} already exists` };
              }
  
              return await prisma.teamMember.create({
                data: body,
                include: { blogPosts: true },
              });
            },
            {
              body: t.Object({
                name: t.String(),
                position: t.String(),
                bio: t.String(),
                imageUrl: t.Optional(t.String()),
                email: t.String(),
                socialLinks: t.Optional(t.Any()),
                isActive: t.Optional(t.Boolean()),
                order: t.Optional(t.Number()),
              }),
              detail: {
                summary: "Create Team Member",
              },
            }
          )
          .put(
            "/:id",
            async ({ params, body }) => {
              const { id } = params;
              const existingMember = await prisma.teamMember.findFirst({
                where: { id },
              });
              
              if (!existingMember) {
                return { Message: `Team member with id ${id} is not found` };
              }
  
              // Check email uniqueness if email is being updated
              if (body.email && body.email !== existingMember.email) {
                const emailExists = await prisma.teamMember.findUnique({
                  where: { email: body.email },
                });
                
                if (emailExists) {
                  return { Message: `Team member with email ${body.email} already exists` };
                }
              }
  
              return await prisma.teamMember.update({
                where: { id },
                data: body,
                include: { blogPosts: true },
              });
            },
            {
              body: t.Object({
                name: t.Optional(t.String()),
                position: t.Optional(t.String()),
                bio: t.Optional(t.String()),
                imageUrl: t.Optional(t.String()),
                email: t.Optional(t.String()),
                socialLinks: t.Optional(t.Any()),
                isActive: t.Optional(t.Boolean()),
                order: t.Optional(t.Number()),
              }),
              detail: {
                summary: "Update Team Member",
              },
            }
          )
          .delete(
            "/:id",
            async ({ params }) => {
              const { id } = params;
              const existingMember = await prisma.teamMember.findFirst({
                where: { id },
              });
              
              if (!existingMember) {
                return { Message: `Team member with id ${id} is not found` };
              }
  
              // Check if member has associated blogs
              const hasBlogs = await prisma.blog.count({
                where: { authorId: id },
              });
  
              if (hasBlogs > 0) {
                return { 
                  Message: `Cannot delete team member with id ${id} as they have associated blog posts. 
                           Please reassign or delete the blog posts first.` 
                };
              }
  
              return await prisma.teamMember.delete({
                where: { id },
              });
            },
            {
              detail: {
                summary: "Delete Team Member",
              },
            }
          )
    );