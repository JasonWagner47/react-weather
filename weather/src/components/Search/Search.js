import React, { Component } from 'react';




class search extends React.Component {
    render () {
        return (
            <form onSubmit={this.props.getWeather}> 
                <input type="text" name="city" placeholder="City"/>
                <button> Get Weatther </button>

            </form>
        );
    }

};

export default search;