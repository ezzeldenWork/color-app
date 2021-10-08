import React, {Component} from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";


export class Palette extends Component {
  render() {
    const colorBoxs = this.props.colors.map((color) => (
      <ColorBox background={color.color} name={color.name} />
    ));
    return (
      <div className="palette">
        <div className="palette-colors">{colorBoxs}</div>
      </div>
    );
  }
}

export default Palette;
