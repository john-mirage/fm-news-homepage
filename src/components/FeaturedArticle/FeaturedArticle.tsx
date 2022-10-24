import ImageWithPlaceholder from "@components/ImageWithPlaceholder";
import classes from "./FeaturedArticle.module.css";
import mobileArticleImage from "@images/image-web-3-mobile.jpg";
import desktopArticleImage from "@images/image-web-3-desktop.jpg";
import { useMemo } from "react";

interface Props {
  className?: string;
}

const DESKTOP_MQ = "(min-width: 1206px)";

const FeaturedArticle = ({ className }: Props) => {
  const blurHash = useMemo(() => {
    const isDesktop = window.matchMedia(DESKTOP_MQ).matches;
    return isDesktop
      ? "LRH,SsGZ}h|mpbRpv}5=?DxZoyw~"
      : "LNHv=CKk}O-1WZK4wZnMyAV}oOE,";
  }, []);

  return (
    <section className={className}>
      <h2 className={classes.title}>Featured article</h2>
      <article className={classes.article}>
        <ImageWithPlaceholder
          className={classes.image}
          placeholderHash={blurHash}
          image={{
            src: mobileArticleImage,
            alt: "Web 3.0 illustration",
            width: "686",
            height: "600",
            loading: "eager",
            decoding: "async",
          }}
          sources={[
            {
              srcSet: desktopArticleImage,
              media: DESKTOP_MQ,
              width: "1460",
              height: "600",
            },
          ]}
        />
        <h3 className={classes.name}>The Bright Future of Web 3.0?</h3>
        <p className={classes.excerpt}>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className={classes.button}>read more</button>
      </article>
    </section>
  );
};

export default FeaturedArticle;
