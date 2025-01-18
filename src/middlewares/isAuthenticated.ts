import type { Elysia } from "elysia";
import { prisma } from "~libs/prisma";
import { jwtConfig } from "~config/jwt.config";
import { AuthenticationError } from "../exceptions/AuthenticationError";
import { logger } from "~libs/logger";

export const isAuthenticated = (app: Elysia) =>
  app
    .use(jwtConfig)
    .derive(async function handler({ jwt, request: { headers } }) {
        const authorization = headers.get("authorization");
        if (!authorization) {
          throw new AuthenticationError("Invalid Username or Password")
        }
        const token = authorization.split(" ")[1];
        if (!token) {
            throw new AuthenticationError("Invalid Username or Password")
        }
        const payload = await jwt.verify(token);
        if (!payload) {
            throw new AuthenticationError("Invalid Username or Password")
        }
        const { sub } = payload;
        const user = await prisma.user.findFirst({
          where: {
            id: Number(sub),
          },
        });

        if (!user) {
            logger.info("User Not found");
            throw new AuthenticationError("Invalid Username or Password")
        }

        return {
          user,
        };
    });
