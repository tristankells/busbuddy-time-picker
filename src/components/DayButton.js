import React, { Component } from 'react';

class DayButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
        this.toggleClass = this.toggleClass.bind(this)
    }
    toggleClass() {
        this.props.onClick();
        const currentState = this.state.active;
        this.setState(
            { active: !currentState }
        )
    }
    render() {
        return (<button
            className={this.state.active ? "btn-clicked btn" : "btn-unclicked btn"}
            onClick={this.toggleClass}
        >
        <span className="btn-text">{this.props.text}</span>
        </button>);
    }
}

export default DayButton;