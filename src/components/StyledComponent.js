import {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
// eslint-disable-next-line no-unused-vars
import {StyledComponentProps} from '@material-ui/styles/withStyles'

/**
 * @link https://material-ui.com/es/styles/basics/#higher-order-component-api
 */
class StyledComponent extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired
    }

    /**
     * @param {object} styles
     * @returns {React.ComponentType<any & StyledComponentProps<T>>}
     */
    static styled(styles) {
        return withStyles(styles)(this);
    }
}

export default StyledComponent;
