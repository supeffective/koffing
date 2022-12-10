import React from 'react'
import PropTypes from 'prop-types'
import StyledComponent from '../StyledComponent'
import styles from './Code.css'

class Code extends StyledComponent {
  static propTypes = Object.assign({}, super.propTypes, {
    language: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
  })

  render() {
    const formattedCode = this.props.code
    const codeClassName = `language-${this.props.language}`
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <pre className={classes.pre}>
          <code className={codeClassName}>
            <div dangerouslySetInnerHTML={{ __html: formattedCode }} />
          </code>
        </pre>
      </div>
    )
  }
}

export default Code.styled(styles)
