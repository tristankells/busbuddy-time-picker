import React, { Component } from 'react';

class DayButton extends Component {

    render() {
        return (<button
            className={this.props.clicked ? "btn-clicked btn" : "btn-unclicked btn"}
            onClick={this.props.onClick}
        >
        <span className="btn-text">{this.props.text}</span>
        </button>);
    }
}

export default DayButton;