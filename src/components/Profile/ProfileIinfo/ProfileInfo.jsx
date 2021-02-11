import style from './ProfileInfo.module.css'

function ProfileInfo (props) {
    return (
        <div className={style.profile_info}>
          <div className={style.profile_photo}>
            <img src="https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg" alt=""/>
          </div>
          <div className={style.profile_info__text}>
            <span className={style.profile_name}>Denis Marushchak</span>
            <p>Date if Birth: 2 junary</p>
            <p>City: Minsk;</p>
            <p>Education: Donnu</p>
            <p>Website: hhtp/denhello</p>
          </div>
        </div>
    )
}

export default ProfileInfo;