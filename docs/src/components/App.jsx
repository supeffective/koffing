import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typo from 'material-ui/Typography';
import TextField from 'material-ui/TextField';

const title = 'Smogon Parser';
const exampleInput = `=== [gen7] Ultra Beasts ===

Headache (Blacephalon) @ Choice Scarf  
Ability: Beast Boost  
Level: 98  
Shiny: Yes  
Happiness: 249  
EVs: 4 Atk / 252 SpA / 252 Spe
Hasty Nature  
- Flamethrower  
- Explosion  
- Dark Pulse  
- Shadow Ball `;

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit,
    }),
});

const inlineStyles = {
    textField: {},
    inputTextarea: {
        fontFamily: "monospace",
        fontSize: "1em",
        backgroundColor: '#eee',
        padding: 16
    }
};

function AppComponent(props) {
    const {classes} = props;
    return (
        <div>
            <Paper className={classes.root} elevation={4}>
                <Typo variant="title" component="h1">
                    {title}
                </Typo>
                <Typo variant="subheading" component="h2">
                    Online Parser
                </Typo>
                <Typo variant="caption" component="p">
                    Created using React@16 + Webpack@4 + Babel@env + Material UI@next
                </Typo>
                <TextField
                    label="Input"
                    multiline
                    rows="15"
                    defaultValue={exampleInput}
                    className={"main-input"}
                    fullWidth
                    margin="normal"
                    style={inlineStyles.textField}
                    inputProps={{
                        style: inlineStyles.inputTextarea
                    }}
                />
                <Button variant="raised" color="primary">
                    Encode
                </Button>
                <Button variant="raised" color="secondary">
                    Decode
                </Button>
            </Paper>
        </div>
    );
}

AppComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppComponent);