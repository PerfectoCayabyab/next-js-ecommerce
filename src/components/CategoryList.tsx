import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryList = () => {
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/18166547/pexels-photo-18166547/free-photo-of-back-view-of-woman-in-black-dress-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
              alt=""
              fill
              sizes="200vw"
              className="object-cover" 
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Category Name</h1>
        </Link>
        <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/18166547/pexels-photo-18166547/free-photo-of-back-view-of-woman-in-black-dress-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
              alt=""
              fill
              sizes="200vw"
              className="object-cover" 
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Category Name</h1>
        </Link>
        <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/18166547/pexels-photo-18166547/free-photo-of-back-view-of-woman-in-black-dress-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
              alt=""
              fill
              sizes="200vw"
              className="object-cover" 
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Category Name</h1>
        </Link>
        <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/18166547/pexels-photo-18166547/free-photo-of-back-view-of-woman-in-black-dress-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
              alt=""
              fill
              sizes="200vw"
              className="object-cover" 
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Category Name</h1>
        </Link>
        <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/18166547/pexels-photo-18166547/free-photo-of-back-view-of-woman-in-black-dress-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
              alt=""
              fill
              sizes="200vw"
              className="object-cover" 
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Category Name</h1>
        </Link>
        <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/18166547/pexels-photo-18166547/free-photo-of-back-view-of-woman-in-black-dress-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
              alt=""
              fill
              sizes="200vw"
              className="object-cover" 
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Category Name</h1>
        </Link>
        <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/18166547/pexels-photo-18166547/free-photo-of-back-view-of-woman-in-black-dress-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
              alt=""
              fill
              sizes="200vw"
              className="object-cover" 
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Category Name</h1>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
