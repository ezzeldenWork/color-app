import React, {Component} from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import {genetatrPalette} from "./colorHelpers";

export class App extends Component {
  render() {
    return (
      <div>
        <Palette palette={genetatrPalette(seedColors[2])} />
      </div>
    );
  }
}

export default App;
