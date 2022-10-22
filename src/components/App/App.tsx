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
    <div className={classes.container}>
      <Header sidebarIsOpen={sidebarIsOpen} toggleSidebar={toggleSidebar} />
      <main className={classes.main}>
        <FeaturedArticle />
        <LatestArticleList />
        <PopularArticleList />
      </main>
      {sidebarIsOpen && <Sidebar />}
    </div>
  );
};

export default App;
