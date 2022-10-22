import FeaturedArticle from "@components/FeaturedArticle";
import Header from "@components/Header";
import LatestArticleList from "@components/LatestArticleList";
import Overlay from "@components/Overlay";
import PopularArticleList from "@components/PopularArticleList";
import Sidebar from "@components/Sidebar";
import { useState } from "react";
import classes from "./App.module.css";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false);

  const openSidebar = () => {
    if (!sidebarIsOpen) setSidebarIsOpen(true);
  };

  const closeSidebar = () => {
    if (sidebarIsOpen) setSidebarIsOpen(false);
  };

  return (
    <div className={classes.container}>
      <Header openSidebar={openSidebar} />
      <main className={classes.main}>
        <FeaturedArticle />
        <LatestArticleList />
        <PopularArticleList />
      </main>
      <AnimatePresence>
        {sidebarIsOpen && (
          <>
            <Overlay closeSidebar={closeSidebar} />
            <Sidebar closeSidebar={closeSidebar} />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
