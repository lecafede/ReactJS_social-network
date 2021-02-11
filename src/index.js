import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import state, { addPost, subscribe, updateNewPostText } from './redux/state'

// Импорт можно делать только в index.js


export let rerenderEntireTree = () => {
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }

rerenderEntireTree();


subscribe(rerenderEntireTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
