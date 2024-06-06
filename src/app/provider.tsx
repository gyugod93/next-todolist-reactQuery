"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const QueryProvider = ({ children }: React.PropsWithChildren) => {
  const queryclient = new QueryClient();
  return (
    <QueryClientProvider client={queryclient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
