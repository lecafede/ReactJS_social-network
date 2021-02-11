import style from './Message.module.css'


function Message(props) {
   return (

    <div>
      <div className="message__item">{props.message}</div>
    </div>

    )
}

export default Message;