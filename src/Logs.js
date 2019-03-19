import React, { Component } from "react";

import LogsControls from "./LogsControls"
import LogsList from "./LogsList"

export default class Logs extends Component {

    static baseUrl = 'http://localhost:9200/api/';

    constructor(props) {
        super(props);
        this.state = {
            requestIdValue: '',
            logs: {},
            exception: ''
        };
    
        this.handleRequestIdSubmit = this.handleRequestIdSubmit.bind(this);
        this.handleRequestIdChange = this.handleRequestIdChange.bind(this);
        this.handleIFeelLuckyClick = this.handleIFeelLuckyClick.bind(this);
    }

    getLogs(requestId) {
        fetch(Logs.baseUrl + 'logs?rid=' + requestId)
            .then(response => { 
                if (!response.ok)
                    throw Error(response.statusText);
                return response.json();
            })
            .then(data => this.setState({logs: data, exception: null}))
            .catch(error => this.showError(error.message));
    }

    showError(message) {
        this.setState({logs: {}, exception: message});
    }

    handleRequestIdSubmit(event) {
        event.preventDefault();
        this.getLogs(this.state.requestIdValue);
    }

    handleRequestIdChange(event) {
        this.setState({requestIdValue: event.target.value});
    }

    handleIFeelLuckyClick(event) {
        fetch(Logs.baseUrl + 'feelinglucky')
            .then(response => { 
                if (!response.ok)
                    throw Error(response.statusText);
                return response.json();
            })
            .then((data) => {
                const rid = data.rid || '';
                this.setState({requestIdValue: rid});
                this.getLogs(rid);
            })
            .catch(error => this.showError(error.message));
    }


    render() {
        return <div>
            <LogsControls requestIdValue={this.state.requestIdValue}
                          onRequestIdChange={this.handleRequestIdChange}
                          onRequestIdSubmit={this.handleRequestIdSubmit}
                          onIFeelLuckyClick={this.handleIFeelLuckyClick}/>
            <LogsList logs={this.state.logs}
                      exception={this.state.exception}/>
        </div>
    }
};