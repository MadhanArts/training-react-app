import React, { Component } from 'react';
import axios from 'axios';

class PostForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             userId: "",
             title: "",
             body: ""
        };

    }

    changeHandler = (event) => {
        this.setState({ 
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        axios
        .post("https://jsonplaceholder.typicode.com/posts", this.state)
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });
    }
    

    render() {
        const {userId, title, body } = this.state
        return (
            <div>
                <form action="" onSubmit={this.handleSubmit} >
                    <div>
                        ID : 
                        <input 
                            type="text" 
                            value={userId} 
                            name="userId"
                            onChange={this.changeHandler} 
                        />
                    </div>
                    <div>
                        Title :
                        <input 
                            type="text" 
                            value={title} 
                            name="title"                             
                            onChange={this.changeHandler} 
                        />
                    </div>
                    <div>
                        Body :
                        <input 
                            type="text" 
                            value={body} 
                            name="body" 
                            onChange={this.changeHandler} 
                        />
                    </div>
                    <button type="submit" >Submit</button>
                </form>                
            </div>
        )
    }
}

export default PostForm
