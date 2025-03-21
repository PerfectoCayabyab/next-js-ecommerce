import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/18166547/pexels-photo-18166547/free-photo-of-back-view-of-woman-in-black-dress-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            fill
            alt=""
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-all easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/30358745/pexels-photo-30358745/free-photo-of-serene-boat-on-lake-ohrid-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            fill
            alt=""
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to cart</button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/18166547/pexels-photo-18166547/free-photo-of-back-view-of-woman-in-black-dress-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            fill
            alt=""
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-all easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/30358745/pexels-photo-30358745/free-photo-of-serene-boat-on-lake-ohrid-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            fill
            alt=""
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to cart</button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/18166547/pexels-photo-18166547/free-photo-of-back-view-of-woman-in-black-dress-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            fill
            alt=""
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-all easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/30358745/pexels-photo-30358745/free-photo-of-serene-boat-on-lake-ohrid-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            fill
            alt=""
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to cart</button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/18166547/pexels-photo-18166547/free-photo-of-back-view-of-woman-in-black-dress-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            fill
            alt=""
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-all easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/30358745/pexels-photo-30358745/free-photo-of-serene-boat-on-lake-ohrid-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            fill
            alt=""
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to cart</button>
      </Link>
    </div>
  );
};

export default ProductList;
