import React, {Component} from "react";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {Link} from "react-router-dom";
import "./styles/colorBoxs.css";
import {withStyles} from "@material-ui/styles";
import chroma from "chroma-js";
import {style} from "dom-helpers";

const styles = {
  copyText: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.7 ? "#000" : "#fff",
  },
  colorName: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.08 ? "#fff" : "#000",
  },
  seeMore: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.08 ? "white" : "#000",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    bottom: "0",
    right: "0",
    border: "0",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase",
  },
};

export class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {copied: false};
    this.chengeCopyState = this.chengeCopyState.bind(this);
  }

  chengeCopyState() {
    this.setState({copied: true}, () => {
      setTimeout(() => this.setState({copied: false}), 1500);
    });
  }

  render() {
    const {name, background, moreURL, showLink, classes} = this.props;
    const {copied} = this.state;
    const darkColor = chroma(background).luminance() <= 0.08;
    const lightColor = chroma(background).luminance() >= 0.7;
    return (
      <CopyToClipboard text={background} onCopy={this.chengeCopyState}>
        <div style={{background}} className=" colorBoxs">
          <div
            style={{background}}
            className={`copy-overlay ${copied && "show"}`}
          />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>copied 👌</h1>
            <p className={classes.copyText}>{this.props.background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={classes.colorName}>{name}</span>
              <p className={classes.colorName}>{this.props.background}</p>
            </div>
            <button className={`copy-botton ${lightColor && "lightColor"}`}>
              Copy
            </button>
          </div>
          {showLink && (
            <Link to={moreURL} onClick={(e) => e.stopPropagation()}>
              <span className={classes.seeMore}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
