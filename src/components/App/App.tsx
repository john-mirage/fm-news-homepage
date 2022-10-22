import FeaturedArticle from "@components/FeaturedArticle";
import Header from "@components/Header";
import LatestArticleList from "@components/LatestArticleList";
import PopularArticleList from "@components/PopularArticleList";
import Sidebar from "@components/Sidebar";
import { useState } from "react";
import classes from "./App.module.css";

const App = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };

  return (
    <>
      <Header sidebarIsOpen={sidebarIsOpen} toggleSidebar={toggleSidebar} />
      <main className={classes.main}>
        <FeaturedArticle />
        <LatestArticleList />
        <PopularArticleList />
      </main>
      {sidebarIsOpen && <Sidebar />}
    </>
  );
};

export default App;
