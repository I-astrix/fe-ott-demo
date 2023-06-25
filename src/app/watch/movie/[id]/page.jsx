import CategoriesSlides from "@/components/Sections/MovieSlide";
import tmdb from "@/utils/tmdb";
import Image from "next/image";
import React from "react";

const getDataForId = async (id) => {
  const request = await tmdb(`https://api.themoviedb.org/3/movie/${id}`);
  return await request.json();
};

const getRelated = async(id)=>{
  const request = await tmdb(`https://api.themoviedb.org/3/movie/${id}/similar`);
  const data = await request.json();
  return data?.results
}


const page = async ({ params }) => {
  const data = await getDataForId(params?.id);
  const related = await getRelated(params?.id);
  return (
    <main className="relative min-h-screen">
      <div className="absolute top-14 lg:top-0 h-screen  w-full  overflow-hidden">
        <div className="absolute block w-full bg-gradient-to-t from-brand-dark to-transparent  bottom-0 h-96 lg:h-60 "></div>

        <Image
          src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
          width={500}
          height={500}
          alt="hero-img"
          className="w-full h-full aspect-video object-contain object-top sm:object-cover"
        />
      </div>

      <section className=" text-white h-screen max-h-screen min-h-screen relative flex flex-col gap-4 items-start justify-end lg:px-24 px-8 p-24  w-full">
        <h1 className="text-xl lg:text-4xl">{data?.title}</h1>

        <div className="flex gap-2 font-semibold">
          <p>{String(data?.runtime)} Minutes</p>
          &middot;
          <p>{String(data?.release_date).split("-")[0]}</p>
          &middot;
          <p>{data?.spoken_languages?.length} Languages</p>
        </div>

        <p className=" max-w-xl ">{data?.overview}</p>

        <div className="flex gap-4">
          {data?.genres?.slice(0, 4).map((genre) => {
            return (
              <small
                key={genre.id}
                className="bg-white bg-opacity-20 px-2 py-1 rounded"
              >
                {genre?.name}
              </small>
            );
          })}
        </div>

        <div className="flex gap-2">
          <div className="flex w-60 gap-2 btn-click  select-none  bg-white bg-opacity-20 border-white justify-center items-center text-white mt-2 rounded py-2 px-4 cursor-pointer">
            <button className="h-8 w-8 rounded-full grid place-content-center ">
              <Image
                src={"/play.svg"}
                width={25}
                height={25}
                alt="play"
                className="invert"
              />
            </button>
            <small className="">Watch Now</small>
          </div>

          <button className="btn-click  select-none bg-white bg-opacity-20 border-white justify-center items-center text-white mt-2 rounded py-2 px-4 cursor-pointer">
            <Image
              src={"/add.svg"}
              width={25}
              height={25}
              alt="play"
              className="invert"
            />
          </button>
        </div>
      </section>

      <section className=" relative">

          <CategoriesSlides showViewAll={false} slides={related} title={"More like this"}/>

      </section>
    </main>
  );
};

export default page;
