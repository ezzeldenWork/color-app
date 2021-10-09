import React, {Component} from "react";
import {CopyToClipboard} from "react-copy-to-clipboard";
import "./colorBoxs.css";
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
    const {name, background} = this.props;
    const {copied} = this.state; 
    return (
      <CopyToClipboard text={background} onCopy={this.chengeCopyState}>
        <div style={{background}} className="colorBoxs">
          <div style={{background}} className={`copy-overlay ${copied && 'show'}`} />
          <div className={`copy-msg ${copied && 'show'}`}>
            <h1>copied 👌</h1>
            <p>{this.props.background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-botton"> Copy </button>
          </div>
          <span className="see-more">More</span>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
