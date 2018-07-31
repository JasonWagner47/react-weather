import React, { Component } from 'react';
import axios from 'axios';


const city = 'Denver';
const country ='USA';
const ApiKey = '1c198b3372d8bdb9aa90f8308847b060';




class Card extends Component {
    state = {
        posts: [],
        error: false
    }
    //lifecycle hook
    componentDidMount () {
        axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + ',' + country + '&appid=' + ApiKey)
        //promise
        .then(response => {
            console.log(response);
        });
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Card
                    key={post.id} 
                    currenttemp={post.temp}
                    tempmax={post.temp_max} 
                    tempmin={post.temp_min}
                     />;
            });
        }

        //not a fan of the obligatory div, but C'est la vie

        return (
            <div>
                {posts}
            </div>
     
        )
    }

}

export default Card;