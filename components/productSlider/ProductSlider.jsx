import React from "react";
import ImageGallery from "react-image-gallery";

export default function ProductSlider({ images }) {
 
  const imgs = images?.map((img) => {
    const item = {
      original: img.image,
      thumbnail: img.image,
    };
    return item;
  });

  return (
    <ImageGallery
      items={imgs}
      thumbnailPosition="left"
      showNav={false}
      showFullscreenButton={false}
      showPlayButton={false}
    />
  );
}
