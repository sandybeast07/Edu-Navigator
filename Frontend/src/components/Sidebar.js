import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
    const styles = {
        popupOverlay: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "1000",
        },
        sidebarStyle: {
            position: 'fixed',
            top: 0,
            right: isOpen ? 0 : '-250px',
            width: '400px',
            height: '100%',
            backgroundColor: '#f0f0f0',
            color: '#333',
            transition: 'left 0.3s ease',
            padding: '20px',
            boxShadow: '2px 0 5px rgba(0,0,0,0.5)',
            zIndex: 1000,
        },
        overlayStyle: {
            position: 'fixed',
            top: 0,
            right: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: isOpen ? 'block' : 'none',
            zIndex: 999
        },

        sideList: {
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            margin: 0,
            padding: 0,
        },
        sideItem: {
            margin: '10px',
        },

        button: {
            background: 'none',
            border: 'none',
            color: '#007bff',
            cursor: 'pointer',
            fontSize: '16px',
        },
    }

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('popup-overlay')) {
            onClose();
        }
    };

    const navigate = useNavigate();
    const handleClick = (path) => {
        navigate(path)
    }



    return (

        <div className='popup-overlay' style={styles.popupOverlay} onClick={handleOverlayClick}>

            <div style={styles.sidebarStyle}>
                <h2>Sidebar</h2>
                <ul style={styles.sideList}>
                    <li style={styles.sideItem}>
                        <button onClick={() => { handleClick('/'); }} style={styles.button}> My profile </button>
                    </li>
                    <li style={styles.sideItem}>
                        <button onClick={() => handleClick('/test')} style={styles.button}>Psychometric Test</button>
                    </li>
                    <li style={styles.sideItem}>
                        <button onClick={() => handleClick('/membership')} style={styles.button}>Education Plans</button>
                    </li>
                    <li style={styles.sideItem}>
                        <button onClick={() => handleClick('/mentors')} style={styles.button}>Log out</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;