import React, { Component } from "react";
import List from "./List";

class Search extends Component {
  
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.state = {
      places: null,
      check: []
    };
  }
  render() {
      return (
        <div>
          <input type="text" id="in" onChange={() => this.update()}/>
          <List data={this.state.check}/>
        </div>
      );
  }
  update() {
    let temp = document.getElementById("in").value;
    if (temp == "") {
      temp = [];
    } else {
      temp = this.state.places.filter(e => e.state.includes(temp) || e.city.includes(temp)).map(e => <li key={e.latitude}>{`${e.city}, ${e.state}`}</li>);
    }
    this.setState({check: temp});  

  }
  /* DO NOT MODIFY */
  componentDidMount() {
    const allPlaces = [];
    const endpoint =
      "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
    fetch(endpoint)
      .then(data => data.json())
      .then(results => {
        allPlaces.push(...results)
        this.setState({ places: allPlaces })
      })
      .catch(error => console.log(error));
  }
}

export default Search;

