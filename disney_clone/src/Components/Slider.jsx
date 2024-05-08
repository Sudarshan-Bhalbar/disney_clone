import React, { useEffect, useState } from 'react'
import GlobalApi from "../Services/GlobalApi";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const Slider = () => {
    const [movieList , setMovieList] = useState([]);
    useEffect(()=>{
        getTrendingMovies();
    },[])

    const getTrendingMovies=()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
            // console.log(resp);
            setMovieList(resp.data.results)
        })
    }
  return (
    <div className="flex overflow-x-auto px-14 py-4 w-full scrollbar-none">
      {movieList.map((item, index) => (
        <img
          src={IMAGE_BASE_URL + item.backdrop_path}
          className=" min-w-full h-[310px] object-cover object-left-top mr-5 rounded-lg"
        />
      ))}
    </div>
  );
}

export default Slider