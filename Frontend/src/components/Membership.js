// Membership.js
import React from 'react';

// Sample data for membership plans
const membershipPlans = [
    {
        type: '1 hour session',
        price: '$14',
        description: 'You can access his/her mentorship for an hour.',
    },
];

const Membership = () => {
    // Define styles as objects
    const styles = {
        container: {
            display: 'flex',

            justifyContent: 'space-around',
            padding: '20px',
            backgroundColor: '#f0f8ff', // Light color background
        },
        card: {
            width: '300px',
            height: '40vh',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#ffffff',
            textAlign: 'center',
            padding: '20px',
            transition: 'transform 0.3s ease',
        },
        title: {
            fontSize: '24px',
            color: '#00796b',
            height: '20%',
        },
        price: {
            fontSize: '20px',
            color: '#333',
            margin: '10px 0',
        },
        description: {
            fontSize: '16px',
            color: '#555',
            marginBottom: '20px',
        },
        button: {
            padding: '10px 15px',
            backgroundColor: '#00796b', // Teal
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '100%',
        },
        buttonHover: {
            backgroundColor: '#004d40', // Darker teal
        },
    };

    return (
        <div style={styles.container}>
            {membershipPlans.map((plan, index) => (
                <div key={index} style={styles.card}>
                    <h2 style={styles.title}>{plan.type} Membership</h2>
                    <p style={styles.price}>{plan.price}</p>
                    <p style={styles.description}>{plan.description}</p>
                    <button
                        style={styles.button}
                        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
                        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
                    >
                        Sign Up
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Membership;