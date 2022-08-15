import React, { Component } from 'react'

export default class Header extends Component {
    constructor() {
        super()
        this.state = {
            title: 'Horned Beast'
        }
    }
    // change the title
    changeTitle = () => {
        if (this.state.title === "Horned Beast")
            this.setState({
                title: "🐐"
            })
        else {
            this.setState({
                title: 'Horned Beast'
            })
        }
    }
    render() {
        return (
            <div >
                <h1 onClick={this.changeTitle}>{this.state.title}</h1>
            </div>
        )
    }
}