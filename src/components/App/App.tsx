import FeaturedArticle from "@components/FeaturedArticle";
import Header from "@components/Header";
import LatestArticleList from "@components/LatestArticleList";
import Overlay from "@components/Overlay";
import PopularArticleList from "@components/PopularArticleList";
import Sidebar from "@components/Sidebar";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { throttle } from "lodash";
import { useEffect, useRef, useState } from "react";
import classes from "./App.module.css";

const App = () => {
  const [sidebarIsOpen, _setSidebarIsOpen] = useState<boolean>(false);
  const sidebarIsOpenRef = useRef<boolean>(false);

  const setSidebarIsOpen = (state: boolean) => {
    sidebarIsOpenRef.current = state;
    _setSidebarIsOpen(state);
  };

  const openSidebar = () => {
    if (!sidebarIsOpen) setSidebarIsOpen(true);
  };

  const closeSidebar = () => {
    if (sidebarIsOpen) setSidebarIsOpen(false);
  };

  useEffect(() => {
    const handleResize = throttle(() => {
      const isDesktop = window.matchMedia("(min-width: 768px)").matches;
      if (isDesktop && sidebarIsOpenRef.current) {
        setSidebarIsOpen(false);
      }
    }, 300);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className={classes.container}>
        <Header className={classes.header} openSidebar={openSidebar} />
        <main className={classes.main}>
          <FeaturedArticle className={classes.featuredArticle} />
          <LatestArticleList className={classes.latestArticles} />
          <PopularArticleList className={classes.popularArticles} />
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
    </MotionConfig>
  );
};

export default App;
