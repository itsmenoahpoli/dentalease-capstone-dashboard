const AUTH_PREFIX = "/auth";
const DASHBOARD_PREFIX = "/dashboard";

const WEB_ROUTES = {
  AUTH_PREFIX,
  DASHBOARD_PREFIX,
  AUTH: {
    SIGNIN: AUTH_PREFIX + "/sign-in",
    REQUEST_OTP: AUTH_PREFIX + "/request-otp",
  },
  DASHBOARD: {
    OVERVIEW: DASHBOARD_PREFIX + "/",
    OFFERED_SERVICES: DASHBOARD_PREFIX + "/offered-services",
  },
} as const;

export { WEB_ROUTES };
