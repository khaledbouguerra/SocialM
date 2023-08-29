import "./profile.css"
import TopBar from "../../components/topBar/TopBar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router";

export default function Profile() {
    const PUBLIC_FOLDER=process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({});
    const params=useParams();
    console.log('params ', params);


    useEffect(() => {
        const fetchUser=async ()=>{
            const res=  await axios.get(`/users/?username=${params.username}`);
            setUser(res.data.data);
        }
        fetchUser();

    }, [params.username]);
    return (
        <>
            <TopBar/>
            <div className="profile">
                <Sidebar/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src={user.coverPicture?PUBLIC_FOLDER+user.coverPicture: PUBLIC_FOLDER+'person/noCover.png' } alt="" className="profileCoverImg"/>
                            <img src={user.profilePicture? PUBLIC_FOLDER+user.profilePicture:PUBLIC_FOLDER+'person/noAvatar.png' } alt='' className="profileUserImg"/>
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <span className="profileInfoDesc"> {user.desc}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={params.username}/>
                        <Rightbar user={user}/>
                    </div>
                </div>

            </div>
        </>
    )
}
