import React from 'react'
import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import './App.css'




const  App = () => {
    return (
        <ChatEngine

        height="100vh"
        projectID='c6bb26d2-597f-41fa-b7a8-c9138cd4f906'
        userName="Ahmad"
        userSecret='123!@#'
        renderChatFeed={(chatAppProps)=> <ChatFeed
            {... chatAppProps} />}
        
        />
            
      
    )
}

export default App
