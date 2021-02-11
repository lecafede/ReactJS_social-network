import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';


function App(props) {
  return (
    <div className="app-wrapper">

        <Header/>
        {/* <Profile/> */}
        <Navbar state={props.state.navbarBlock}/>
        
        {/* <Dialogs/> */}
    
        {/* Route проверяет ссылку в адресной строке  */}

        <Route path="/profile" render={() => <Profile state={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/> 
        <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage}/>}/>
        
        

        {/* <div className="footer"></div> */}
   
      
  
    </div>
  );
}

export default App;

