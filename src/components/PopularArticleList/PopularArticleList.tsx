import classes from "./PopularArticleList.module.css";
import retroPcsImage from "@images/image-retro-pcs.jpg";
import topLaptopsImage from "@images/image-top-laptops.jpg";
import gamingGrowthImage from "@images/image-gaming-growth.jpg";
import PopularArticle from "@components/PopularArticle";

interface PopularArticle {
  image: AppData.ImageWithPlaceholder;
  link: string;
  name: string;
  excerpt: string;
}

const popularArticles: PopularArticle[] = [
  {
    image: {
      placeholderHash: "LFB:wN1GkB^-H;n2$kInD4=fM_NF",
      src: retroPcsImage,
      alt: "old computer illustration",
      width: "200",
      height: "254",
      loading: "lazy",
      decoding: "async",
    },
    link: "#",
    name: "Reviving Retro PCs",
    excerpt: "What happens when old PCs are given modern upgrades?",
  },
  {
    image: {
      placeholderHash: "L19ZsIpK^R4-00Na0xGu0]=e^-zp",
      src: topLaptopsImage,
      alt: "laptop keyboard keys illustration",
      width: "200",
      height: "254",
      loading: "lazy",
      decoding: "async",
    },
    link: "#",
    name: "Top 10 Laptops of 2022",
    excerpt: "Our best picks for various needs and budgets.",
  },
  {
    image: {
      placeholderHash: "L3I#u]0000~W6L-;;vtSHXIo00w]",
      src: gamingGrowthImage,
      alt: "gamepad illustration",
      width: "200",
      height: "254",
      loading: "lazy",
      decoding: "async",
    },
    link: "#",
    name: "The Growth of Gaming",
    excerpt: "How the pandemic has sparked fresh opportunities.",
  },
];

const PopularArticleList = () => {
  return (
    <section className={classes.container}>
      <h2 className={classes.title}>Popular articles</h2>
      <ul className={classes.list}>
        {popularArticles.map((popularArticle) => (
          <PopularArticle
            key={popularArticle.name}
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
