import React from 'react';
import styled from '../styled';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Code from "./Code";
import {Koffing} from "../core/Koffing";
import exampleTeam from "../resources/example.koffing";

const styles = (theme) => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing(),
        flexGlow: 1
    }),
    paper: {
        padding: theme.spacing() * 2,
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
        padding: theme.spacing()
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
        this.setState({
            text: value,
            json: Koffing.toJson(value)
        });
    }

    handleChange(event) {
        this.update(event.target.value);
    }

    format() {
        this.update(
            Koffing.format(this.state.text) + "\n"
        );
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={10}>
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
                            <Button onClick={() => this.format()} variant={'contained'} color={'primary'}>Prettify</Button>
                            &nbsp;<Button onClick={() => this.update('')} variant={'text'}>Clear</Button>
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
