import React, { useState, useEffect } from "react";
import { ImageObject } from "./ImageData";
import { CarouselContainer } from "./ImageCarousel.Styles";

// ..

interface ImageChangerProps {
  images: ImageObject[];
  duration?: number;
}

const ImageChanger: React.FC<ImageChangerProps> = ({
  images,
  duration = 4000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFading(false);
      }, 1000); // Assuming 1 second is your fade time
    }, duration);

    return () => {
      clearInterval(interval);
    };
  }, [images, duration]);

  const nextIndex = (currentIndex + 1) % images.length;
  return (
    <CarouselContainer>
      <img
        data-aos="fade-in"
        src={images[currentIndex].img1}
        alt={images[currentIndex].alt}
      />
      <img
        data-aos="fade-in"
        src={images[nextIndex].img1}
        alt={images[nextIndex].alt}
      />
    </CarouselContainer>
  );
};

export default ImageChanger;
