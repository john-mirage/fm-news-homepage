import ImageWithPlaceholder from "@components/ImageWithPlaceholder";
import classes from "./PopularArticle.module.css";

interface Props {
  className?: string;
  image: AppData.ImageWithPlaceholder;
  link: string;
  name: string;
  excerpt: string;
}

const PopularArticle = ({ className, image, link, name, excerpt }: Props) => {
  return (
    <li className={className}>
      <article className={classes.row}>
        <ImageWithPlaceholder
          className={classes.image}
          placeholderHash={image.blurHash}
          image={image}
        />
        <div className={classes.text}>
          <a className={classes.link} href={link}>
            <h3 className={classes.name}>{name}</h3>
          </a>
          <p className={classes.excerpt}>{excerpt}</p>
        </div>
      </article>
    </li>
  );
};

export default PopularArticle;
