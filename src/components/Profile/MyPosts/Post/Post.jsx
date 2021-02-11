import style from './Post.module.css'
import avatar from '../../../../images/avatar.png'

function Post (props) {
   return (

    <div>
        <div className={style.post__item}>
            <div className={style.post_img}>
                <img src={avatar} alt="" />
            </div>
            <div className={style.post_text}>{props.message}</div>
        </div>
    </div>

    )
}

export default Post;


