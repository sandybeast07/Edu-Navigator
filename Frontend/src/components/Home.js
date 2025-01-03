import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const handleLoginRedirect = () => {
        navigate('/mentors');
    };

    const handleImageClick = (page) => {
        navigate.push(page);
    };


    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px',
            backgroundColor: '#f0f8ff',
            height: '100pc',
        },
        leftSection: {
            flex: 1,
            padding: '20px',
            backgroundColor: '#e0f7fa',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            height: '20%',
        },
        rightSection: {
            flex: 1,
            padding: '20px',
            backgroundColor: '#ffe0b2',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            height: '20%',
        },
        loginButton: {
            padding: '10px 20px',
            backgroundColor: '#00796b',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        loginButtonHover: {
            backgroundColor: '#004d40',
        },
        imageGrid: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
        },
        imageItem: {
            cursor: 'pointer',
            textAlign: 'center',
            transition: 'transform 0.2s',
        },
        imageItemHover: {
            transform: 'scale(1.05)',
        },
        image: {
            width: '150px',
            height: '150px',
            borderRadius: '10px',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.leftSection}>
                <h1>Welcome to Our Website!</h1>
                <p>Explore our amazing features and content.</p>
                <button
                    onClick={handleLoginRedirect}
                    style={styles.loginButton}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.loginButtonHover.backgroundColor)}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.loginButton.backgroundColor)}
                >
                    Meet Our Mentors
                </button>
            </div>
            <div style={styles.rightSection}>
                <h2>Image Templates</h2>
                <div style={styles.imageGrid}>
                    <div
                        style={styles.imageItem}
                        onClick={() => handleImageClick('/template1')}
                    >
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Template 1"
                            style={styles.image}
                        />
                        <p>Template 1</p>
                    </div>
                    <div
                        style={styles.imageItem}
                        onClick={() => handleImageClick('/template2')}
                    >
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Template 2"
                            style={styles.image}
                        />
                        <p>Template 2</p>
                    </div>
                    <div
                        style={styles.imageItem}
                        onClick={() => handleImageClick('/template3')}
                    >
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Template 3"
                            style={styles.image}
                        />
                        <p>Template 3</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;