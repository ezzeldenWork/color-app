import React from "react";
import {withStyles} from "@material-ui/styles";

const styles = {
  root: {
    backgroundColor: "white",
    border : "1px solid #333", 
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    "&:hover":{
      cursor : "pointer"
    }
  },
  colors: {
    backgroundColor: "gray",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.5rem 0 0",
    margin: "0",
    color: "#000",
    fontSize: "1rem",
    position: "relative"
  },
  emoji: {
    padding: "0.5rem 0 0",
    fontSize: "1rem",
  },
};

function MiniPalette(props) {
  const {classes, paletteName , emoji} = props;
  return (
    <div className={classes.root}>
      <div className={classes.colors}></div>
      <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
