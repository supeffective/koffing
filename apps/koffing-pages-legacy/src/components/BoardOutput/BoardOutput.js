import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import QRCode from 'qrcode.react'
import Code from '../Code'
import useStyles from './BoardOutput.css'
import logo from '../../img/koffing.png'

const qrIconSettings = {
  src: logo,
  height: 48,
  width: 48,
  excavate: true,
}

function BoardOutput({ qrValue, jsonValue }) {
  const classes = useStyles()

  return (
    <Paper className={classes.root} elevation={1}>
      <Paper className={classes.qrContainer}>
        <QRCode
          value={qrValue}
          size={320}
          renderAs="canvas"
          imageSettings={qrIconSettings}
        />
      </Paper>
      <Paper className={classes.jsonContainer}>
        <Code code={jsonValue} language={'json'} />
      </Paper>
    </Paper>
  )
}

BoardOutput.propTypes = {
  qrValue: PropTypes.string.isRequired,
  jsonValue: PropTypes.string.isRequired,
}

export default BoardOutput
