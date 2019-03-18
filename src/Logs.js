import React, { Component } from "react";

import LogsControls from "./LogsControls"
import LogsList from "./LogsList"

export default class Logs extends Component {
    render(props) {
        return <div>
            <LogsControls />
            <LogsList />
        </div>
    }
};