import React, { Component } from "react";

// components
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList/TourList";

import "./App.scss";

export default class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <TourList />
      </main>
    );
  }
}
