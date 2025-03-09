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
    NEPHROLOGIST_OVERVIEW: DASHBOARD_PREFIX + "/nephrologist/overview",
  },
} as const;

export { WEB_ROUTES };
