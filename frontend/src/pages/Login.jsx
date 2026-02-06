import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5001/api/users/login', {
                email,
                password,
            });
            // Save token to local storage
            localStorage.setItem('user', JSON.stringify(res.data));
            alert('Login Success!');
            navigate('/dashboard');
        } catch (error) {
            alert('Login Failed: ' + (error.response?.data?.message || error.message));
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <br /><br />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br /><br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
