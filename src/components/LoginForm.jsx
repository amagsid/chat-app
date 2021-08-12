import React, {useState} from 'react'
import axios from 'axios'
import { BorderTopOutlined } from '@ant-design/icons'
import { AiFillWechat } from "react-icons/ai";

import {
  Link
} from "react-router-dom";

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // if ()
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const authObject = { 'Project-ID': process.env.REACT_APP_PROJECT_ID, 'User-Name': username, 'User-Secret': password };
  
      try {
        
        await axios.get('https://api.chatengine.io/chats', { headers: authObject });
  
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
  
        window.location.reload();
        setError('');
      } catch (err) {
        setError('Oops, incorrect credentials.');
      }
    };
  
    return (
      <div className="wrapper">
        <div className="form">
          
          <AiFillWechat size={150} className="title faa-tada faa-slow animated" />
          <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
            <div align="center">
              <button type="submit" className="button">
                <span>Start chatting</span>
              </button>
            </div>
            <h6 className="subtitle"> first time here? <Link to='/signup'> create a new account</Link> </h6>
          </form>
          <h1 className='error'>{error}</h1>

          

          

        </div>
       
      </div>
  
    );
}

export default LoginForm
