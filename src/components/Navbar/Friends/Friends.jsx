import style from './Friends.module.css'
import avatar from '../../../images/avatar.png'

function Friends(props) {
    return (
        
        <div className={style.friends__block}>
            <div className={style.friends__title}>
                Friends 
            </div>
            <div className={style.friends}>
                <div className={style.friend__item}>
                    <div className={style.friend_photo}>
                        <img src={avatar} alt=""/>
                    </div>
                    <div className={style.friend_name}>
                        Andrew
                    </div>
                </div>
                <div className={style.friend__item}>
                    <div className={style.friend_photo}>
                        <img src={avatar} alt=""/>
                    </div>
                    <div className={style.friend_name}>
                        Andrew
                    </div>
                </div>
                <div className={style.friend__item}>
                    <div className={style.friend_photo}>
                        <img src={avatar} alt=""/>
                    </div>
                    <div className={style.friend_name}>
                        Andrew
                    </div>
                </div>
            </div>
           
            
        </div>
    )
}

export default Friends;