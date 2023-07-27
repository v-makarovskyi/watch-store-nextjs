import React from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "/images/watch/tissot1.webp",
    thumbnail: "/images/watch/tissot1.webp",
  },
  {
    original: "/images/watch/tissot2.webp",
    thumbnail: "/images/watch/tissot2.webp",
  },
  {
    original: "/images/watch/tissot3.webp",
    thumbnail: "/images/watch/tissot3.webp",
  },
  {
    original: "/images/watch/tissot4.webp",
    thumbnail: "/images/watch/tissot4.webp",
  },
];

export default function ProductSlider() {
  return (
    <ImageGallery
      items={images}
      thumbnailPosition="left"
      showNav={false}
      showFullscreenButton={false}
      showPlayButton={false}
    />
  );
}
