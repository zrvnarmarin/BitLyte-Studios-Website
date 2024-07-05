"use client"

import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./NavigationFullScreen";

export default function NavigationWrapper() {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);

  const openSidebar = () => setIsSideBarOpen(true);

  return (
    <div>
      <Sidebar isSideBarOpen={isSideBarOpen} onOpenSidebar={openSidebar} />
      <Navbar isSideBarOpen={isSideBarOpen} onOpenSidebar={openSidebar} />
    </div>
  )
}