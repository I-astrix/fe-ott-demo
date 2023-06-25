"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import Link from "next/link";

const CategoriesSlides = ({ title, slides, showViewAll=true }) => {
  return (
    <section className="text-white px-2 lg:px-8 py-4 mt-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold capitalize">{title}</h1>
        {showViewAll ? (
          <a className="block cursor-pointer text-sm  px-4 py-1 rounded underline hover:text-brand-primary">
            View all &#8594;
          </a>
        ) : null}
      </div>
      <Splide
        aria-label={title}
        options={{
          perPage: 7,
          drag: "free",
          snap: true,
          pagination: false,
          gap: "1rem",
          breakpoints: {
            640: {
              perPage: 3,
            },
            900: {
              perPage: 4
            },
            1140: {
              perPage: 5
            }
          },
        }}
        className=" my-4"
      >
        {slides?.map((slide) => {
          return (
            <SplideSlide
              className="rounded-lg  relative group overflow-hidden "
              key={slide?.id}
            >
              <Link href={`/watch/movie/${slide?.id}`}>
                <div className="flex gap-2 flex-col justify-end p-4 absolute h-full w-full bg-brand-darker bg-opacity-90 backdrop-blur-sm   z-10 top-0 -left-full group-hover:left-0  transition-300 ">
                  <small className="">⭐ IMDB {slide?.vote_average} </small>
                  <p className="text-sm">{slide?.title}</p>
                  <div className="flex gap-2 bg-white justify-center text-black mt-2 rounded px-2 py-1 cursor-pointer">
                    <button className="h-5 w-5 bg-brand-primary rounded-full grid place-content-center">
                      <Image
                        src={"/play.svg"}
                        width={15}
                        height={15}
                        alt="play"
                        className="invert"
                      />
                    </button>
                    <small>Watch</small>
                  </div>
                </div>

                <div className="absolute h-full w-full grid place-content-center text-center bg-gray-800 ">
                  <small>{slide.title}</small>
                </div>

                <Image
                  src={`https://image.tmdb.org/t/p/original/${slide?.poster_path}`}
                  width={200}
                  height={200}
                  alt="poster"
                  className="w-full h-full relative object-cover"
                  loading="lazy"
                />
              </Link>
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
};

export default CategoriesSlides;
