import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (!loggedInUser) {
            navigate('/');
        } else {
            setUser(JSON.parse(loggedInUser));
            fetchProducts();
        }
    }, [navigate]);

    const fetchProducts = async () => {
        try {
            const res = await axios.get('http://localhost:5001/api/products');
            setProducts(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Dashboard</h1>
            {user && <p>Welcome, <b>{user.name}</b> ({user.role})</p>}
            <button onClick={handleLogout}>Logout</button>

            <h2>Products</h2>
            <ul>
                {products.map((p) => (
                    <li key={p._id}>
                        <strong>{p.name}</strong> - ${p.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
