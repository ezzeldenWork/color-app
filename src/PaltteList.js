import React, {Component} from "react";
import { Link } from "react-router-dom"; 

export class PaltteList extends Component {
  render() {
    const {palttes} = this.props;
    return (
      <div>
        <h1>React Color</h1>
        {palttes.map((paletteMap) => (
          <p>
          <Link to={`/palette/${paletteMap.id}`}> {paletteMap.paletteName} </Link></p>
        ))}
      </div>
    );
  }
}

export default PaltteList;
