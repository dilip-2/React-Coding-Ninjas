import "./styles.css";
import React from "react";
import Image from "./components/Image";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  }

  //~ Use the required lifecycle methods here

  componentDidMount() {
    (async () => {
      await fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
        .then(async (response) => {
          let Photos = await response.json();
          console.log(Photos)
          this.setState({ photos: Photos, loading: false })
        })
        .catch((err) => console.log(err))
    })()
  }

  render() {
    // Display loading status here
    return (<>
      <div className="App">
        {this.state.loading ? <p>Loading...</p> : null}
        {this.state.photos.map((photo) => {
          return <Image key={photo.id} photo={photo} role="img"/>;
        })}
      </div>
    </>
    );
  }
}
