import React, {Component} from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import {genetatrPalette} from "./colorHelpers";
import {Route, Switch} from "react-router";

export class App extends Component {
  findPaltte(id) {
   return seedColors.find(function (palette) {
      return palette.id === id;
    });
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" />
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
