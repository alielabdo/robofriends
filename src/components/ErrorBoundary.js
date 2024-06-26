import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }

    render() {
        const hasError = this.state.hasError;
        return hasError ?
            <h1>Oops!</h1> :
            this.props.children
    }
}

export default ErrorBoundary;