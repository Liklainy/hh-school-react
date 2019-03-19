import React, { Component } from "react";

export default class LogsList extends Component {
    render() {
        if (this.props.exception)
            return <h1>{this.props.exception}</h1>

        const logs = Object.keys(this.props.logs).map((key) => {
            const logItems = this.props.logs[key].map((logItem) =>
                <li key={logItem.timestamp}>
                    {logItem.message}
                </li>);
            return <div key={key}>
                <h3>{key}</h3>
                <ul>{logItems}</ul>
            </div>;
        });
        return <div>{logs}</div>
    }
}