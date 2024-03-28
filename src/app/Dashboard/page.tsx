import React from "react";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
// import Drawer from "../components/Drawer";
import PDFRenderer from "../components/PDFRenderer";
import ChatRoom from "../components/ChatRoom";

const Dashboard = () => {
  return (
    <div className="flex w-full max-h-screen overflow-hidden bg-white">
      <Sidebar />
      <div className="flex flex-col w-full min-h-full relative">
        <DashboardHeader />
        <div className="flex-grow grid grid-cols-1 grid-rows-1 lg:grid-cols-2 w-full relative">
          <PDFRenderer />
          <ChatRoom />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
