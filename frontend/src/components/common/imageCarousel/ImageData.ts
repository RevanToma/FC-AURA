import img1 from "../../../assets/images/img1.jpg";
import img2 from "../../../assets/images/img2.jpg";
import img3 from "../../../assets/images/img3.jpg";
import img4 from "../../../assets/images/img4.jpg";
import MainImg from "../../../assets/images/TeamImage.jpg";
export type ImageObject = {
  img1: string;
  id: number;
  alt: string;
};
export const CarouselImageData: ImageObject[] = [
  {
    img1: MainImg,
    id: 1,
    alt: "Main Image",
  },
  {
    img1: img1,
    id: 2,
    alt: "Second Image",
  },
  {
    img1: img2,
    id: 3,
    alt: "Third Image",
  },
  {
    img1: img3,
    id: 4,
    alt: "Forth Image",
  },
  {
    img1: img4,
    id: 5,
    alt: "Fifth Image",
  },
];
