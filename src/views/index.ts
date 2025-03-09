import React from "react";

/**
 * Error pages
 */
export const ErrorPage = React.lazy(() => import("./system/ErrorPage"));

/**
 * Auth pages
 */
export const SigninPage = React.lazy(() => import("./auth/SigninPage"));
export const RequestOtpPage = React.lazy(() => import("./auth/RequestOtpPage"));

/**
 * Nephrologist pages
 */
export const NephrologistDashboard = {
  OverviewPage: React.lazy(
    () => import("./dashboard/nephrologist/OverviewPage")
  ),
};
