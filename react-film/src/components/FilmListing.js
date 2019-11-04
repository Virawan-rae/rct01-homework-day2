import React, { Component } from "react";
import FilmRow from "./FilmRow";

class FilmListing extends Component {
  state = {
    filter: "all",
    faves: []
  };

  handleFilterClick = (e, message) => {
    this.setState({ filter: message });
    e.stopPropagation();
  };

  render() {
    const { faves, filter } = this.state;
    const { films } = this.props;

    const allFilms =
      filter === "all"
        ? films.length > 0 && films.map(film => <FilmRow key={film.id} film={film} />)
        : faves.length > 0 && faves.map(film => <FilmRow key={film.id} film={film} />);

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div
            className={`film-list-filter ${this.state.filter === "all" ? "is-active" : ""}`}
            onClick={e => this.handleFilterClick(e, "all")}
          >
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div
            className={`film-list-filter ${this.state.filter === "faves" ? "is-active" : ""}`}
            onClick={e => this.handleFilterClick(e, "faves")}
          >
            FAVES
            <span className="section-count">0</span>
          </div>
        </div>
        {allFilms}
      </div>
    );
  }
}

export default FilmListing;
