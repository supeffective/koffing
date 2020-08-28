import React from 'react';
import styled from '../styled';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typo from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import koffingImg from "../img/koffing.png";

const title = 'Koffing - Pokémon Showdown Team Parser';
const sourceUrl = 'https://github.com/itsjavi/koffing';
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
                            <img alt="logo" className={classes.sprite + " koffing-sprite"} src={koffingImg} />
                        </IconButton>
                        <Typo style={{fontSize: '1.3125rem'}} color="inherit" className={classes.title}>
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
