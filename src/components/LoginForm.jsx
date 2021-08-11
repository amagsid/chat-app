import React, {useState} from 'react'
import axios from 'axios'
import { BorderTopOutlined } from '@ant-design/icons'
import {
  Link
} from "react-router-dom";

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    // console.log(process.env.REACT_APP_PROJECT_ID)
    // console.log(process.env.REACT_APP_PRIVATE_KEY)
  
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
