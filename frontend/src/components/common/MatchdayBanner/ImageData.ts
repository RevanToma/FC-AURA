import img1 from "../../../assets/images/img1.jpg";
import img2 from "../../../assets/images/img2.jpg";
import img3 from "../../../assets/images/img3.jpg";
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
    blurHash: "L9JIOi00?I}];,00?c9r?v?J0Jo#",
    id: 2,
    alt: "Second Image",
  },
  {
    img1: img2,
    blurHash: "LnIhgNof-;Rj~qfkt7ofW=ayRjt7",
    id: 3,
    alt: "Third Image",
  },
  {
    img1: img3,
    blurHash: "L2A,d@wI0NXSCTAE=|xD01rp}@x^",
    id: 4,
    alt: "Forth Image",
  },
  {
    img1: img4,
    blurHash: "L;GlI*ofofj[~qofofj[?bayayay",
    id: 5,
    alt: "Fifth Image",
  },
];
