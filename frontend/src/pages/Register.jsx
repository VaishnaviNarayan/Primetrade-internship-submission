import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope, FaUserTag } from 'react-icons/fa';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user'); // Default to user
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5001/api/users', {
                name,
                email,
                password,
                role, // Sending the selected role
            });

            // Auto-login after register
            localStorage.setItem('user', JSON.stringify(res.data));
            alert('Registration Successful! Redirecting...');
            navigate('/dashboard');
        } catch (error) {
            alert('Registration Failed: ' + (error.response?.data?.message || 'Try again'));
        }
    };

    return (
        <div className="login-page">
            <div className="glass-container login-card">
                <h2 style={{ marginBottom: '30px', fontWeight: 'lighter' }}>REGISTER</h2>

                <form onSubmit={handleRegister}>
                    {/* Name */}
                    <div className="login-input-group">
                        <FaUser className="input-icon" />
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="login-input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="login-input-group">
                        <FaEnvelope className="input-icon" />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="login-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Password */}
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

                    {/* Role Selection */}
                    <div className="login-input-group">
                        <FaUserTag className="input-icon" />
                        <select
                            className="login-input"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            style={{ color: role === '' ? '#aaa' : 'white', cursor: 'pointer' }}
                        >
                            <option value="user" style={{ color: 'black' }}>User (Standard)</option>
                            <option value="admin" style={{ color: 'black' }}>Admin (Full Access)</option>
                        </select>
                    </div>

                    <button type="submit" className="login-btn">
                        Create Account
                    </button>
                </form>

                <p style={{ marginTop: '20px', fontSize: '14px', opacity: 0.8 }}>
                    Already have an account? <Link to="/" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
