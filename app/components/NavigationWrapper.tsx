"use client"

import { useState } from "react";
import Navbar from "./Navbar";
import NavigationMenuFullScreen from "./NavigationFullScreen";

export default function NavigationWrapper() {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);

  const toggleNavigationMenu = () => setIsSideBarOpen(prev => !prev);

  return (
    <div>
      <NavigationMenuFullScreen isSideBarOpen={isSideBarOpen} toggleNavigation={toggleNavigationMenu} />
      <Navbar isSideBarOpen={isSideBarOpen} onOpenSidebar={toggleNavigationMenu} />
    </div>
  )
}