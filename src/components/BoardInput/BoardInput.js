import React from 'react';
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import useStyles from "./BoardInput.css";

function BoardInput({value, onChange}) {
  const classes = useStyles();

  return <TextField
    autoComplete="off"
    autoCorrect="off"
    autoCapitalize="off"
    spellCheck="false"
    multiline
    className={classes.root}
    rows="12"
    rowsMax="24"
    autoFocus={true}
    placeholder="Place here your Showdown teams"
    // defaultValue={exampleTeam}
    fullWidth
    margin="normal"
    value={value}
    inputProps={{
      className: classes.textArea
    }}
    onChange={onChange}
  />
}

BoardInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func
}

export default BoardInput;
