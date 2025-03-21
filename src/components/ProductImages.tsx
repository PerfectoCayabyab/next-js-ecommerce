"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/18166547/pexels-photo-18166547/free-photo-of-back-view-of-woman-in-black-dress-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/31120801/pexels-photo-31120801/free-photo-of-scenic-beach-landscape-with-rocky-island.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/2304204/pexels-photo-2304204.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/30358745/pexels-photo-30358745/free-photo-of-serene-boat-on-lake-ohrid-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
  },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {images.map((img,i) => (
            <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={img.id} onClick={() => setIndex(i)}>
                <Image src={img.url} alt="" fill sizes="30vw" className="object-cover rounded-md" />
            </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
