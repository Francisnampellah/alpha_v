import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { auth } from "~routes/auth/auth";
import { jwtConfig } from "~config/jwt.config";
import { bearer } from "@elysiajs/bearer";
import { cors } from "@elysiajs/cors";
import { AuthenticationError } from "./exceptions/AuthenticationError";
import { AuthorizationError } from "./exceptions/AuthorizationError";
import { InvariantError } from "./exceptions/InvariantError";
import { isAuthenticated } from "~middlewares/isAuthenticated";
import { logger } from "~libs/logger";
import groupByError from "~utils/errorProcessor";
import { project } from "~routes/projects";
import { blog, event } from "~routes/blogs";
import { career } from "~routes/utils/careers";
import { jobApplication } from "~routes/utils/job-applications";
import { newsletter } from "~routes/utils/subscriptions";
import { testimonial } from "~routes/utils/testmonial";
import { contactMessage } from "~routes/utils/contact-us";
import { teamMember } from "~routes/utils/team";

const app = new Elysia().use(
  swagger({
    path: "/api-documentation",
    documentation: {
      info: {
        title: "Smartinno website API Documentation",
        version: "1.0",
        termsOfService: "Copyright of smartinno  @2024",
        contact: {
          name: "Widambe Deograss",
          email: "widambedeograss5@gmail.com",
        },
      },
      components: {
        securitySchemes: {
          BearerAuth: {
            type: "http",
            scheme: "bearer",
          },
        },
      },
      security: [
        {
          BearerAuth: [],
        },
      ],
      tags: [
        { name: "Authentication", description: "Authentication endpoints" },

      ],
    },
  })
);

app
  .use(cors())
  .error("AUTHENTICATION_ERROR", AuthenticationError)
  .error("AUTHORIZATION_ERROR", AuthorizationError)
  .error("INVARIANT_ERROR", InvariantError)
  .onError(({ code, error, set }) => {
    switch (code) {
      case "VALIDATION":
        set.status = 422;
        const errorValue = JSON.parse(error.message);
        const { errors } = errorValue;
        return {
          error: "VALIDATION_ERROR",
          errorDescription: errors,
        };
      case "AUTHENTICATION_ERROR":
        set.status = 401;
        return {
          error: "INVALID_LOGIN_ATTEMPT",
          errorDescription: error.toString().replace("Error: ", ""),
        };
      case "AUTHORIZATION_ERROR":
        set.status = 403;
        return {
          error: "VALID_AUTHORIZATION_REQUIRED",
          errorDescription: error.toString().replace("Error: ", ""),
        };
      case "INVARIANT_ERROR":
        set.status = 400;
        return {
          error: "INVARIANT_ERROR",
          errorDescription: error.toString().replace("Error: ", ""),
        };
      case "NOT_FOUND":
        set.status = 404;
        return {
          error: "END_POINT_NOT_FOUND",
          errorDescription: error.toString().replace("Error: ", ""),
        };
      case "INTERNAL_SERVER_ERROR":
        console.log(error);
        
        set.status = 500;
        return {
          error: "error",
          errorDescription: "Something went wrong!",
        };
      default:
        console.log(error);
        set.status = 500;
        return {
          error: "error",
          errorDescription: "Something went wrong!",
        };
    }
  })
  .group("/api/v1", (app) => app.use(auth))
  .group("/api/v1", (app) =>
    app.use(project)
  .use(event)
  .use(blog)
  .use(career)
  .use(jobApplication)
  .use(newsletter)
  .use(testimonial)
  .use(contactMessage)
  .use(teamMember)
  )
  .listen(Bun.env.SERVER_PORT!);
console.log(
  `smartinno is running at ${app.server?.hostname}:${app.server?.port}`
);
logger.info(
  `smartinno is running at ${app.server?.hostname}:${app.server?.port}`
);
