import React,  {useState}  from 'react'
import { useHistory } from "react-router";
import axios from 'axios'
import {
    Link
  } from "react-router-dom";

function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const [isCreated, setIsCreated] = useState(false);
    const [error, setError] = useState('');

    const history = useHistory();

    let userExists


    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            "username": username,
            "secret": password,
        }
        const config = {
            method: 'post',
            url: 'https://api.chatengine.io/users/',
            headers: {
                'PRIVATE-KEY': process.env.REACT_APP_PRIVATE_KEY
            },
            data : data
        };

        const authObject = { 'Project-ID': process.env.REACT_APP_PROJECT_ID, 'User-Name': username, 'User-Secret': password };

       
        // if (!(username.length > 0 && password === confirmPassword && password.length > 0)) return;

        
   
      
        try {

            const users = await axios.get('https://api.chatengine.io/users', {
            headers: { 'PRIVATE-KEY': process.env.REACT_APP_PRIVATE_KEY }
          });

           userExists = users.data.some((user)=>  user.username === username )

          if (!userExists) {

          const newUser = await axios(config)
          if(newUser.status === 201) setIsCreated(true)

 

          await axios.get('https://api.chatengine.io/chats', { headers: authObject });

          localStorage.setItem('username', username);
          localStorage.setItem('password', password);
          } else {
              setError(`username already exists, try signing in`)
          }


        //   url(${person.person.avatar})

        } catch (e){
            console.log(e)
            setError('Oops, something went wrong');
        }
    }

    const redirectToChat =() =>{


        history.push({
            pathname:  "/",
            state: {
              response: 'messageFromServer'
            } 
         });

         window.location.reload();

    }
    return (

        <div className="wrapper">
            <div className="form">
                <h4 className="title"> {!isCreated ? 'Create a new account' :` user created! you can start chatting now!`}  </h4>
                {isCreated &&  <button onClick={redirectToChat}> go to chat</button> }
              
                <form onSubmit={handleSubmit}>
                {/* <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="input" placeholder="first name" required />
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="input" placeholder="last name" required /> */}

                {/* <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" placeholder="e-mail" required /> */}
                
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="password" required />
                    {/* <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="input" placeholder="confirm password" required /> */}
                    
                    <div align="center">
                        <button type="submit" className="button"> <span>Create account</span>
                        </button>
                    </div>
                </form>
          <h1 className='error'>{ error}</h1>
          </div>
          </div>

    )
}

export default SignUp
