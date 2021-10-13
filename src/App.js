import React, {Component} from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import PaltteList from "./PaltteList";
import SingleColorPalette from "./singleColorPalette";
import {genetatrPalette} from "./colorHelpers";
import {Route, Switch} from "react-router";
import NewPaletteForm from "./newPaletteForm";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {palette: seedColors};
    this.savePalette = this.savePalette.bind(this);
    this.findPaltte = this.findPaltte.bind(this);
  }
  findPaltte(id) {
    return this.state.palette.find(function (palette) {
      return palette.id === id;
    });
  }

  savePalette(newPalette) {
    this.setState({palette: [...this.state.palette, newPalette]})
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/palette/new"
          render={(routeProps) => (
            <NewPaletteForm savePalette={this.savePalette} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={(routeProps) => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={genetatrPalette(
                this.findPaltte(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaltteList palttes={this.state.palette} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => (
            <Palette
              palette={genetatrPalette(
                this.findPaltte(routeProps.match.params.id)
              )}
            />
          )}
        />
      </Switch>
      // <div>
      //   <Palette palette={genetatrPalette(seedColors[3])} />
      // </div>
    );
  }
}

export default App;
