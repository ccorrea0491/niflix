import React, { Component } from "react";

import classes from "./Base.module.css";
import Welcome from "../../components/Welcome/Welcome";
import Movies from "../../components/Movies/Movies";
import Modal from "../../components/UI/Modal/Modal";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import MovieModal from "../../components/Movies/Movie/MovieModal/MovieModal";

class Base extends Component {
  state = {
    modal: false,
  };

  componentDidMount() {
    this.props.onGetMovies();
    this.props.onGetMoviesTrending();
    this.props.onGetTopRated();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchInput !== this.props.searchInput) {
      this.props.onSearch(this.props.searchInput);
    }
  }

  selectMovieHandler = (e) => {
    this.setState({ modal: !this.state.modal });
    const id = e.target.id;
    this.props.onGetMovie(id);
    //this.setState({ modal: true });
  };

  modalHandler = () => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    let search = (
      <React.Fragment>
        <section className={classes.Popular}>
          {this.props.movies ? (
            <Movies
              selectMovie={this.selectMovieHandler}
              headingName="Popular"
              movies={this.props.movies}
            />
          ) : null}
        </section>
        <section className={classes.Trending}>
          {this.props.trending ? (
            <Movies
              selectMovie={this.selectMovieHandler}
              headingName="Trending Now"
              movies={this.props.trending}
            />
          ) : null}
        </section>
        <section className={classes.Rated}>
          {this.props.topRated ? (
            <Movies
              selectMovie={this.selectMovieHandler}
              headingName="Top Rated"
              movies={this.props.topRated}
            />
          ) : null}
        </section>
      </React.Fragment>
    );
    if (this.props.searchInput) {
      search = (
        <section className={classes.Popular}>
          {this.props.searchResults ? (
            <Movies
              selectMovie={this.selectMovieHandler}
              headingName="Results"
              movies={this.props.searchResults}
            />
          ) : null}
        </section>
      );
    }

    return (
      <main className={classes.Base}>
        <Modal show={this.state.modal}>
          {this.props.movieInfo ? (
            <MovieModal movie={this.props.movieInfo} />
          ) : null}
        </Modal>
        <Backdrop show={this.state.modal} close={this.modalHandler} />
        {this.props.movies ? (
          <Welcome
            poster={this.props.movies[0].backdrop_path}
            title={this.props.movies[0].title}
            overview={this.props.movies[0].overview}
          />
        ) : null}

        {/* <section className={classes.Popular}>
          {this.props.movies ? (
            <Movies
              selectMovie={this.selectMovieHandler}
              headingName="Popular"
              movies={this.props.movies}
            />
          ) : null}
        </section>
        <section className={classes.Trending}>
          {this.props.trending ? (
            <Movies
              selectMovie={this.selectMovieHandler}
              headingName="Trending Now"
              movies={this.props.trending}
            />
          ) : null}
        </section>
        <section className={classes.Rated}>
          {this.props.topRated ? (
            <Movies
              selectMovie={this.selectMovieHandler}
              headingName="Top Rated"
              movies={this.props.topRated}
            />
          ) : null}
        </section> */}
        {search}
        <footer className={classes.Footer}>
          Developed by Carlos Correa &copy;
        </footer>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    trending: state.trending,
    topRated: state.topRated,
    movieInfo: state.movieInfo,
    searchInput: state.searchInput,
    searchResults: state.searchResults,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetMovies: () => dispatch(actions.getMovies()),
    onGetMoviesTrending: () => dispatch(actions.getTrending()),
    onGetTopRated: () => dispatch(actions.getTopRated()),
    onGetMovie: (id) => dispatch(actions.getMovie(id)),
    onSearch: (query) => dispatch(actions.search(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Base);
