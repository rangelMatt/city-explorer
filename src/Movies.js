import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Movie from "./Movie";

class Movies extends React.Component {

  getListItemArray = () => {
    let result = this.props.movieData.map((movie, index) => (
      <Movie movie={movie} key={`${movie.title}-${index}`} />
    ))
    return result;
  }
  render() {
    return (
      <>
      <ListGroup.Item key= "movie-section">
        <strong>MOVIES! {this.props.city}</strong>
      </ListGroup.Item>
      {this.getListItemArray()}
      </>
    );
  }
}

export default Movies;