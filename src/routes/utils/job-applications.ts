import Elysia, { t } from "elysia";
import { sendEmail } from "~libs/email-service";
import { prisma } from "~libs/prisma";
import { isAuthenticated } from "~middlewares/isAuthenticated";

// Job Application Service
export const jobApplication = (app: Elysia) =>
    app.group(
      "/applications",
      {
        detail: {
          tags: ["JobApplication"],
        },
      },
      (app) =>
        app
          .get(
            "/",
            async () => {
              return await prisma.jobApplication.findMany({
                include: { career: true },
              });
            },
            {
              detail: {
                summary: "Get All Applications",
              },
            }
          )
          .get(
            "/:id",
            async ({ params }) => {
              const { id } = params;
              const application = await prisma.jobApplication.findFirst({
                where: { id },
                include: { career: true },
              });
              
              if (!application) {
                return { Message: `Application with id ${id} is not found` };
              }
              return application;
            },
            {
              detail: {
                summary: "Get Application",
              },
            }
          )
          .post(
            "/",
            async ({ body }) => {
              const { careerId } = body;
              
              const career = await prisma.career.findUnique({
                where: { id: careerId },
              });
              
              if (!career) {
                return { Message: `Career with id ${careerId} not found` };
              }

              sendEmail(body.email, "Application Received", `Thank you for applying for the ${career.title} position. Your application is received and will be reviewed by our team. We will get back to you soon.`);
  
              return await prisma.jobApplication.create({
                data: body,
                include: { career: true },
              });
            },
            {
              body: t.Object({
                careerId: t.String(),
                fullName: t.String(),
                email: t.String(),
                resumeUrl: t.String(),
                coverLetter: t.Optional(t.String()),
                status: t.Optional(t.Enum({
                  PENDING: "PENDING",
                  REVIEWED: "REVIEWED",
                  INTERVIEWING: "INTERVIEWING",
                  ACCEPTED: "ACCEPTED",
                  REJECTED: "REJECTED",
                })),
              }),
              detail: {
                summary: "Create Application",
              },
            }
          )
          .use(isAuthenticated)
          .put(
            "/:id",
            async ({ params, body }) => {
              const { id } = params;
              const existingApplication = await prisma.jobApplication.findFirst({
                where: { id },
              });
              
              if (!existingApplication) {
                return { Message: `Application with id ${id} is not found` };
              }
  
              return await prisma.jobApplication.update({
                where: { id },
                data: body,
                include: { career: true },
              });
            },
            {
              body: t.Object({
                fullName: t.Optional(t.String()),
                email: t.Optional(t.String()),
                resumeUrl: t.Optional(t.String()),
                coverLetter: t.Optional(t.String()),
                status: t.Optional(t.Enum({
                  PENDING: "PENDING",
                  REVIEWED: "REVIEWED",
                  INTERVIEWING: "INTERVIEWING",
                  ACCEPTED: "ACCEPTED",
                  REJECTED: "REJECTED",
                })),
              }),
              detail: {
                summary: "Update Application",
              },
            }
          )
          .delete(
            "/:id",
            async ({ params }) => {
              const { id } = params;
              const existingApplication = await prisma.jobApplication.findFirst({
                where: { id },
              });
              
              if (!existingApplication) {
                return { Message: `Application with id ${id} is not found` };
              }
  
              return await prisma.jobApplication.delete({
                where: { id },
              });
            },
            {
              detail: {
                summary: "Delete Application",
              },
            }
          )
    );