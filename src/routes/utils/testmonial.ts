import Elysia, { t } from "elysia";
import { prisma } from "~libs/prisma";

// Testimonial Service
export const testimonial = (app: Elysia) =>
    app.group(
      "/testimonials",
      {
        detail: {
          tags: ["Testimonial"],
        },
      },
      (app) =>
        app
          .get(
            "/",
            async () => {
              return await prisma.testimonial.findMany();
            },
            {
              detail: {
                summary: "Get All Testimonials",
              },
            }
          )
          .get(
            "/:id",
            async ({ params }) => {
              const { id } = params;
              const testimonial = await prisma.testimonial.findFirst({
                where: { id },
              });
              
              if (!testimonial) {
                return { Message: `Testimonial with id ${id} is not found` };
              }
              return testimonial;
            },
            {
              detail: {
                summary: "Get Testimonial",
              },
            }
          )
          .post(
            "/",
            async ({ body }) => {
              return await prisma.testimonial.create({
                data: body,
              });
            },
            {
              body: t.Object({
                clientName: t.String(),
                company: t.Optional(t.String()),
                content: t.String(),
                rating: t.Optional(t.Number()),
                imageUrl: t.Optional(t.String()),
                isPublished: t.Optional(t.Boolean()),
              }),
              detail: {
                summary: "Create Testimonial",
              },
            }
          )
          .put(
            "/:id",
            async ({ params, body }) => {
              const { id } = params;
              const existingTestimonial = await prisma.testimonial.findFirst({
                where: { id },
              });
              
              if (!existingTestimonial) {
                return { Message: `Testimonial with id ${id} is not found` };
              }
  
              return await prisma.testimonial.update({
                where: { id },
                data: body,
              });
            },
            {
              body: t.Object({
                clientName: t.Optional(t.String()),
                company: t.Optional(t.String()),
                content: t.Optional(t.String()),
                rating: t.Optional(t.Number()),
                imageUrl: t.Optional(t.String()),
                isPublished: t.Optional(t.Boolean()),
              }),
              detail: {
                summary: "Update Testimonial",
              },
            }
          )
          .delete(
            "/:id",
            async ({ params }) => {
              const { id } = params;
              const existingTestimonial = await prisma.testimonial.findFirst({
                where: { id },
              });
              
              if (!existingTestimonial) {
                return { Message: `Testimonial with id ${id} is not found` };
              }
  
              return await prisma.testimonial.delete({
                where: { id },
              });
            },
            {
              detail: {
                summary: "Delete Testimonial",
              },
            }
          )
    );