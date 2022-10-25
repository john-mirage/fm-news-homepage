import PopularArticle from "@components/PopularArticle";
import popularArticles from "@data/popular-articles.json";
import { clsx } from "clsx";
import classes from "./PopularArticleList.module.css";

interface PopularArticle {
  image: AppData.ImageWithPlaceholder;
  link: string;
  name: string;
  excerpt: string;
}

interface Props {
  className?: string;
}

const PopularArticleList = ({ className }: Props) => {
  return (
    <section className={clsx(className, classes.container)}>
      <h2 className={classes.title}>Popular articles</h2>
      <ul className={classes.list}>
        {popularArticles.map((popularArticle) => (
          <PopularArticle
            key={popularArticle.name}
            className={classes.listItem}
            image={popularArticle.image}
            link={popularArticle.link}
            name={popularArticle.name}
            excerpt={popularArticle.excerpt}
          />
        ))}
      </ul>
    </section>
  );
};

export default PopularArticleList;
