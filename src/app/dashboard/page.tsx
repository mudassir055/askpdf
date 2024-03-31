import React from "react";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import PDFRenderer from "../components/PDFRenderer";
import ChatRoom from "../components/ChatRoom";

const Dashboard = () => {
  return (
    // Main container for the dashboard layout
    <div className="flex w-full h-dvh">
      {/* Sidebar component */}
      <Sidebar />
      {/* Container for the main content */}
      <div className="flex flex-col w-full h-full relative">
        {/* Dashboard header component */}
        <DashboardHeader />
        {/* Main content area, divided into two columns */}
        <div className="h-[86%] grid grid-cols-1 grid-rows-1 lg:grid-cols-2 w-full relative">
          {/* Component for rendering PDF content */}
          <PDFRenderer />
          {/* Component for chat room */}
          <ChatRoom />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
