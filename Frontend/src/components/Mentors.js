import React, { useState } from 'react';
import mentor from './images/mentor.JPG'
import { useNavigate } from 'react-router-dom';

const mentorsData = {
    IT: [
        {
            name: 'Ram',
            qualification: 'PhD in Computer Science',
            photo: mentor,
            price: '$10',
        },
        {
            name: 'Hari',
            qualification: 'MSc in Data Science',
            photo: mentor,
            price: '$100',
        },
        {
            name: 'Sita',
            qualification: 'MSc in Software Engineering',
            photo: mentor,
            price: '$100',
        },
    ],
    Marketing: [
        {
            name: 'Gita',
            qualification: 'MBA in Marketing',
            photo: mentor,
            price: '$100',
        },
        {
            name: 'Krishna',
            qualification: 'MSc in Digital Marketing',
            photo: mentor,
            price: '$100',
        },
        {
            name: 'Radha',
            qualification: 'BSc in Marketing',
            photo: mentor,
            price: '$100',
        },
    ],
    Design: [
        {
            name: 'Balaram',
            qualification: 'MFA in Graphic Design',
            photo: mentor,
            price: '$100',
        },
        {
            name: 'Suvam',
            qualification: 'BFA in Visual Arts',
            photo: mentor,
            price: '$100',
        },
        {
            name: 'Sandybeast',
            qualification: 'MSc in UX/UI Design',
            photo: mentor,
            price: '$100',
        },
    ],
};

const styles = {
    container: {
        display: 'flex',
        height: '100vh',
        backgroundColor: '#f0f8ff',
    },
    sidebar: {
        width: '200px',
        padding: '20px',
        backgroundColor: '#e0f7fa',
        boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
    },
    main: {
        flex: 1,
        padding: '20px',
    },
    mentorGrid: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
    },
    mentorCard: {
        width: '30%',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#ffffff',
        textAlign: 'center',
        padding: '10px',
    },
    photo: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        marginBottom: '10px',
    },
    sidebarButton: {
        display: 'block',
        margin: '10px 0',
        padding: '10px',
        width: '100%',
        backgroundColor: '#00796b',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    popStyles: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    popupContentStyles: {
        backgroundColor: 'white',
        width: '40%',
        height: '30%',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
    },
};

const Mentors = () => {
    const [selectCategory, setSelectCategory] = useState('IT');
    const handleCategoryChange = (category) => {
        setSelectCategory(category);
    };

    const navigation = useNavigate();
    const paymentNavigation = (path) => {
        navigation(path);
    }
    

    const [price, setPrice] = useState('0');
    const direct = ({ mentor }) => {
        setPrice(mentor.price);
        setIsPopupVisible(true)

    }

    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const hidePopup = () => {
        setIsPopupVisible(false);
    };
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('popup-overlay')) {
            hidePopup();
        }
    };



    return (
        <div style={styles.container}>
            <div style={styles.sidebar}>
                <h2>Mentor Categories</h2>
                <button style={styles.sidebarButton} onClick={() => handleCategoryChange('IT')}>Information Technology</button>
                <button style={styles.sidebarButton} onClick={() => handleCategoryChange('Marketing')}>Marketing</button>
                <button style={styles.sidebarButton} onClick={() => handleCategoryChange('Design')}>Design</button>
            </div>
            <div style={styles.main}>
                <h1>{selectCategory} Mentors</h1>
                <div style={styles.mentorGrid}>
                    {mentorsData[selectCategory].map((mentor, index) => (
                        <div key={index} style={styles.mentorCard}>
                            <img src={mentor.photo} alt={mentor.name} style={styles.photo} />
                            <h3>{mentor.name}</h3>
                            <p>{mentor.qualification}</p>
                            <button onClick={() => direct({ mentor })} style={styles.sidebarButton}>Book a Call</button>
                        </div>
                    ))}

                </div>
            </div>

            {isPopupVisible && (
                <div style={styles.popStyles} className='popup-overlay' onClick={handleOverlayClick}>

                    <div style={styles.popupContentStyles}>
                        <h2>1 hour Session</h2>
                        <h2>Price</h2>
                        <p>{price}</p>

                        <button style={styles.sidebarButton} onClick={() => { paymentNavigation('/paymentmethod') }}>Book Now</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Mentors;