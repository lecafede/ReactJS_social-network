import style from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

function Navigation(props) {
    return (
        <div className={style.nav_item}>
            <NavLink to={props.link} activeClassName={style.selected}>{props.name}</NavLink>
        </div>
    )
}


export default Navigation;


