"use strict";

import React from 'react';
import styled from 'styled';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import Code from "components/Code";
import {Koffing} from "../../../src/index";

const exampleTeam = `=== [gen7] Folder 1/Example Team ===

Smogon (Koffing) (F) @ Eviolite
Level: 5
Ability: Levitate
Shiny: Yes
Happiness: 255
EVs: 36 HP / 236 Def / 236 SpD
IVs: 31 HP / 30 Atk / 31 SpA / 30 SpD / 31 Spe
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
- Taunt
`;

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
        let parsedTeams = Koffing.parse(value);

        this.setState({
            text: value,
            json: JSON.stringify(parsedTeams, null, 2)
        });
    }

    handleChange(event) {
        this.update(event.target.value);
    }

    format() {
        this.update(
            Koffing.prettify(this.state.text) + "\n"
        );
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Paper className={classes.paper} elevation={1}>
                            <TextField
                                autoComplete="off"
                                autoCorrect="off"
                                autoCapitalize="off"
                                spellCheck="false"
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
                            <Button onClick={() => this.format()} variant={'raised'} color={'primary'}>Prettify</Button>
                            &nbsp;<Button onClick={() => this.update('')} variant={'flat'}>Clear</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
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