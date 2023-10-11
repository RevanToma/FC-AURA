import img1 from "../../../assets/images/dani.png";
import img2 from "../../../assets/images/coach.png";
import img3 from "../../../assets/images/training.png";
import img4 from "../../../assets/images/img4.jpg";
import MainImg from "../../../assets/images/TeamImage.jpg";
export type ImageObject = {
  img1: string;
  id: number;
  alt: string;
  blurHash: string;
};

export const CarouselImageData: ImageObject[] = [
  {
    img1: MainImg,
    blurHash: "L04LUYWBj[Rj~qayRjRj~qt7WBWB",
    id: 1,
    alt: "Main Image",
  },
  {
    img1: img1,
    blurHash: "L15OQn_3?bRjxuIUxuRj_3%MofM{",
    id: 2,
    alt: "Second Image",
  },
  {
    img1: img2,
    blurHash: "L04B,y~q?bRj~qofofIUj[j[M{D%",
    id: 3,
    alt: "Third Image",
  },
  {
    img1: img3,
    blurHash: "L03[xTIUj[Rj~qRjD%t7%MM{t7WB",
    id: 4,
    alt: "Forth Image",
  },
];
