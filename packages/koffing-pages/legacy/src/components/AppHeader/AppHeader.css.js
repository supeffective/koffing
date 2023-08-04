export default {
  root: {
    flexGrow: 1,
  },
  title: {
    flex: 1,
    fontWeight: 400,
    fontSize: '1.3125rem',
  },
  logo: {
    position: 'relative',
    display: 'inline-block',
    verticalAlign: 'middle',
    imageRendering: `crisp-edges;
        -ms-interpolation-mode:nearest-neighbor;
        image-rendering: -moz-crisp-edges;
        image-rendering: -webkit-crisp-edges;
        image-rendering: pixelated;`,
    '& koffing': {},
  },
}
