"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import ToDos from "./ToDos/Page";
import { APIContextProvider } from "./apiContext";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <APIContextProvider>
      <QueryClientProvider client={queryClient}>
        <ToDos />
        <ToastContainer />
      </QueryClientProvider>
    </APIContextProvider>
  );
}
