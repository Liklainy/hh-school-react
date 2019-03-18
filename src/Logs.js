import React, { Component } from "react";

import LogsControls from "./LogsControls"
import LogsList from "./LogsList"

export default class Logs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            requestIdValue: '',
            logs: {}
        };
    
        this.handleRequestIdSubmit = this.handleRequestIdSubmit.bind(this);
        this.handleRequestIdChange = this.handleRequestIdChange.bind(this);
        this.handleIFeelLuckyClick = this.handleIFeelLuckyClick.bind(this);
    }

    handleRequestIdSubmit(event) {
        event.preventDefault();
    }

    handleRequestIdChange(event) {
        this.setState({requestIdValue: event.target.value});
    }

    handleIFeelLuckyClick(event) {
        this.setState({requestIdValue: '123456'});
    }


    render() {
        return <div>
            <LogsControls requestIdValue={this.state.requestIdValue}
                          onRequestIdChange={this.handleRequestIdChange}
                          onRequestIdSubmit={this.handleRequestIdSubmit}
                          onIFeelLuckyClick={this.handleIFeelLuckyClick}/>
            <LogsList logs={this.state.logs}/>
        </div>
    }
};