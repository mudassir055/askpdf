import React from "react";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import Drawer from "../components/Drawer";
import PDFRenderer from "../components/PDFRenderer";
import ChatRoom from "../components/ChatRoom";

const Dashboard = () => {
  return (
    <div className="flex w-full h-screen bg-white">
      <Sidebar />
      <div className="w-full min-h-full relative">
        <Drawer />
        <DashboardHeader />
        <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2">
          <PDFRenderer />
          <ChatRoom />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
