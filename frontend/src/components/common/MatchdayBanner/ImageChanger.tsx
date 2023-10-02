import React, { useState, useEffect } from "react";
import { ImageObject } from "./ImageData";
import { CarouselContainer } from "./MatchdayBannerStyles";
import { Blurhash } from "react-blurhash";

interface ImageChangerProps {
  images: ImageObject[];
  duration?: number;
}

const ImageChanger: React.FC<ImageChangerProps> = ({
  images,
  duration = 4000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<number[]>([]);

  useEffect(() => {
    // Load images
    images.forEach((image, index) => {
      const img = new Image();
      img.src = image.img1;
      img.onload = () => {
        setLoadedImages((prev) => [...prev, index]);
      };
    });

    // Set interval for carousel effect
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, duration);

    return () => {
      clearInterval(interval);
    };
  }, [images, duration]);

  return (
    <CarouselContainer>
      {images.map((image, index) => (
        <React.Fragment key={image.id}>
          {loadedImages.includes(index) ? (
            <img
              src={image.img1}
              alt={image.alt}
              className={index === currentIndex ? "fade-in" : ""}
            />
          ) : (
            <Blurhash hash={image.blurHash} width="100%" height="100%" />
          )}
        </React.Fragment>
      ))}
    </CarouselContainer>
  );
};

export default ImageChanger;
