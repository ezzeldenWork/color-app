import React, {Component} from "react";
import ColorBox from "./ColorBox";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {Link} from "react-router-dom";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = {format: "hex"};
    this.hendalFormat = this.hendalFormat.bind(this);
  }
  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColor = palette.colors;
    for (let key in allColor) {
      shades = shades.concat(
        allColor[key].filter((color) => color.id == colorToFilterBy)
      );
    }

    return shades.slice(1);
  }

  hendalFormat(val) {
    this.setState({format: val});
  }
  render() {
    const {format} = this.state;
    const {paletteName, emoji, id} = this.props.palette;
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showLink={false}
      />
    ));
    return (
      <div className="singleColorPalette palette">
        <Navbar ShowSlider={false} hendalCheng={this.hendalFormat} />
        <div className="palette-colors">
          {colorBoxes}
          <div className="go-back colorBoxs">
            <Link to={`/palette/${id}`} className="back-button">
              Go Back
            </Link>
          </div>
        </div>
        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;
