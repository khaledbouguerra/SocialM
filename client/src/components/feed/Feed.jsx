import "./feed.css"
import Share from "../share/Share";
import Post from "../post/Post";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";


export default function Feed({username}) {
    const [posts,setPosts]=useState([]);
    const {user}=useContext(AuthContext)
    useEffect(() => {
        const fetchPosts=async ()=>{
            const res=  username
                ?await axios.get('/posts/profile/'+username)
                :await axios.get('/posts/timeline/'+user._id);
            console.log('res ', res);
            setPosts(res.data.data.sort((p1,p2)=>{
                 console.log('res ', res);
                return new Date(p2.createdAt)-new Date(p1.createdAt)
            }));
        }
        fetchPosts();

    }, [username,user._id]);
    return (
        <div className="feed">
            <div className="feedWrapper">
                {(!username || username===user.username) &&  <Share/>}
                {posts.map((post)=>(
                    <Post key={post._id} post={post}/>
                ))}
            </div>
        </div>
    )
}
