import React from 'react'
import './online.css'

export default function Online({user}) {
    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img src={'/assets/'+user.profilePicture} alt="" className="rightBarProfileImg"/>
                <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">{user.username}</span>
        </li>

    )
}
