import style from './Name.module.css'
import React from 'react';
import { NavLink } from 'react-router-dom';

function Name (props) {


    let path = "/dialogs/" + props.id;


    return (
        <div className={style.name}>
            <NavLink to={path} activeClassName={style.selected}>{props.name}</NavLink>
        </div>

    )
}

export default Name;