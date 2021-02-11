import style from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { updateNewPostText } from '../../../redux/state';

function MyPosts (props) {


  let PostElement = props.postData.map(post => <Post message={post.message}/>)


  let PostText = React.createRef();

  let addPost = () => {

    let text = PostText.current.value;
    props.addPost(text)
    PostText.current.value = '';
   
  }

  let onPostChange = () => {
    let text = PostText.current.value;
    console.log(text)
    props.updateNewPostText(text);
  }


    
    return (
        <div className={style.my_posts}>
        <div className={style.my_posts__title}>
          My posts
        </div>
        <textarea 
          ref={PostText} 
          className={style.my_posts__textarea} 
          onChange={onPostChange} 
        />
          
        <button onClick={addPost} className={style.button_send__post}>Send</button>
        
        {PostElement}
        
        {/* <Post/>
        <Post/>
        <Post/> */}
      

      </div>
    )
}

export default MyPosts;