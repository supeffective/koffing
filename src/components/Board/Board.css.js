export default (theme) => ({
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
})
