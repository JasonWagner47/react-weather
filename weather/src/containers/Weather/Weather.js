import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';

const city = 'Denver';
const country ='USA';
const ApiKey = '1c198b3372d8bdb9aa90f8308847b060';

class Weather extends Component {
    state = {
        posts: [],
        error: false
    }
    //lifecycle hook
    componentDidMount () {
        axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + ',' + country + '&units=imperial&appid=' + ApiKey)
      
        //promise
        .then(response => {
           
            //todo ... add limit to response here with slice after conversion
            const posts = response.data.list.slice(0, 4);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                }
            });

            console.log(updatedPosts);
          
            this.setState({posts: updatedPosts});
                //do something
            } )
            .catch(error => {
                console.log('[this is the error] ' + error);
                this.setState({error: true});
            });
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post
                key={post.dt} 
                current={post.main.temp}
                high={post.main.temp_max} 
                low={post.main.temp_min}
                conditions={post.weather[0].description}/>;
            });
    
        }
        //not a fan of the obligatory div, but C'est la vie

        return (
            <div className="Container">
              {posts}
            </div>
     
        );
    }

}

export default Weather;