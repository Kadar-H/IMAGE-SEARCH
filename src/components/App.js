import React, { Component } from "react";
import SearchInput from "./SearchInput";
import axios from "axios";
import ImageList from "./ImageList";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  async onSearchSubmit(entry) {
    console.log(entry);
    const response = await axios.get(
      `https://pixabay.com/api/videos/?key=24016376-bed1b99a45b87a0cdcf058126&q=${entry}`
    );
    console.log(response.data.hits);
    this.setState({ images: response.data.hits });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <SearchInput onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

// this.onFormSubmit = this.onFormSubmit.bind(this); // first method of binding

export default App;
