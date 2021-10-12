import React, {Component} from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import PaltteList from "./PaltteList";
import SingleColorPalette from "./singleColorPalette";
import {genetatrPalette} from "./colorHelpers";
import {Route, Switch} from "react-router";
import NewPaletteForm from "./newPaletteForm";

export class App extends Component {
  findPaltte(id) {
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  }
  render() {
    return (
      <Switch>
        <Route exact path="/palette/new" render={() => <NewPaletteForm />} />
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
            <PaltteList palttes={seedColors} {...routeProps} />
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
