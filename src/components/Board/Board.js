import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {base64, history} from "../../tools";
import StyledComponent from "../StyledComponent";
import BoardInput from "../BoardInput";
import BoardOutput from "../BoardOutput";
import exampleTeam from "../../teams/example.koffing";
import {Koffing} from "../../core";
import styles from "./Board.css";

class BoardComponent extends StyledComponent {

  constructor(props) {
    super(props);
    this.state = {
      stateUrl: '',
      teamText: '',
      teamTextBase64: base64.encode(''),
      teamJson: '',
      teamObj: {}
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleHashChange = this.handleHashChange.bind(this);
  }

  componentDidMount() {
    this.update(this.loadTeam());
    history.addListener(this.handleHashChange)
  }

  componentWillUnmount() {
    history.removeListener(this.handleHashChange);
  }

  handleInputChange(event) {
    this.update(event.target.value);
  }

  handleHashChange(event) {
    this.update(this.loadTeam());
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
      <div className={classes.root}>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={12} md={6} style={{paddingBottom: "1em"}}>
            <Typography variant="h4" component="h2">{this.getFirstTeamName()}</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={12} md={6}>
            <Paper className={classes.paper} elevation={1}>
              <BoardInput value={this.state.teamText} onChange={this.handleInputChange}/>
              <Button onClick={() => this.prettify()} variant={'contained'} color={'primary'}>Prettify</Button>
              &nbsp;
              <Button onClick={() => this.update('')} variant={'text'}>Clear</Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <BoardOutput qrValue={this.state.stateUrl} jsonValue={this.state.teamJson}/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default BoardComponent.styled(styles);
