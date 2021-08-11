import React,  {useState}  from 'react'

function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const [error, setError] = useState('');

    const projectID = 'c6bb26d2-597f-41fa-b7a8-c9138cd4f906';

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!(username.length > 0 && password === confirmPassword && password.length > 0)) return;
        const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };
        console.log('submit')
        try {

        } catch (e){
            setError('Oops, something went wrong');
        }
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Create a new account</h1>
                <form onSubmit={handleSubmit}>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="input" placeholder="first name" required />
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="input" placeholder="last name" required />

                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" placeholder="e-mail" required />
                
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="password" required />
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="input" placeholder="confirm password" required />
                    
                    <div align="center">
                        <button type="submit" className="button"> <span>Submit</span>
                        </button>
                    </div>
                </form>
          <h1 className='error'>{error}</h1>
          </div>
          </div>
    )
}

export default SignUp
