import React, {Component} from "react";
import {Link} from "react-router-dom";
import MiniPalette from "./MiniPalette";

import {withStyles} from "@material-ui/styles";

const styles = {
  root: {
    backgroundColor: "#00f",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  container: {
    width: "50%",
    display: "flex",
    // justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  nav: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#fff",
    "& a" : {
      color: "#fff",
      fontSize: "1rem",
      textDecoration:"none"
    }
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
  },
};
export class PaltteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }

  render() {
    const {palttes, classes} = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.nav}>
            <h1>React Color</h1>
            <Link to="/palette/new" > New Palette </Link> 
          </div>
          <div className={classes.palettes}>
            {palttes.map((paletteMap) => (
              <MiniPalette
                {...paletteMap}
                handleClcik={() => this.goToPalette(paletteMap.id)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(PaltteList);
