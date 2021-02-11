import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import Navigation from './Navigation/Navigation';

function Navbar(props) {

    let navigationElement = props.state.navigationDate.map(el => <Navigation name={el.name} link={el.link}/>)

    return (

    <div className={style.navigation}>
        
        {navigationElement}
        <Friends/>
    </div>
    
    )
}

export default Navbar;

