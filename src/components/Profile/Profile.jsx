import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';
import ProfileInfo from './ProfileIinfo/ProfileInfo';


function Profile(props) {
    return (
        
        <div className={style.profile}>
        <img src="https://interier-foto.ru/wp-content/uploads/krasivye-foto-prirody-50.jpg" alt=""/>
        
        
        <ProfileInfo/>
        <MyPosts 
            postData={props.state.postData} 
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}
        />
     
        </div> 
    )
}

export default Profile;