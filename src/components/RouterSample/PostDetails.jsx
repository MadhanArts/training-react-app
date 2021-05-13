// import axios from 'axios';
import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'


const PostDetails = () => {
    const { id } = useParams();

    const [blog, setBlog] = useState({id: '', title: '', body: ''});

    const url = "https://jsonplaceholder.typicode.com/posts/" + id;
    
    useEffect(() => {
        const abortContent = new AbortController();
        
        setTimeout(() => {
            fetch(url, { signal: abortContent.signal})
            .then(response => response.json())
            .then(data => {
                setBlog(data);
            })
            .catch(err => {
                console.log(err.name);                    
            });

        }, 1000);

        return () => {
            abortContent.abort();
        }
    }, [url]); 

        
    return ( 
        <div className="blog-details" >
            <h2>Blog Details - {id} </h2>
            <article>
                <h3>{blog.title}</h3>
                <p>{blog.body}</p>
            </article>
        </div>

     );
}
 
export default PostDetails;
