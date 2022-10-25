import Button from "@components/Button";
import ImageWithPlaceholder from "@components/ImageWithPlaceholder";
import featuredArticle from "@data/featured-article.json";
import { useMemo } from "react";
import classes from "./FeaturedArticle.module.css";

interface Props {
  className?: string;
}

const DESKTOP_MQ = "(min-width: 1206px)";

const FeaturedArticle = ({ className }: Props) => {
  const blurHash = useMemo(() => {
    const isDesktop = window.matchMedia(DESKTOP_MQ).matches;
    return isDesktop
      ? featuredArticle.image.desktop.blurHash
      : featuredArticle.image.mobile.blurHash;
  }, []);

  return (
    <section className={className}>
      <h2 className={classes.title}>Featured article</h2>
      <article className={classes.article}>
        <ImageWithPlaceholder
          className={classes.image}
          placeholderHash={blurHash}
          image={{
            src: featuredArticle.image.mobile.src,
            alt: featuredArticle.image.alt,
            width: featuredArticle.image.mobile.width,
            height: featuredArticle.image.mobile.height,
            loading: featuredArticle.image.loading,
            decoding: featuredArticle.image.decoding,
          }}
          sources={[
            {
              srcSet: featuredArticle.image.desktop.src,
              media: DESKTOP_MQ,
              width: featuredArticle.image.desktop.width,
              height: featuredArticle.image.desktop.height,
            },
          ]}
        />
        <h3 className={classes.name}>{featuredArticle.name}</h3>
        <p className={classes.excerpt}>{featuredArticle.excerpt}</p>
        <Button className={classes.button} type="button">
          read more
        </Button>
      </article>
    </section>
  );
};

export default FeaturedArticle;
