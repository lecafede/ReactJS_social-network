import style from './Dialogs.module.css'
import Message from './Message/Message';
import Name from './Name/Name';
import React from 'react';

function Dialogs(props) {

    let NameElement = props.state.namesData.map(el => <Name name={el.name} id={el.id}/>)
    let MessageElement = props.state.messagesData.map(el => <Message message={el.message}/>)

    let newMessage = React.createRef();

    let addMessage = () => {
        let text = newMessage.current.value;
        alert(text)
    }

    return (

        <div className={style.dialogs}>
            <div className={style.chat}>
                <div className={style.names}>

                    {NameElement}

                </div>
                <div className={style.messages}>
            
                    {MessageElement}
        
                </div>
            </div>
    
            <div className={style.dialog_chat}>
                <textarea ref={newMessage}>
                    Write word
                </textarea>
                <button onClick={addMessage}>Отправить</button>
            </div>
            
        </div>
    )
}

export default Dialogs;