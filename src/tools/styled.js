import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

/**
 * @param {React.Component} component
 * @param {object} styles
 * @returns {React.ComponentType<any & StyledComponentProps<T>>}
 */
function componentStyler(component, styles) {
    component.propTypes = {
        classes: PropTypes.object.isRequired,
    };

    return withStyles(styles)(component);
}

export default componentStyler;
