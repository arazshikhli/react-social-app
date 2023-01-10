import React from "react";
import './Profile.css'
function Profile(){
    return (
        <div className='profile'>
            <div className='font-image'>
                <img  src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'/>
            </div>
            <div className='profile-posts'>
                <div className='user-info' style={{color:"red",margin:'10px 0 0  10px'}}>
                <div className='user-image'>
                    <img src='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png'/>
                </div>
                    <div>
                        <h2 >Steven Seegal</h2>
                        <p>City: Moscow</p>
                        <p>Education: MQU</p>
                        <p>Web site: www.njsddjks.com</p>
                    </div>
                   </div>
                <div className='posts'>
                    <h1>My Posts</h1>
                    <input className='input'/>
                    <button className='btn'>send</button>
                    <div>
                        new Post 1
                    </div>
                    <div>
                        new Post 2
                    </div>
                </div>
            </div>




        </div>
    )
}
export default Profile