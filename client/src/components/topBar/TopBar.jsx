import "./topBar.css"
import {Chat, Notifications, Person, Search} from "@mui/icons-material";
import{Link} from 'react-router-dom';
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";
export default function TopBar(){
    const {user} =useContext(AuthContext);
    const PF=process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to='/' style={{textDecoration:"none"}}>
                <span className="logo">LamaSocial</span>
                </Link>
            </div>
            <div className="topbarCenter">
             <div className="searchBar">
                 <Search className="searchIcon"/>
                 <input type="text" placeholder="Search for friend, post, video" className="searchInput"/>
             </div>
            </div>
            <div className="topbarRight">
                <div className="topbaarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">TimeLine</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBagde">10</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBagde">20</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBagde">30</span>
                    </div>
                </div>
                <Link to={'/profile/' + user.username}>
                <img src={user?.profilePicture?PF+user.profilePicture:PF+'person/noAvatar.png'} alt="user avatar" className="topbarImg"/>
                    </Link>
            </div>
        </div>



    )
}