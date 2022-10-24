import Picture from "@components/Picture";
import classes from "./FeaturedArticle.module.css";
import mobileArticleImage from "@images/image-web-3-mobile.jpg";
import desktopArticleImage from "@images/image-web-3-desktop.jpg";
import { useMemo } from "react";

const FeaturedArticle = () => {
  const blurHash = useMemo(() => {
    const isDesktop = window.matchMedia("(min-width: 992px)").matches;
    return isDesktop
      ? "LRH,SsGZ}h|mpbRpv}5=?DxZoyw~"
      : "LNHv=CKk}O-1WZK4wZnMyAV}oOE,";
  }, []);

  return (
    <article className={classes.container}>
      <Picture
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
            media: "(min-width: 992px)",
            width: "1460",
            height: "600",
          },
        ]}
      />
      <h2 className={classes.title}>The Bright Future of Web 3.0?</h2>
      <p className={classes.excerpt}>
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </p>
      <button className={classes.button}>read more</button>
    </article>
  );
};

export default FeaturedArticle;
