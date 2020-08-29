import React from 'react';
import styled from '../tools/styled';
import Grid from '@material-ui/core/Grid';
import Typo from '@material-ui/core/Typography';

const styles = (theme) => ({
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
});

class AppComponent extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={10}>
                    <Grid item sm={12} md={12}>
                        <div className={classes.footer}>
                            <Typo variant="caption" component="p">
                                <span>Created by </span>
                                <a href="https://itsjavi.com" rel="noreferrer noopener" target="_blank">@itsjavi</a>
                                /
                                <a href="https://route1rodent.com" rel="noreferrer noopener" target="_blank">@route1rodent</a>
                                &nbsp; | &nbsp;
                                <span>Powered by ReactJS, Webpack, Babel and Material UI.</span>
                            </Typo>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default styled(AppComponent, styles);
