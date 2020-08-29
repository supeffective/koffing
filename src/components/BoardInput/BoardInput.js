import React, { useState } from 'react';
import base64 from "../../tools/base64";
import history from "../../tools/history";
import {Koffing} from "../../core/Koffing";
import styles from "./BoardInput.css";
import TextField from "@material-ui/core/TextField";
import StyledComponent from "../StyledComponent";
import exampleTeam from "../../teams/example.koffing";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

class BoardInputComponent extends StyledComponent {
  constructor(props) {
    super(props);
    this.state = {
      stateUrl: '',
      teamText: '',
      teamTextBase64: base64.encode(''),
      teamJson: '',
      teamObj: {}
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.update(this.loadTeam());

    history.onPopState((e) => {
      this.update(this.loadTeam());
    })
  }

  loadTeam() {
    let teamCode = history.getState();
    if (teamCode === '') {
      return exampleTeam;
    }
    return base64.decode(teamCode);
  }

  update(value) {
    value = value.trimStart();
    const valueBase64 = base64.encode(value);
    const valueJson = Koffing.toJson(value);
    this.setState({
      stateUrl: history.createStateUrl(valueBase64),
      teamText: value,
      teamTextBase64: valueBase64,
      teamJson: valueJson,
      teamObj: JSON.parse(valueJson)
    });
  }

  prettify() {
    this.update(Koffing.format(this.state.text) + "\n");
  }

  handleChange(event) {
    this.update(event.target.value);
  }

  getFirstTeamName() {
    const defaultName = 'undefined';
    if (
      this.state.teamObj['teams'] === undefined
      || this.state.teamObj['teams'][0] === undefined
      || this.state.teamObj['teams'][0].name === undefined
    ) {
      return defaultName;
    }
    return this.state.teamObj['teams'][0].name;
  }

  render() {
    const {classes} = this.props;
    return (
      <Paper className={classes.root} elevation={1}>
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
          value={this.state.teamText}
          inputProps={{
            className: classes.textArea
          }}
          onChange={this.handleChange}
        />
        <Button onClick={() => this.prettify()} variant={'contained'} color={'primary'}>Prettify</Button>
        &nbsp;
        <Button onClick={() => this.update('')} variant={'text'}>Clear</Button>
      </Paper>
    );
  }
}

export default BoardInputComponent.styled(styles);
