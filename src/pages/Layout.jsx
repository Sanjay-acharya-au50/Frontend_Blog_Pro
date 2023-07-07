import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="max-w-[1000px] h-screen bg-slate-400 mx-auto">
      <header className="w-full h-[5rem] mx-auto">
        <Navbar />
      </header>
      <section className="min-h-[88vh] h-auto py-9 grid place-items-center">
        <Outlet />
      </section>
    </main>
  );
};

export default Layout;
