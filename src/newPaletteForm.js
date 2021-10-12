import React, {Component} from "react";
import classNames from "classnames";
import {withStyles} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import {ChromePicker} from "react-color";
import {Button} from "@material-ui/core";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import DraggaleColorBox from "./DraggaleColorBox";

const drawerWidth = 400;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: "calc(100vh - 62px)",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

export class newPaletteForm extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      open: true,
      currntColor: "red",
      colors: ["red", "blue", "#000"],
    };
    this.updateCurrentColro = this.updateCurrentColro.bind(this);
    this.addNewColor = this.addNewColor.bind(this);
  }

  updateCurrentColro(newColor) {
    console.log(newColor);
    this.setState({currntColor: newColor.hex});
  }

  handleDrawerOpen = () => {
    this.setState({open: true});
  };

  handleDrawerClose = () => {
    this.setState({open: false});
  };

  addNewColor() {
    this.setState({colors: [...this.state.colors, this.state.currntColor]});
  }

  render() {
    const {classes} = this.props;
    const {open} = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Persistent drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <Typography variant="h4">MAke Your Palette</Typography>
          <div>
            <Button variant="contained" color="secondary">
              Clear Your Palette
            </Button>
            <Button variant="contained" color="primary">
              Random Color
            </Button>
          </div>
          <ChromePicker
            color={this.state.currntColor}
            onChangeComplete={this.updateCurrentColro}
          />
          <ValidatorForm>
            <TextValidator   />
          </ValidatorForm>
          <Button
            variant="contained"
            color="primary"
            style={{backgroundColor: this.state.currntColor}}
            onClick={this.addNewColor}
          >
            Add Color
          </Button>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />

          {this.state.colors.map((color) => (
            <DraggaleColorBox color={color} />
          ))}
        </main>
      </div>
    );
  }
}
export default withStyles(styles, {withTheme: true})(newPaletteForm);
