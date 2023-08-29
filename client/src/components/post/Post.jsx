import './post.css'
import {MoreVert} from "@mui/icons-material";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {format} from 'timeago.js';
import {Link} from 'react-router-dom'
import {AuthContext} from "../../context/AuthContext";

export default function Post({post}) {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});
    const {user: currentUser} = useContext(AuthContext);
    const likeHandler = () => {
        try {
            axios.put('/posts/' + post._id + '/like', {userId: currentUser._id});
        } catch (err) {
            console.log('err');
        }
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked)
    };

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id))
    }, [currentUser._id,post.likes]);
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users/?userId=${post.userId}`);
            setUser(res.data.data);
        }
        fetchUser();

    }, [post.userId]);

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}>
                            <img className="postProfileImg"
                                 src={user.profilePicture ? PUBLIC_FOLDER + user.profilePicture : PUBLIC_FOLDER + '/person/noAvatar.png'}
                                 alt="post profile"/>
                        </Link>
                        <span className="postUserName">{user.username}</span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>

                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={PUBLIC_FOLDER + post.img} alt="" className="postImg"/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" alt="" className="likeIcon" onClick={likeHandler}/>
                        <img src="/assets/heart.png" alt="" className="likeIcon" onClick={likeHandler}/>
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
