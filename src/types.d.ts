namespace AppData {
  interface Image {
    src: string;
    alt: string;
    width: string;
    height: string;
    loading: string;
    decoding: string;
  }

  interface ImageWithPlaceholder extends Image {
    blurHash: string;
  }

  interface Source {
    srcSet: string;
    media: string;
    width: string;
    height: string;
  }
}
