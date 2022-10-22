import FeaturedArticle from "@components/FeaturedArticle";
import Header from "@components/Header";
import LatestArticleList from "@components/LatestArticleList";
import PopularArticleList from "@components/PopularArticleList";
import classes from "./App.module.css";

const App = () => {
  return (
    <>
      <Header />
      <main className={classes.main}>
        <FeaturedArticle />
        <LatestArticleList />
        <PopularArticleList />
      </main>
    </>
  );
};

export default App;
