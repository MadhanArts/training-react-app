import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             errorMessage: ""
        }
    }
    
    componentDidMount = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            console.log(response.data);
            this.setState({
                posts: response.data
            });
        })
        .catch(err => {
            console.log(err);
            this.setState({ errorMessage: "Error retreiving data" });
        })
    }

    render() {
        const { posts, errorMessage } = this.state
        return (
            <div>
                List of Posts
                {
                    posts.length ?
                    posts.map(post => {
                        return <div key={post.id} >{post.title}</div>
                    }) : null
                }
                {
                    errorMessage ? <div>{errorMessage}</div> : null
                }

            </div>
        )
    }
}

export default PostList
