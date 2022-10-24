import { useCallback, useState } from "react";
import { Blurhash } from "react-blurhash";
import classes from "./ImageWithPlaceholder.module.css";
import { motion, useAnimation } from "framer-motion";
import { clsx } from "clsx";
import ImageComponent from "@components/Image";

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
  className?: string;
  placeholderHash: string;
  image: Image;
  sources?: Source[];
}

const MotionImage = motion(ImageComponent);

const ImageWithPlaceholder = ({
  className = "",
  placeholderHash,
  image,
  sources,
}: Props) => {
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
    <div className={clsx(className, classes.container)}>
      {!isLoaded && (
        <div className={classes.placeholder}>
          <Blurhash hash={placeholderHash} width="100%" height="100%" />
        </div>
      )}
      {sources ? (
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
          <MotionImage
            ref={imageRef}
            className={classes.picturImage}
            image={image}
            animate={controls}
            onAnimationComplete={() => {
              setIsLoaded(true);
            }}
          />
        </picture>
      ) : (
        <MotionImage
          ref={imageRef}
          className={classes.image}
          image={image}
          animate={controls}
          onAnimationComplete={() => {
            setIsLoaded(true);
          }}
        />
      )}
    </div>
  );
};

export default ImageWithPlaceholder;
