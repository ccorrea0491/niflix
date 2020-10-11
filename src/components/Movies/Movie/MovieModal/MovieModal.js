import React from "react";

import Button from "../../../UI/Button/Button";
import classes from "./MovieModal.module.css";

const movieModal = (props) => {
  const title = props.movie[9].original_title;
  const rating = props.movie[11].popularity / 100;
  const releaseDate = props.movie[15].release_date;
  const overview = props.movie[10].overview;
  const poster = props.movie[1].backdrop_path;

  return (
    <div
      className={classes.MovieModal}
      style={{
        backgroundImage: `linear-gradient(to right, black 20%, transparent), url(http://image.tmdb.org/t/p/w780/${poster})`,
      }}
    >
      <div className={classes.Content}>
        <h1>{title}</h1>
        <p>
          <span>Rating: {rating}</span> Release date: {releaseDate}
        </p>
        <p>{overview}</p>
        <div>
          <Button btnColor="red" btnName="Play" />
          <Button btnName="Add To List" />
        </div>
      </div>
    </div>
  );
};

export default movieModal;
