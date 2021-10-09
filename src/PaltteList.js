import React, {Component} from "react";
import {Link} from "react-router-dom";
import MiniPalette from "./MiniPalette";

export class PaltteList extends Component {
  render() {
    const {palttes} = this.props;
    return (
      <div>
        <MiniPalette />
        <h1>React Color</h1>
        {palttes.map((paletteMap) => (
          <p>
            <Link to={`/palette/${paletteMap.id}`} key={paletteMap.id}>
              {paletteMap.paletteName}
            </Link>
          </p>
        ))}
      </div>
    );
  }
}

export default PaltteList;
