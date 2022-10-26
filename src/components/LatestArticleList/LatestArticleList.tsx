import LatestArticle from "@components/LatestArticle";
import latestArticles from "@data/latest-articles.json";
import { clsx } from "clsx";
import classes from "./LatestArticleList.module.css";

interface Props {
  className?: string;
}

const LatestArticleList = ({ className }: Props) => {
  return (
    <section className={clsx(className, classes.container)}>
      <h2 className={classes.srTitle}>Latest articles</h2>
      <div className={classes.visualTitle} aria-hidden="true">
        New
      </div>
      <ul className={classes.list}>
        {latestArticles.map((latestArticle) => (
          <LatestArticle
            key={latestArticle.name}
            link={latestArticle.link}
            name={latestArticle.name}
            excerpt={latestArticle.excerpt}
          />
        ))}
      </ul>
    </section>
  );
};

export default LatestArticleList;
