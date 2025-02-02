import Elysia, { t } from "elysia";
import { sendEmail } from "~libs/email-service";
import { prisma } from "~libs/prisma";

// Newsletter Subscription Service
export const newsletter = (app: Elysia) =>
    app.group(
      "/newsletter",
      {
        detail: {
          tags: ["Newsletter"],
        },
      },
      (app) =>
        app
          .post(
            "/subscribe",
            async ({ body }) => {
              const { email } = body;
              
              const existingSubscription = await prisma.newsletterSubscription.findUnique({
                where: { email },
              });
              
              if (existingSubscription) {
                return { Message: "Email already subscribed" };
              }

              sendEmail(email, "Welcome to Smartinno Newsletter", "You have successfully subscribed to Smartinno newsletter, you will be receiving updates on our latest projects, events, and blog posts.");
  
              return await prisma.newsletterSubscription.create({
                data: { email },
              });
            },
            {
              body: t.Object({
                email: t.String(),
              }),
              detail: {
                summary: "Subscribe to Newsletter",
              },
            }
          )
          .post(
            "/unsubscribe",
            async ({ body }) => {
              const { email } = body;
              
              const subscription = await prisma.newsletterSubscription.findUnique({
                where: { email },
              });
              
              if (!subscription) {
                return { Message: "Email not found in subscription list" };
              }
  
              return await prisma.newsletterSubscription.update({
                where: { email },
                data: { isActive: false },
              });
            },
            {
              body: t.Object({
                email: t.String(),
              }),
              detail: {
                summary: "Unsubscribe from Newsletter",
              },
            }
          )
    );