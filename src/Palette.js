import React, {Component} from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {level: 500};
    this.chengeLevel = this.chengeLevel.bind(this);
  }

  chengeLevel(level) {
    this.setState({level});
  }

  render() {
    const {colors} = this.props.palette;
    const {level} = this.state;
    const colorBoxs = colors[level].map((color) => (
      <ColorBox background={color.hex} name={color.name} step={100} />
    ));

    return (
      <div className="palette">
        <Slider
          defaultValue={this.state.level}
          min={100}
          max={900}
          step={100}
          onAfterChange={this.chengeLevel}
        />
        <div className="palette-colors">{colorBoxs}</div>
      </div>
    );
  }
}

export default Palette;
