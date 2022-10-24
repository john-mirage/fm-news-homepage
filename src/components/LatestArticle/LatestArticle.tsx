import classes from "./LatestArticle.module.css";

interface Props {
  link: string;
  name: string;
  excerpt: string;
}

const LatestArticle = ({ link, name, excerpt }: Props) => {
  return (
    <li className={classes.container}>
      <article>
        <a className={classes.link} href={link}>
          <h3 className={classes.name}>{name}</h3>
        </a>
        <p className={classes.excerpt}>{excerpt}</p>
      </article>
    </li>
  );
};

export default LatestArticle;
