// import { rerenderEntireTree } from "../render"

let rerenderEntireTree = () => {
    console.log("state changed")
}

let state = {

    profilePage: {
        postData: [
            {id:'1', message:"How are you?"},
            {id:'2', message:"Why you mad?"},

          ],
          newPostText: 'it-kamasutra'
    },

    dialogsPage: {
        namesData: [
            {id:'1', name:"Denis"},
            {id:'2', name:"Vova"},
            {id:'3', name:"Ivan"},
            {id:'4', name:"Sergey"},
        ],

        messagesData: [
            {id:'1', message: "hello!"},
            {id:'2', message: "Good Buy!"},
            {id:'3', message: "Hello World"},
            {id:'4', message: "By by!"},
        ]
        
    },

    navbarBlock: {
        navigationDate: [
            {id:"1", name:"Profile", link:"/profile"},
            {id:"2", name:"Dialogs", link:"/dialogs"},
            {id:"3", name:"News", link:"/news"},
            {id:"4", name:"Music", link:"/music"},
            {id:"5", name:"Settings", link:"/settings"}
        ]
    }
}

export const addPost = (postMessage) => {

    let NewPost = {
        id: '1',
        message: postMessage
    }

    state.profilePage.postData.push(NewPost)
    rerenderEntireTree();
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    
    rerenderEntireTree();
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer // Паттерн обсервер применяется чтобы не импортировать из рендера. И чтобы не была циклическая зависимость
}


window.state = state;
export default state;