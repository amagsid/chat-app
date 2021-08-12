import React from 'react'
import { IoIosArrowBack } from "react-icons/io";


function EmptyChatScreen() {

    const emptyChat = './'

    return (
        <div className='no-chat-container'>
            <div className='no-chat-screen'> 
            <div className="create-chat-prompt">
                <IoIosArrowBack size={50} className="faa-horizontal faa-reverse animated" style={{marginRight:'20px'}, {color: '#6e6dbe'}}  />
                <h3> so empty! start by creating a new chat. </h3> </div>
           
                <img className='empty-state' src='./empty-chat.png'/>
            </div>
        </div>
    )
}

export default EmptyChatScreen
