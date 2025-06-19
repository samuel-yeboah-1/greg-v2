"use client";
import React, { ReactNode } from "react";
interface TanstackQueryProviderProps {
  children: ReactNode;
}
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const client = new QueryClient();

function TanstackQueryProvider({ children }: TanstackQueryProviderProps) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

export default TanstackQueryProvider;
