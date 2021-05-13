import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class PostList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             errorMessage: ""
        }
    }
    
    abortContent = new AbortController();
    cancelTokenSource = axios.CancelToken.source();

    componentDidMount = () => {        
        
        // setTimeout(() => {
        //     fetch("https://jsonplaceholder.typicode.com/posts", {signal: this.abortContent.signal})
        // .then(response => {
        //     console.log(response.data);
        //     this.setState({
        //         posts: response.data
        //     });
        // })
        // .catch(err => {
        //     if(err.name === "AbortError")
        //     {
        //         console.log("Fetch aborted");
        //     }
        //     else
        //     {
        //         console.log(err.name);
        //         this.setState({ errorMessage: "Error retreiving data" });
        //     }
        // })
        // }, 1000);

        setTimeout(() => {
            axios.get("https://jsonplaceholder.typicode.com/posts", 
                    { cancelToken: this.cancelTokenSource.token })
        .then(response => {
            console.log(response.data);
            this.setState({
                posts: response.data
            });
        })
        .catch(err => {
            if(axios.isCancel(err))
            {
                console.log(err.name);
                console.log("Cancelled");
            }
            else
            {
                console.log(err.name);
                this.setState({ errorMessage: "Error retreiving data" });
            
            }
        })
        }, 1000);

        
    }

    componentWillUnmount = () => {
        console.log("Going to abort");
        // this.abortContent.abort();
        this.cancelTokenSource.cancel("Canceled by the user");
    }

    render() {
        const { posts, errorMessage } = this.state
        return (
            <div>
                List of Posts
                {
                    posts.length ?
                    posts.map(post => {
                        return (
                            <div className="post" key={post.id} >
                                <Link to={`/posts/${post.id}`} >
                                    {post.title}
                                </Link>
                            </div>
                    )}) : null
                }
                {
                    errorMessage ? <div>{errorMessage}</div> : null
                }

            </div>
        )
    }
}

export default PostList
