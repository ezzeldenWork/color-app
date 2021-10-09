import React, {Component} from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";
import {Link} from "react-router-dom";
export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {format: "hex", open: false};
    this.hendalFormateCheng = this.hendalFormateCheng.bind(this);
    this.closeSnakebar = this.closeSnakebar.bind(this);
  }
  hendalFormateCheng(e) {
    this.setState({format: e.target.value, open: true});
    this.props.hendalCheng(this.state.format);
  }
  closeSnakebar() {
    this.setState({open: false});
  }
  render() {
    const {level, chengeLevel, hendalCheng} = this.props;
    const {format} = this.state;
    return (
      <header className="Navbar">
        <div className="logo">
          <Link to="/">Color Palette </Link>
        </div>
        <div className="slider-container">
          <span className="level">level {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={chengeLevel}
            />
          </div>
        </div>
        <div className="select-container">
          <Select value={format} onChange={this.hendalFormateCheng}>
            <MenuItem value="hex">HAX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA rgba(255,255,255,1.0)</MenuItem>
          </Select>
        </div>

        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={this.state.open}
          autoHideDuration={3000}
          message={<span id="message-id">Format Chenged to {format}</span>}
          ContentProps={{
            "aria-describedby": "message-id",
          }}
          onClose={this.closeSnakebar}
          action={[
            <IconButton
              onClick={this.closeSnakebar}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </header>
    );
  }
}

export default Navbar;
