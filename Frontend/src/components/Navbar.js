import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './images/logo.png'
import { useState } from 'react';
import Sidebar from './Sidebar';

const Navbar = () => {

    const navigate = useNavigate();
    const handleClick = (path) => {
        navigate(path)
    }

    const img = {
        height: '70px',
    }


    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    }


    return (
        <nav style={styles.navbar}>
            <button onClick={() => { handleClick('/') }} style={styles.button}>
                <img src={logo} alt="" style={img} />
            </button>
            <ul style={styles.navList}>
                <li style={styles.navItem}>
                    <button onClick={() => { handleClick('/'); }} style={styles.button}> Home </button>
                </li>
                <li style={styles.navItem}>
                    <button onClick={() => handleClick('/foreignPlans')} style={styles.button}>Foreign Plans</button>
                </li>
                <li style={styles.navItem}>
                    <button onClick={() => handleClick('/paymentmethod')} style={styles.button}>Education Plans</button>
                </li>
                <li style={styles.navItem}>
                    <button onClick={() => handleClick('/mentors')} style={styles.button}>Our Mentors</button>
                </li>

                <li style={styles.navItem}>
                    <button onClick={toggleSidebar} style={styles.button}>
                        Profile
                    </button>
                    {isSidebarOpen && <Sidebar onClose={toggleSidebar} />}
                </li>
            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        margin: '10px',
        backgroundColor: '#ADD8E6',
        borderRadius: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    logo: {
        height: '50px',
    },
    navList: {
        listStyle: 'none',
        display: 'flex',
        margin: 0,
        padding: 0,
    },
    navItem: {
        marginLeft: '20px',
    },

    button: {
        background: 'none',
        border: 'none',
        color: '#007bff',
        cursor: 'pointer',
        fontSize: '16px',
    },
};

export default Navbar;