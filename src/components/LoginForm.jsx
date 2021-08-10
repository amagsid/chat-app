import React, {useState} from 'react'
import axios from 'axios'
import { BorderTopOutlined } from '@ant-design/icons'
import SignUp from '../screens/SignUp'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const projectID = 'c6bb26d2-597f-41fa-b7a8-c9138cd4f906';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };
  
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
          <h1 className="title">Chat Application</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
            <div align="center">
              <button type="submit" className="button">
                <span>Start chatting</span>
              </button>
            </div>
          </form>
          <h1 className='error'>{error}</h1>

          <h6> New user? <Link to='/signup'> sign up here </Link> </h6>

          

        </div>
       
      </div>
  
    );
}

export default LoginForm
