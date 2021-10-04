import React, {Component} from "react";
import ColorBox from "./ColorBox";

export class Palette extends Component {
  render() {
    return (
      <div className="palette">
        <div className="palette-colors">
          <ColorBox />
        </div>
      </div>
    );
  }
}

export default Palette;
