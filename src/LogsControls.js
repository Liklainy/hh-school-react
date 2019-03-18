import React, { Component } from "react";

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default class LogsControls extends Component {
    render(props) {
        return <form>
            <Grid container spacing={24}>
                <Grid item xs={8}>
                    <TextField fullWidth/>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" color="primary" fullWidth>Request ID</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" color="primary" fullWidth>I Feel Lucky</Button>
                </Grid>
            </Grid>
          </form>
    }
}