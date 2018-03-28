"use strict";

import React from 'react';
import styled from 'styled';
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typo from 'material-ui/Typography';
import IconButton from "material-ui/IconButton";

const title = 'Koffing - Pokémon Showdown Team Parser';
const sourceUrl = 'https://github.com/capsulemonsters/koffing';
const styles = {
    root: {
        flexGrow: 1
    },
    title: {
        flex: 1,
        fontWeight: 400
    },
    sprite: {
        position: "relative",
        display: "inline-block",
        verticalAlign: "middle",
        imageRendering: `crisp-edges;
        -ms-interpolation-mode:nearest-neighbor;
        image-rendering: -moz-crisp-edges;
        image-rendering: -webkit-crisp-edges;
        image-rendering: pixelated;`,
    }
};

class AppBarComponent extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton aria-label="Home" href="#">
                            <img className={classes.sprite + " koffing-sprite"} src="assets/img/koffing.png"/>
                        </IconButton>
                        <Typo variant="title" color="inherit" className={classes.title}>
                            {title}
                        </Typo>
                        <IconButton color="inherit" href={sourceUrl} title="Source Code">
                            <i className="fab fa-github"/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default styled(AppBarComponent, styles);