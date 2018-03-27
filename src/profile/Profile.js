import React, { Component } from 'react';

export default class Profile extends Component {
    render = () => {
        const imgStyle = { width: '100px' };
        return (
            <div>
                <img
                    style={imgStyle}
                    src= {this.props.artworkUrl100}
                    alt="profile pic!">
                </img>
                <h2>Name: { this.props.artistName }</h2>
            </div>
        );
    }
}