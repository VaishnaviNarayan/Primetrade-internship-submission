import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { FaSearch, FaBell, FaFilter, FaShareAlt, FaEllipsisH, FaWallet, FaArrowUp, FaArrowDown } from 'react-icons/fa';

// --- MOCK DATA ---
const analyticsData = [
    { name: 'Q1', revenue: 4000, target: 2400 },
    { name: 'Q2', revenue: 3000, target: 1398 },
    { name: 'Q3', revenue: 9000, target: 9800 },
    { name: 'Q4', revenue: 2780, target: 3908 },
    { name: 'Q5', revenue: 1890, target: 4800 },
    { name: 'Q6', revenue: 2390, target: 3800 },
];

const countryData = [
    { name: 'USA', value: 85, color: '#8b5cf6' },
    { name: 'Japan', value: 70, color: '#3b82f6' },
    { name: 'Indonesia', value: 45, color: '#ec4899' },
    { name: 'Korea', value: 38, color: '#f97316' },
];

const transactions = [
    { name: 'TSLA', desc: 'Tesla, Inc.', amount: '$30,021.23', date: 'Dec 13, 2023', status: 'Processing' },
    { name: 'MTCH', desc: 'Match Group', amount: '$10,045.00', date: 'Dec 13, 2023', status: 'Success' },
    { name: 'DOGG', desc: 'Datadog Inc', amount: '$40,132.16', date: 'Dec 13, 2023', status: 'Success' },
    { name: 'ARKK', desc: 'Ark Genomic', amount: '$22,665.12', date: 'Dec 28, 2023', status: 'Declined' },
];

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (!loggedInUser) navigate('/');
        setUser(JSON.parse(loggedInUser));
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#0b0e14', fontFamily: "'Outfit', sans-serif" }}>
            {/* Sidebar - Fixed Width */}
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={handleLogout} user={user} />

            {/* Main Content Area - Responsive Margin for Sidebar */}
            <div style={{
                marginLeft: '260px',
                flex: 1,
                padding: '30px',
                color: 'white',
                boxSizing: 'border-box',
                width: 'calc(100% - 260px)' // Ensure it fits perfectly next to sidebar
            }}>

                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                    <h1 style={{ margin: 0, textTransform: 'capitalize', fontSize: '28px' }}>{activeTab}</h1>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <div style={{ background: '#1f2937', padding: '10px 15px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '10px', width: '250px' }}>
                            <FaSearch color="#9ca3af" />
                            <input type="text" placeholder="Search..." style={{ background: 'transparent', border: 'none', color: 'white', outline: 'none', width: '100%' }} />
                        </div>
                        <div style={{ background: '#1f2937', padding: '10px', borderRadius: '50%', cursor: 'pointer' }}><FaBell /></div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#1f2937', padding: '6px 15px', borderRadius: '30px' }}>
                            <div style={{ width: '28px', height: '28px', background: '#8b5cf6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>{user?.name?.charAt(0).toUpperCase() || 'U'}</div>
                            <span style={{ fontSize: '14px', fontWeight: '500' }}>{user?.name || 'User'}</span>
                        </div>
                    </div>
                </div>

                {/* Dynamic Content Switching */}
                {activeTab === 'dashboard' && <DashboardContent />}
                {activeTab !== 'dashboard' && (
                    <div style={{
                        height: '60vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        color: '#6b7280',
                        border: '2px dashed #2d3748',
                        borderRadius: '20px'
                    }}>
                        <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Module</h2>
                        <p>This section is currently under development.</p>
                    </div>
                )}

            </div>
        </div>
    );
};

// --- SUB-COMPONENTS for Clean Code ---

const DashboardContent = () => (
    <>
        {/* Filters Row */}
        <div style={{ display: 'flex', gap: '30px', borderBottom: '1px solid #2d3748', paddingBottom: '15px', marginBottom: '30px', fontSize: '15px' }}>
            <span style={{ color: 'white', borderBottom: '2px solid #8b5cf6', paddingBottom: '15px', cursor: 'pointer', fontWeight: '500' }}>Overview</span>
            <span style={{ color: '#9ca3af', cursor: 'pointer' }}>Notifications</span>
            <span style={{ color: '#9ca3af', cursor: 'pointer' }}>Trade History</span>
        </div>

        {/* KPI Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '30px' }}>
            <div style={{ background: 'linear-gradient(135deg, #8b5cf6, #c026d3)', borderRadius: '20px', padding: '25px', position: 'relative', boxShadow: '0 10px 30px -10px rgba(139, 92, 246, 0.5)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                    <div style={{ background: 'rgba(255,255,255,0.2)', padding: '10px', borderRadius: '10px' }}><FaWallet /></div>
                    <FaEllipsisH />
                </div>
                <p style={{ margin: 0, opacity: 0.9, fontSize: '14px' }}>Total Income</p>
                <h2 style={{ margin: '5px 0', fontSize: '32px' }}>$348,261</h2>
                <span style={{ background: 'rgba(255,255,255,0.2)', padding: '4px 10px', borderRadius: '20px', fontSize: '12px' }}>+12.95%</span>
            </div>
            <Card title="Profit" value="$15,708.98" change="-8.12%" isDown />
            <Card title="Total Revenue" value="7,415.644" change="+5.18%" />
            <Card title="Total Conversion" value="10.87%" change="+25.45%" />
        </div>

        {/* Charts Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px', marginBottom: '30px' }}>
            <div style={{ background: '#111827', border: '1px solid #1f2937', padding: '25px', borderRadius: '20px' }}>
                <h3 style={{ marginTop: 0 }}>Analytics</h3>
                <ResponsiveContainer width="100%" height={250}>
                    <AreaChart data={analyticsData}>
                        <defs>
                            <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <Tooltip contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', borderRadius: '10px' }} />
                        <Area type="monotone" dataKey="revenue" stroke="#8b5cf6" strokeWidth={3} fillUrl="url(#colorRev)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <div style={{ background: '#111827', border: '1px solid #1f2937', padding: '25px', borderRadius: '20px' }}>
                <h3 style={{ marginTop: 0 }}>Session by Country</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '30px' }}>
                    {countryData.map((c, i) => (
                        <div key={i}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '13px' }}>
                                <span>{c.name}</span>
                                <span>{c.value}%</span>
                            </div>
                            <div style={{ width: '100%', height: '8px', background: '#374151', borderRadius: '4px', overflow: 'hidden' }}>
                                <div style={{ width: `${c.value}%`, height: '100%', background: c.color }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Transactions */}
        <div style={{ background: '#111827', border: '1px solid #1f2937', padding: '25px', borderRadius: '20px' }}>
            <h3 style={{ marginTop: 0 }}>Transaction History</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                <thead>
                    <tr style={{ color: '#9ca3af', borderBottom: '1px solid #1f2937', textAlign: 'left' }}>
                        <th style={{ paddingBottom: '15px' }}>Product Name</th>
                        <th style={{ paddingBottom: '15px' }}>Order Amount</th>
                        <th style={{ paddingBottom: '15px' }}>Date</th>
                        <th style={{ paddingBottom: '15px' }}>Status</th>
                        <th style={{ paddingBottom: '15px' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((t, i) => (
                        <tr key={i} style={{ borderBottom: i !== transactions.length - 1 ? '1px solid #1f2937' : 'none' }}>
                            <td style={{ padding: '15px 0' }}>
                                <div style={{ fontWeight: '500' }}>{t.name}</div>
                                <div style={{ fontSize: '12px', color: '#6b7280' }}>{t.desc}</div>
                            </td>
                            <td>{t.amount}</td>
                            <td style={{ color: '#9ca3af' }}>{t.date}</td>
                            <td>
                                <span style={{
                                    color: t.status === 'Success' ? '#10b981' : t.status === 'Declined' ? '#ef4444' : '#fbbf24',
                                    fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px'
                                }}>● {t.status}</span>
                            </td>
                            <td style={{ textAlign: 'right' }}>
                                <button style={{ background: 'transparent', border: '1px solid #374151', color: 'white', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer' }}>More</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
);

const Card = ({ title, value, change, isDown }) => (
    <div style={{ background: '#111827', border: '1px solid #1f2937', padding: '25px', borderRadius: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <div style={{ background: '#1f2937', padding: '10px', borderRadius: '10px' }}><FaWallet color="#8b5cf6" /></div>
            <FaEllipsisH color="#6b7280" />
        </div>
        <p style={{ margin: 0, opacity: 0.7, fontSize: '14px' }}>{title}</p>
        <h2 style={{ margin: '5px 0', fontSize: '24px' }}>{value}</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: isDown ? '#ef4444' : '#10b981' }}>
            {isDown ? <FaArrowDown /> : <FaArrowUp />} {change}
            <span style={{ color: '#6b7280' }}> vs last month</span>
        </div>
    </div>
);

export default Dashboard;
