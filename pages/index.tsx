import * as React from "react";
import type { NextPage } from "next";
import Nav from "../components/nav";
import { QueryClient, QueryClientProvider } from "react-query";

const Home: NextPage = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Nav></Nav>
      <div>Home page</div>
    </QueryClientProvider>
  );
};

export default Home;
