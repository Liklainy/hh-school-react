import React, { Component } from "react";

export default class LogsList extends Component {
    render() {
        const logs = Object.keys(this.props.logs).map((key) => {
            const logItems = this.props.logs[key].map((logItem) => <li>logItem</li>);
            return <div><h3>{key}</h3><ul>{logItems}</ul></div>;
        });
        return <div>{logs}</div>
    }
}