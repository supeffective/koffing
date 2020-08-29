export default (theme) => ({
  root: {
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
})
