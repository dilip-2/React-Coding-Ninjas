import { Component } from "react";
import AnimeCard from "./AnimeCard";

// Complete the AnimeList Component
class AnimeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anime: [
        {
          name: "One Piece",
          image:
            "https://image.tmdb.org/t/p/original/4Mt7WHox67uJ1yErwTBFcV8KWgG.jpg"
        },
        {
          name: "Demon Slayer",
          image:
            "https://image.tmdb.org/t/p/original/nTvM4mhqNlHIvUkI1gVnW6XP7GG.jpg"
        },
        {
          name: "Full Metal Alchemist",
          image:
            "https://image.tmdb.org/t/p/original/2UG177tWHy7xRmMKWJHB7nAUmKd.jpg"
        }
      ]
    };
  }

  render() {
    const {anime} = this.state;
    return <div className="anime-list">
       {anime.map((card)=><AnimeCard anime={card} />)}
    </div>;
  }
}

export default AnimeList;
