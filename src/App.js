import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import SignUp from './screens/SignUp';

const App = () => {
  

  return (
      <Router>
          <Switch>
       
          <Route path='/signup' component={SignUp}/>
      {!localStorage.getItem('username') && <LoginForm /> }
    
          <ChatEngine
      height="100vh"
      projectID={process.env.REACT_APP_PROJECT_ID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />

         
      
      
   
    </Switch>
    </Router>
  );
};

// infinite scroll, logout, more customizations...

export default App;

