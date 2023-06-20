import React from "react";
import AnimeList from "./AnimeList";

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Animepedia</h1>
        <AnimeList />
      </div>
    );
  }
}

export default App;
