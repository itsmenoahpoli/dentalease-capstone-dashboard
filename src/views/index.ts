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
 * Dashboard pages
 */
export const OverviewPage = React.lazy(() => import("./dashboard/nephrologist/OverviewPage"));
