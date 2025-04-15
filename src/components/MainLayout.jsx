import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen px-4 py-6">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
