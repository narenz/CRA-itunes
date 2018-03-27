import React, { Component } from 'react';

export default class Hello extends Component {
    render = () => {
        return (
            <div>
                <input
                    type="text"
                    name="search"
                    value={this.props.searchStr}
                    onChange={this.props.callBack} />
                <button onClick={this.props.submitResults}>Submit</button>
            </div>
        );
    }
}