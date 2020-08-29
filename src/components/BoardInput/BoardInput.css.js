import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    marginTop: 0,
    overflow: 'hidden'
  },
  textArea: {
    fontFamily: "monospace",
    fontSize: "1em",
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing()
  }
}))
