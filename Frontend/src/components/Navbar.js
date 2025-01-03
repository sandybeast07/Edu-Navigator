import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ props }) => {

    const navigate = useNavigate();
    const handleClick = (path) => {
        navigate(path)
    }


    return (
        <nav style={styles.navbar}>
            <h1 style={styles.title}>My App</h1>
            <ul style={styles.navList}>
                <li style={styles.navItem}>
                    <button onClick={() => { handleClick('/'); }} style={styles.button}> Home </button>
                </li>
                <li style={styles.navItem}>
                    <button onClick={() => handleClick('/foreignPlans')} style={styles.button}>Foreign Plans</button>
                </li>
                <li style={styles.navItem}>
                    <button onClick={() => handleClick('/membership')} style={styles.button}>Education Plans</button>
                </li>
                <li style={styles.navItem}>
                    <button onClick={() => handleClick('/mentors')} style={styles.button}>Our Mentors</button>
                </li>

                <li style={styles.navItem}>
                    <button onClick={() => handleClick('/login')} style={styles.button}>Login</button>
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
        padding: '10px 20px',
        margin: '10px',
        backgroundColor: '#ADD8E6',
        borderRadius: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    title: {
        margin: 0,
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