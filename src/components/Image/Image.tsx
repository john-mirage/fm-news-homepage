import { forwardRef } from "react";

interface Props {
  className?: string;
  image: AppData.Image;
}

const Image = forwardRef<HTMLImageElement, Props>(
  ({ className, image }, ref) => {
    return (
      <img
        ref={ref}
        className={className}
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading={image.loading as "eager" | "lazy"}
        decoding={image.decoding as "async" | "auto" | "sync"}
        draggable="false"
      />
    );
  }
);

export default Image;
