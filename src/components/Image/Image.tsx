import { forwardRef } from "react";

interface Image {
  src: string;
  alt: string;
  width: string;
  height: string;
  loading: "eager" | "lazy" | undefined;
  decoding: "async" | "auto" | "sync" | undefined;
}

interface Props {
  className?: string;
  image: Image;
}

const Image = forwardRef<HTMLImageElement, Props>(
  ({ className = "", image }, ref) => {
    return (
      <img
        ref={ref}
        className={className}
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading={image.loading}
        decoding={image.decoding}
        draggable="false"
      />
    );
  }
);

export default Image;
