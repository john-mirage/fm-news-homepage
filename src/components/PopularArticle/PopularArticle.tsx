import ImageWithPlaceholder from "@components/ImageWithPlaceholder";
import classes from "./PopularArticle.module.css";

interface Props {
  image: AppData.ImageWithPlaceholder;
  link: string;
  name: string;
  excerpt: string;
}

const PopularArticle = ({ image, link, name, excerpt }: Props) => {
  return (
    <li className={classes.container}>
      <article className={classes.row}>
        <ImageWithPlaceholder
          className={classes.image}
          placeholderHash={image.placeholderHash}
          image={image}
        />
        <div className={classes.text}>
          <a href={link}>
            <h3 className={classes.name}>{name}</h3>
          </a>
          <p className={classes.excerpt}>{excerpt}</p>
        </div>
      </article>
    </li>
  );
};

export default PopularArticle;
