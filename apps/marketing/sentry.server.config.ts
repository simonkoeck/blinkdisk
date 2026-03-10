import * as Sentry from "@sentry/astro";
import { SENTRY_MARKETING_DSN } from "astro:env/client";

Sentry.init({
  dsn: SENTRY_MARKETING_DSN,
  sendDefaultPii: false,
  enabled: !import.meta.env.DEV,
});
