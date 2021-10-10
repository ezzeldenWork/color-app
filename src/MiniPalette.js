import React from "react";
import {withStyles} from "@material-ui/styles";
import {colors} from "@material-ui/core";

const styles = {
  root: {
    backgroundColor: "#dae1e4",
    border: "1px solid #333",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    // overflow: "hidden",
    "&:hover": {
      cursor: "pointer",
    },
  },
  colors: {
    backgroundColor: "gray",
    height: "150px ",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.5rem 0 0",
    margin: "0",
    color: "#000",
    fontSize: "1rem",
    position: "relative",
  },
  emoji: {
    padding: "0.5rem 0 0",
    fontSize: "1rem",
  },
  minColor: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto -3.5px",
    position: "relative",
  },
};

function MiniPalette(props) {
  const {classes, paletteName, emoji, colors} = props;
  const miniColorBoxs = colors.map((color) => (
    <div
      className={classes.minColor}
      style={{backgroundColor: color.color}}
      key={color.name}
    ></div>
  ));
  return (
    <div className={classes.root} onClick={props.handleClcik}>
      <div className={classes.colors}>{miniColorBoxs}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
