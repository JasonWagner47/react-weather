import React, { Component } from 'react';




class search extends React.Component {
    render () {
        return (
            <form onSubmit={this.props.getWeather}> 
                <input type="text" name="city" placeholder="City" defaultValue="Denver"/>
                <button type="submit"> Get Weather </button>

            </form>
        );
    }

};

export default search;