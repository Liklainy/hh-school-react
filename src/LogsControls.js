import React, { Component } from "react";

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default class LogsControls extends Component {

    render() {
        return <form onSubmit={this.props.onRequestIdSubmit}>
            <Grid container spacing={24}>
                <Grid item xs={8}>
                    <TextField type="text"
                               value={this.props.requestIdValue}
                               onChange={this.props.onRequestIdChange}
                               fullWidth/>
                </Grid>
                <Grid item xs={2}>
                    <Button type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth>
                        Request ID
                    </Button>
                </Grid>
                <Grid item xs={2}>
                    <Button onClick={this.props.onIFeelLuckyClick} 
                        variant="contained"
                        color="primary"
                        fullWidth>
                        I Feel Lucky
                    </Button>
                </Grid>
            </Grid>
          </form>
    }
}