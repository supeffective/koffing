import React from 'react';
import StyledComponent from '../StyledComponent';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typo from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import logo from "../../img/koffing.png";
import vars from "../../variables.json";
import styles from "./AppHeader.css";

class AppHeader extends StyledComponent {
  render() {
    const classes = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton aria-label="Home" href="#">
              <img alt="logo" className={classes.logo + " koffing-sprite"} src={logo}/>
            </IconButton>
            <Typo component="h1" color="inherit" className={classes.title}>
              {vars.header_title}
            </Typo>
            <IconButton color="inherit" href={vars.github_url} title="Source Code">
              <i className="fab fa-github"/>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default AppHeader.styled(styles);
