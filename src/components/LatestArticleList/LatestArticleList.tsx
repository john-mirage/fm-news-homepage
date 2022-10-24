import LatestArticle from "@components/LatestArticle";
import classes from "./LatestArticleList.module.css";

const latestArticles = [
  {
    link: "#",
    name: "Hydrogen VS Electric Cars",
    excerpt: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    link: "#",
    name: "The Downsides of AI Artistry",
    excerpt:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    link: "#",
    name: "Is VC Funding Drying Up?",
    excerpt:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

const LatestArticleList = () => {
  return (
    <section className={classes.container}>
      <h2 className={classes.title}>New</h2>
      <ul className={classes.list}>
        {latestArticles.map((latestArticle) => (
          <LatestArticle
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
