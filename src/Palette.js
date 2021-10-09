import React, {Component} from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";

export class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {level: 500, format: "hex"};
    this.chengeLevel = this.chengeLevel.bind(this);
    this.hendalFormat = this.hendalFormat.bind(this);
  }

  chengeLevel(level) {
    this.setState({level});
  }

  hendalFormat(val) {
    this.setState({format: val});
  }
  render() {
    const {colors, paletteName, emoji} = this.props.palette;
    const {level, format} = this.state;
    const colorBoxs = colors[level].map((color) => (
      <ColorBox background={color[format]} name={color.name} step={100} key={color.id} />
    ));

    return (
      <div className="palette">
        <Navbar
          level={level}
          chengeLevel={this.chengeLevel}
          hendalCheng={this.hendalFormat}
        />
        <div className="palette-colors">{colorBoxs}</div>
        <footer className="palette-footer">
          {paletteName}
          <span className="emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
}

export default Palette;
