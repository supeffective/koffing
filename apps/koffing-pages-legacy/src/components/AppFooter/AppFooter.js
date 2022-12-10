import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typo from '@material-ui/core/Typography'
import StyledComponent from '../StyledComponent'
import styles from './AppFooter.css'

class AppFooter extends StyledComponent {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Grid container spacing={10}>
          <Grid item sm={12} md={12}>
            <div className={classes.footer}>
              <Typo variant="caption" component="p">
                <span>Created by </span>
                <a
                  href="https://itsjavi.com"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  @itsjavi
                </a>
                /
                <a
                  href="https://route1rodent.com"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  @route1rodent
                </a>
                &nbsp; | &nbsp;
                <span>Powered by ReactJS and Material UI.</span>
              </Typo>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default AppFooter.styled(styles)
