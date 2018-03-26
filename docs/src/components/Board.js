"use strict";

import React from 'react';
import styled from 'styled';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import TextField from "material-ui/TextField";
import Code from "components/Code";
import {Koffing} from "../../../src/index";

const exampleTeam = `=== [gen7] Example Team ===

Koffing @ Eviolite
Level: 5
Ability: Levitate
EVs: 36 HP / 236 Def / 236 SpD
Bold Nature
- Will-O-Wisp
- Pain Split
- Sludge Bomb
- Fire Blast

Weezing @ Black Sludge
Ability: Levitate
EVs: 252 HP / 160 Def / 96 Spe
Bold Nature
- Sludge Bomb
- Will-O-Wisp
- Toxic Spikes
- Taunt`;

const styles = (theme) => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit,
        flexGlow: 1
    }),
    paper: {
        padding: theme.spacing.unit * 2,
        color: theme.palette.text.secondary
    },
    textField: {
        marginTop: 0,
        overflow: 'hidden'
    },
    textArea: {
        fontFamily: "monospace",
        fontSize: "1em",
        backgroundColor: theme.palette.secondary.main,
        padding: theme.spacing.unit
    }
});

class BoardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: '', json: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.update(exampleTeam);
    }

    update(value) {
        if (!value) {
            return;
        }

        let parsedTeams = Koffing.parse(value);

        this.setState({
            text: value,
            json: JSON.stringify(parsedTeams, null, 2)
        });
    }

    handleChange(event) {
        this.update(event.target.value);
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item sm={12} md={7}>
                        <Paper className={classes.paper} elevation={1}>
                            <TextField
                                autocomplete="off"
                                autocorrect="off"
                                autocapitalize="off"
                                spellcheck="false"
                                multiline
                                className={classes.textField}
                                rows="12"
                                rowsMax="24"
                                autoFocus={true}
                                placeholder="Place here your Showdown teams"
                                // defaultValue={exampleTeam}
                                fullWidth
                                margin="normal"
                                value={this.state.text}
                                inputProps={{
                                    className: classes.textArea + " koffing-in"
                                }}
                                onChange={this.handleChange}
                            />
                        </Paper>
                    </Grid>
                    <Grid item sm={12} md={5}>
                        <Paper className={classes.paper} elevation={1}>
                            <div className="koffing-out">
                                <Code code={this.state.json} language={'json'}/>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default styled(BoardComponent, styles);