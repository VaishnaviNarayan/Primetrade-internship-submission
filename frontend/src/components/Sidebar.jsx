import {
    FaThLarge,
    FaShoppingBag,
    FaChartPie,
    FaBoxOpen,
    FaUserFriends,
    FaTruck,
    FaCog,
    FaSignOutAlt
} from 'react-icons/fa';

const Sidebar = ({ activeTab, setActiveTab, onLogout, user }) => {
    // Define all available items
    const allMenuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: <FaThLarge />, roles: ['user', 'admin'] },
        { id: 'sales', label: 'Sales', icon: <FaShoppingBag />, roles: ['user', 'admin'] },
        { id: 'analytics', label: 'Analytics', icon: <FaChartPie />, roles: ['admin'] }, // Admin Only
        { id: 'products', label: 'Products', icon: <FaBoxOpen />, roles: ['admin'] },   // Admin Only
        { id: 'visitors', label: 'Visitors', icon: <FaUserFriends />, roles: ['admin'] },
        { id: 'shipment', label: 'Shipment', icon: <FaTruck />, roles: ['user', 'admin'] },
    ];

    // Filter items based on the user's role
    const menuItems = allMenuItems.filter(item =>
        user && item.roles.includes(user.role)
    );

    return (
        <div style={{
            width: '260px',
            height: '100vh',
            backgroundColor: '#111827', // Darker background
            color: '#9ca3af',
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
            boxSizing: 'border-box',
            borderRight: '1px solid #1f2937',
            position: 'fixed', // Keep fixed to stay on left
            left: 0,
            top: 0,
            zIndex: 1000
        }}>
            {/* Brand */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px', paddingLeft: '10px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#8b5cf6' }}></div>
                <h2 style={{ margin: 0, color: 'white', fontSize: '20px', fontFamily: "'Outfit', sans-serif" }}>Apexify</h2>
            </div>

            {/* Menu */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                {menuItems.map((item) => {
                    const isActive = activeTab === item.id;
                    return (
                        <div
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                padding: '12px 16px',
                                borderRadius: '12px',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                backgroundColor: isActive ? '#8b5cf6' : 'transparent',
                                color: isActive ? 'white' : '#9ca3af',
                                fontWeight: isActive ? '600' : '500',
                                boxShadow: isActive ? '0 4px 12px rgba(139, 92, 246, 0.4)' : 'none'
                            }}
                        >
                            <span style={{ fontSize: '18px' }}>{item.icon}</span>
                            <span style={{ fontSize: '15px' }}>{item.label}</span>
                        </div>
                    );
                })}
            </div>

            {/* Bottom Actions */}
            <div style={{ borderTop: '1px solid #1f2937', paddingTop: '20px', marginTop: 'auto' }}>
                <div style={{
                    display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px',
                    color: '#9ca3af', cursor: 'pointer', borderRadius: '12px', marginBottom: '5px'
                }}>
                    <FaCog /> Settings
                </div>
                <div
                    onClick={onLogout}
                    style={{
                        display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px',
                        color: '#ef4444', cursor: 'pointer', borderRadius: '12px'
                    }}
                >
                    <FaSignOutAlt /> Log Out
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
