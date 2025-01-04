import React from 'react';
import { useNavigate } from 'react-router-dom';

const ForeignPlans = () => {
    const navigate = useNavigate();

    const redirect = (page) => {
        navigate(page);
    };


    //Country Details
    const countryInfo = [
        {
            title: 'Canada',
            description: 'Explore the beauty of Canada.',
            page: '/canada'
        },
        {
            title: 'Australia',
            description: 'Discover the wonders of Australia.',
            page: '/australia'
        },
        {
            title: 'USA',
            description: 'Experience the diversity of the USA.',
            page: '/usa'
        },
        {
            title: 'New Zealand',
            description: 'Enjoy the landscapes of New Zealand.',
            page: '/newzealand'
        },
        {
            title: 'Japan',
            description: 'Immerse yourself in Japanese culture.',
            page: '/japan'
        },
        {
            title: 'Korea',
            description: 'Experience the vibrant life in Korea.',
            page: '/korea'
        },
    ];

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            backgroundColor: '#f0f8ff',
        },
        section: {
            width: '25%',
            padding: '15px',
            margin: '10px 20px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#e0f7fa',
        },
        title: {
            fontSize: '24px',
            color: '#00796b',
        },
        description: {
            fontSize: '16px',
            color: '#555',
        },
        button: {
            marginTop: '10px',
            padding: '10px 15px',
            backgroundColor: '#00796b',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        buttonHover: {
            backgroundColor: '#004d40',
        },
        mainContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',

        }
    };




    return (
        <div style={styles.container}>
            <h1>Foreign Plans</h1>


            <div style={styles.mainContainer}>

                {
                    countryInfo.map((plan, index) =>
                        <div key={index} style={styles.section}>
                            <h2 style={styles.title}>{plan.title}</h2>
                            <p style={styles.description}>{plan.description}</p>
                            <button
                                style={styles.button}
                                onClick={() => redirect(plan.page)}
                                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
                                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
                            >
                                Learn More
                            </button>
                        </div>
                    )}


            </div>


        </div>
    );
};

export default ForeignPlans;