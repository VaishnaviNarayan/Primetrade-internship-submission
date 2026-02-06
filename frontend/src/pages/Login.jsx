import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa'; // Importing Icons

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
            localStorage.setItem('user', JSON.stringify(res.data));
            navigate('/dashboard');
        } catch (error) {
            alert('Login Failed: ' + (error.response?.data?.message || 'Check credentials'));
        }
    };

    return (
        <div className="login-page">
            <div className="glass-container login-card">
                <h2 style={{ marginBottom: '30px', fontWeight: 'lighter' }}>LOGIN</h2>

                <form onSubmit={handleLogin}>
                    <div className="login-input-group">
                        <FaUser className="input-icon" />
                        <input
                            type="email"
                            placeholder="Email"
                            className="login-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="login-input-group">
                        <FaLock className="input-icon" />
                        <input
                            type="password"
                            placeholder="Password"
                            className="login-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div style={{ textAlign: 'left', marginTop: '10px', fontSize: '14px' }}>
                        <label>
                            <input type="checkbox" style={{ marginRight: '5px' }} />
                            Remember Me
                        </label>
                        <span style={{ float: 'right', cursor: 'pointer', opacity: 0.8 }}>Forgot Password?</span>
                    </div>

                    <button type="submit" className="login-btn">
                        Login
                    </button>
                </form>

                <p style={{ marginTop: '20px', fontSize: '14px', opacity: 0.8 }}>
                    Don't have an Account? <strong style={{ cursor: 'pointer' }}>Register</strong>
                </p>
            </div>
        </div>
    );
};

export default Login;
