import React from "react";

import classes from "./Movies.module.css";
import Movie from "./Movie/Movie";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const movies = (props) => {
  let movie = null;
  if (props.movies) {
    movie = props.movies.map((movie) => {
      if (movie.backdrop_path || movie.poster_path) {
        return (
          <SwiperSlide>
            <Movie
              id={movie.id}
              key={movie.id}
              selectMovie={props.selectMovie}
              poster={
                movie.backdrop_path ? movie.backdrop_path : movie.poster_path
              }
            />
          </SwiperSlide>
        );
      }
    });
  }

  return (
    <div className={classes.MoviesSection}>
      <h2>{props.headingName}</h2>
      <div className={classes.Movies}>
        <Swiper
          slidesPerView={5}
          slidesPerGroup={10}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          loop
          scrollbar={{ draggable: true }}
          navigation
        >
          {movie}
        </Swiper>
      </div>
    </div>
  );
};

export default movies;
