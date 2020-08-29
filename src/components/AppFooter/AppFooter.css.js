export default (theme) => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing(),
    flexGlow: 1
  }),
  footer: {
    padding: theme.spacing() * 2,
    textAlign: 'center'
  }
})
