namespace AppData {
  interface Image {
    src: string;
    alt: string;
    width: string;
    height: string;
    loading: "eager" | "lazy" | undefined;
    decoding: "async" | "auto" | "sync" | undefined;
  }

  interface ImageWithPlaceholder extends Image {
    placeholderHash: string;
  }

  interface Source {
    srcSet: string;
    media: string;
    width: string;
    height: string;
  }
}
