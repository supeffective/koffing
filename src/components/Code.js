import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

const styles = {
  root: {
    margin: '6px 0'
  },
  pre: {
    margin: 0,
    border: 'none !important',
    color: '#008008'
  }
};

class Code extends React.Component {
  render() {
    const formattedCode = this.props.code;
    const codeClassName = `language-${this.props.language}`;
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <pre className={classes.pre}>
          <code className={codeClassName}>
              <div dangerouslySetInnerHTML={{__html: formattedCode}}/>
          </code>
        </pre>
      </div>
    );
  }
}

Code.propTypes = {
  classes: PropTypes.object.isRequired,
  code: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default withStyles(styles)(Code);
