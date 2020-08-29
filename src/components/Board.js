import React from 'react';
import QRCode from 'qrcode.react';
import styled from '../tools/styled';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Code from "./Code";
import {Koffing} from "../core/Koffing";
import exampleTeam from "../resources/example.koffing";
import koffingImg from "../img/koffing.png";
import base64 from "../tools/base64";

const qrIconSettings = {
  src: koffingImg,
  height: 48,
  width: 48,
  excavate: true
}

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
  },
  qrContainer: {
    padding: theme.spacing() * 2,
    textAlign: "center",
    backgroundColor: "#dde0f6"
  },
  jsonContainer: {
    padding: theme.spacing() * 2,
    backgroundColor: "#fafafa"
  }
});

class BoardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: '', json: '', jsonObj: {teams: [{name: ""}]}};

    this.handleChange = this.handleChange.bind(this);
  }

  loadTeam() {
    let teamCode = window.location.hash.replace(/^#/, '');
    if (teamCode === '') {
      return exampleTeam;
    }
    return this.decodeTeam(teamCode);
  }

  getTeamUrl(teamCode) {
    return window.location.origin + window.location.pathname + this.getTeamHash(teamCode);
  }

  getTeamHash(teamCode) {
    return "#" + base64.encode(teamCode);
  }

  encodeTeam(teamCode) {
    return base64.encode(teamCode);
  }

  decodeTeam(teamCode) {
    return base64.decode(teamCode);
  }

  componentDidMount() {
    this.update(this.loadTeam());

    window.addEventListener("popstate", (e) => {
      this.update(this.loadTeam());
    });
  }

  update(value) {
    this.setState({
      text: value,
      json: Koffing.toJson(value),
      jsonObj: JSON.parse(Koffing.toJson(value))
    });
  }

  handleChange(event) {
    this.update(event.target.value);
    window.history.pushState(null, null, this.getTeamHash(event.target.value));
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
          <Grid item xs={12} sm={12} md={6} style={{paddingBottom: "1em"}}>
            <Typography variant="h4" component="h2">{this.state.jsonObj.teams[0].name}</Typography>
          </Grid>
        </Grid>
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
              <Paper className={classes.qrContainer}>
                <QRCode value={this.getTeamUrl(this.state.text)} size={320} renderAs="canvas" imageSettings={qrIconSettings}/>
              </Paper>
              <Paper className={classes.jsonContainer}>
                <Code code={this.state.json} language={'json'}/>
              </Paper>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default styled(BoardComponent, styles);
