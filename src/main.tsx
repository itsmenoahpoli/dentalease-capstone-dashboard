import { createRoot } from "react-dom/client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import { THEME } from "@/theme";
import router from "@/routers";
import "@/styles/global.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools />

    <ConfigProvider theme={THEME}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </QueryClientProvider>
);
