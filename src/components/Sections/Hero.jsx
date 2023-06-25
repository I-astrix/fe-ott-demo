"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import Link from "next/link";

const Hero = ({ data }) => {
  return (
    <Splide
      aria-label="My Favorite Images"
      options={{
        type: "loop",
        padding: "28rem",
        autoplay: true,
        gap: "1rem",
        breakpoints: {
          768: {
            padding: "2rem",
          },
          1140: {
            padding: "12rem",
          },
        },
      }}
      className="pt-20"
    >
      {data?.map((item) => {
        return (
          <SplideSlide className="rounded-lg overflow-hidden aspect-video relative" key={item?.id}>
            <Link href={`/watch/movie/${item?.id}`}>
            <Image
              src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
              width={500}
              height={500}
              alt="hero-img"
              className="w-full h-full object-cover  aspect-video "
            />
            <div className="absolute h-40 bg-gradient-to-t from-black to-transparent  w-full bottom-0 p-4 py-8 flex gap-4 items-end  text-white">
              <div className="flex items-center  gap-4">
              <button className="h-10  w-10 bg-brand-primary rounded-full grid place-content-center">
              <Image
              src={'/play.svg'}
              width={25}
              height={25}
              alt="play"
              className="invert"
            />  
              </button>
              <div className="">
              <h1 className="text-xl lg:text-2xl">{item?.title}</h1>
              <small>⭐ IMDB {item?.vote_average} </small>
              </div>
              </div>
            </div>
            </Link>
          </SplideSlide>
        );
      })}
    </Splide>
  );
};

export default Hero;

{
  /* <SplideSlide className="rounded-lg overflow-hidden aspect-video ">
        <Image
          src={"/img-2.jpg"}
          width={300}
          height={300}
          alt="hero-img"
          className="w-full h-full object-cover aspect-video "
        />
      </SplideSlide> */
}
