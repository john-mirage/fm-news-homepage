import { useCallback, useState } from "react";
import { Blurhash } from "react-blurhash";
import classes from "./Image.module.css";
import { motion, useAnimation } from "framer-motion";

interface Image {
  src: string;
  alt: string;
  width: string;
  height: string;
  loading: "eager" | "lazy" | undefined;
  decoding: "async" | "auto" | "sync" | undefined;
}

interface Source {
  srcSet: string;
  media: string;
  width: string;
  height: string;
}

interface Props {
  blurHash: string;
  image: Image;
  sources: Source[];
}

const Image = ({ blurHash, image, sources }: Props) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const controls = useAnimation();

  const handleLoadedImage = () => {
    setTimeout(() => {
      controls.start({
        opacity: 1,
        transition: { duration: 0.8 },
      });
    }, 0);
  };

  const imageRef = useCallback((element: HTMLImageElement) => {
    if (element !== null) {
      element.addEventListener("load", handleLoadedImage, { once: true });
    }
  }, []);

  return (
    <div className={classes.container}>
      {!isLoaded && (
        <div className={classes.placeholder}>
          <Blurhash hash={blurHash} width="100%" height="100%" />
        </div>
      )}
      <picture className={classes.picture}>
        {sources.map((source) => (
          <source
            key={source.srcSet}
            srcSet={source.srcSet}
            media={source.media}
            width={source.width}
            height={source.height}
          />
        ))}
        <motion.img
          ref={imageRef}
          className={classes.image}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading={image.loading}
          decoding={image.decoding}
          draggable="false"
          animate={controls}
          onAnimationComplete={() => {
            setIsLoaded(true);
          }}
        />
      </picture>
    </div>
  );
};

export default Image;
