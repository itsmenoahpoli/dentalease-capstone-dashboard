import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthLayout, DashboardLayout } from "@/components";
import {
  ErrorPage,
  SigninPage,
  RequestOtpPage,
  OverviewPage,
  OfferedServicesListPage,
  PatientProfilesListPage,
  AppointmentsListPage,
} from "@/views";
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
      {
        path: WEB_ROUTES.DASHBOARD.OFFERED_SERVICES,
        element: <OfferedServicesListPage />,
      },
      {
        path: WEB_ROUTES.DASHBOARD.PATIENT_PROFILES,
        element: <PatientProfilesListPage />,
      },
      {
        path: WEB_ROUTES.DASHBOARD.APPOINTMENTS,
        element: <AppointmentsListPage />,
      },
    ],
  },
]);

export default router;
