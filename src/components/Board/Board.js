import React from 'react';
import QRCode from 'qrcode.react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import Code from "../Code";
import koffingImg from "../../img/koffing.png";
import styles from "./Board.css";
import StyledComponent from "../StyledComponent";
import BoardInput from "../BoardInput";

const qrIconSettings = {
  src: koffingImg,
  height: 48,
  width: 48,
  excavate: true
}

class BoardComponent extends StyledComponent {

  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={12} md={6} style={{paddingBottom: "1em"}}>
            <Typography variant="h4" component="h2">{this.input.current.getFirstTeamName()}</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={12} md={6}>
            <BoardInput ref={this.input} />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Paper className={classes.paper} elevation={1}>
              <Paper className={classes.qrContainer}>
                <QRCode value={this.input.state.stateUrl} size={320} renderAs="canvas"
                        imageSettings={qrIconSettings}/>
              </Paper>
              <Paper className={classes.jsonContainer}>
                <Code code={this.input.state.teamJson} language={'json'}/>
              </Paper>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default BoardComponent.styled(styles);
