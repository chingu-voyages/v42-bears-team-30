import React,{useState} from 'react'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        // Perform authentication here using the email and password stored in state
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                    <input
                    className='form-control'
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    autoComplete='off'
                    />
                    <input
                    className='form-control'
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    autoComplete='off'
                    />
                    <button className='btn-login' type="submit">Log In</button>
                    
                </form>
        </>
    )
}

export default Login