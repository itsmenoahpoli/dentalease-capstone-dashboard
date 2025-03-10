import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthLayout, DashboardLayout } from "@/components";
import { ErrorPage, SigninPage, RequestOtpPage, OverviewPage } from "@/views";
import { WEB_ROUTES } from "@/constants";

const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: <Navigate to={WEB_ROUTES.AUTH.SIGNIN} />,
  },
  {
    path: WEB_ROUTES.AUTH_PREFIX,
    element: <AuthLayout />,
    children: [
      {
        path: WEB_ROUTES.AUTH.SIGNIN,
        element: <SigninPage />,
      },
      {
        path: WEB_ROUTES.AUTH.REQUEST_OTP,
        element: <RequestOtpPage />,
      },
    ],
  },
  {
    path: WEB_ROUTES.DASHBOARD_PREFIX,
    element: <DashboardLayout />,
    children: [
      {
        path: WEB_ROUTES.DASHBOARD.OVERVIEW,
        element: <OverviewPage />,
      },
    ],
  },
]);

export default router;
