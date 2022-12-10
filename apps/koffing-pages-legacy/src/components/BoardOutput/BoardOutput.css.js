import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    padding: theme.spacing() * 2,
    color: theme.palette.text.secondary,
  },
  qrContainer: {
    padding: theme.spacing() * 2,
    textAlign: 'center',
    backgroundColor: '#dde0f6',
  },
  jsonContainer: {
    padding: theme.spacing() * 2,
    backgroundColor: '#fafafa',
  },
}))
