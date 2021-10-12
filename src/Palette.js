import React, {Component} from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./styles/Palette.css";

export class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {level: 500, format: "hex"};
    this.chengeLevel = this.chengeLevel.bind(this);
    this.hendalFormateCheng = this.hendalFormateCheng.bind(this);
  }

  chengeLevel(level) {
    this.setState({level});
  }

  hendalFormateCheng(val) {
    this.setState({format: val});
  }
  render() {
    const {colors, paletteName, emoji, id} = this.props.palette;
    const {level, format} = this.state;
    const colorBoxs = colors[level].map((color) => (
      <ColorBox
        background={color[format]}
        name={color.name}
        step={100}
        key={color.id}
        showLink
        moreURL={`/palette/${id}/${color.id}`}
      />
    ));

    return (
      <div className="palette">
        <Navbar
          level={level}
          chengeLevel={this.chengeLevel}
          hendalCheng={this.hendalFormat}
          ShowSlider
        />
        <div className="palette-colors">{colorBoxs}</div>
        <Footer paletteName={paletteName} emoji={emoji} id={id} />
      </div>
    );
  }
}

export default Palette;
