import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from "../components/Scroll";
import './App.css'
import ErrorBoundary from "../components/ErrorBoundary";

class App extends Component {
    constructor() {
        super();
        this.state = {
            robot: [],
            searchfield: ""
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robot: users }));
    }

    render() {
        const { robot, searchfield } = this.state;
        const filteredRobots = robot.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robot.length ?
            <h1 className="tc">Loading</h1> :
            <div className="tc">
                <h1 className="f2">RoboFriends</h1>
                <SearchBox searchchange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robot={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
    }
}

export default App;