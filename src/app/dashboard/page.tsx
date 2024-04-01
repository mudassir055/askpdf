import React from "react";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import PDFRenderer from "../components/PDFRenderer";
import dynamic from "next/dynamic";

const ChatRoom = dynamic(() => import("../components/ChatRoom"), {
  ssr: false,
});

const Dashboard = () => {
  return (
    // Main container for the dashboard layout
    <section className="flex w-full h-svh">
      {/* Sidebar component */}
      <Sidebar />
      {/* Container for the main content */}
      <main className="flex flex-col justify-between items-stretch w-full h-full relative">
        {/* Dashboard header component */}
        <DashboardHeader />
        {/* Main content area, divided into two columns */}
        <div className="h-[84%] flex w-full relative ">
          {/* Component for rendering PDF content */}
          <PDFRenderer />
          {/* Component for chat room */}
          <ChatRoom />
        </div>
      </main>
    </section>
  );
};

export default Dashboard;
