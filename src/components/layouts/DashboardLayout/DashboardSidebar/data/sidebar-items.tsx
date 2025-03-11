import {
  Home,
  ListCheck,
  CalendarCheck,
  Users2,
  FileAxis3D,
  FileBadge,
  Truck,
  Settings,
} from "lucide-react";
import { WEB_ROUTES } from "@/constants";
import { type SidebarGroup } from "@/types/layout";

const ICON_SIZE = 22;

export const SIDEBAR_ITEMS: SidebarGroup[] = [
  {
    group: "Manage",
    children: [
      {
        icon: <Home color="white" size={ICON_SIZE} />,
        label: "Dashboard Overview",
        url: WEB_ROUTES.DASHBOARD.OVERVIEW,
      },
      {
        icon: <ListCheck color="white" size={ICON_SIZE} />,
        label: "Offered Services",
        url: WEB_ROUTES.DASHBOARD.OFFERED_SERVICES,
      },
      {
        icon: <Users2 color="white" size={ICON_SIZE} />,
        label: "Patient Profiles",
        url: WEB_ROUTES.DASHBOARD.PATIENT_PROFILES,
      },
      {
        icon: <CalendarCheck color="white" size={ICON_SIZE} />,
        label: "Appointments",
        url: WEB_ROUTES.DASHBOARD.APPOINTMENTS,
      },
      {
        icon: <FileAxis3D color="white" size={ICON_SIZE} />,
        label: "Prescriptions (Digital)",
        url: "",
      },
      {
        icon: <FileBadge color="white" size={ICON_SIZE} />,
        label: "Billings & Payments",
      },
      {
        icon: <Truck color="white" size={ICON_SIZE} />,
        label: "Inventory",
        url: "",
      },
      {
        icon: <Settings color="white" size={ICON_SIZE} />,
        label: "Content Management",
        url: "",
      },
    ],
  },
] as const;
