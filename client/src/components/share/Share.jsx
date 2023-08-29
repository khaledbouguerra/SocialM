import "./share.css"
import {PermMedia, Label, Room, EmojiEmotions, Cancel} from "@mui/icons-material";
import {useContext, useRef, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";

export default function Share() {
    const PF=process.env["REACT_APP_PUBLIC_FOLDER"];
    const {user} =useContext(AuthContext);
    const desc=useRef();
    const [file,setFile]=useState(null);
    const submitHander=async(e)=>{
         e.preventDefault();
         const newPost={
             userId:user._id,
             desc:desc.current.value
         }
         if(file){
             const data=new FormData();
             const fileName=new  Date().getTime() + file.name;
             file.customFileName=fileName;
             console.log('file.customFileName ', file.customFileName)
             data.append('name',fileName);
             data.append('file',file);

             newPost.img=fileName;
             try{
                 await axios.post('/upload',data,
                     {
                         headers: {
                             "Content-Type": "multipart/form-data",
                         }
                     })
             }catch (err) {
             }
         }
         try{
             await axios.post('/posts',newPost)
             window.location.reload()
         }catch (err) {
             console.log('error ', err)
         }
    }
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop" >
                    <img src={user.profilePicture?PF+user.profilePicture:PF+'person/noAvatar.png'} className="shareProfileImg" alt=""/>
                    <input type="text" placeholder={"What's in your mind "+ user.username +'?'} ref={desc} className="shareInput"/>
                </div>
                <hr className="shareHr"/>
                {file&&(
                    <div className="shareImgContainer">
                        <img src={URL.createObjectURL(file)} alt="" className="shareImg"/>
                        <Cancel className='shareImgCancel' onClick={()=>setFile(null)}></Cancel>
                    </div>
                )}
                <form className="shareBottom" onSubmit={submitHander}>
                    <div className="shareOptions">
                        <label className="shareOption" htmlFor="file">
                            <PermMedia htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText">Photo or Video</span>
                            <input type="file" accept=".png,.jpeg,.jpg" style={{display:"none"}}
                                   onChange={(e)=>setFile(e.target.files[0])} id="file"/>
                        </label>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon"/>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon"/>
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton" type='submit'>Share</button>
                </form>
            </div>
        </div>
    )
}
