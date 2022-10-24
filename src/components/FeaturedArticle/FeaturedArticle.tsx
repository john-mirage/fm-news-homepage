import Image from "@components/Image";
import classes from "./FeaturedArticle.module.css";
import mobileArticleImage from "@images/image-web-3-mobile.jpg";
import desktopArticleImage from "@images/image-web-3-desktop.jpg";

const FeaturedArticle = () => {
  return (
    <article>
      <Image
        blurHash="LNHv=CKk}O-1WZK4wZnMyAV}oOE,"
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
    </article>
  );
};

export default FeaturedArticle;
