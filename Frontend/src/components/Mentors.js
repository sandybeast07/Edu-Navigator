import React, { useState } from 'react';

// Sample data for mentors
const mentorsData = {
    IT: [
        {
            name: 'Ram',
            qualification: 'PhD in Computer Science',
            photo: 'https://via.placeholder.com/150',
        },
        {
            name: 'Hari',
            qualification: 'MSc in Data Science',
            photo: 'https://via.placeholder.com/150',
        },
        {
            name: 'Sita',
            qualification: 'MSc in Software Engineering',
            photo: 'https://via.placeholder.com/150',
        },
    ],
    Marketing: [
        {
            name: 'Gita',
            qualification: 'MBA in Marketing',
            photo: 'https://via.placeholder.com/150',
        },
        {
            name: 'Krishna',
            qualification: 'MSc in Digital Marketing',
            photo: 'https://via.placeholder.com/150',
        },
        {
            name: 'Radha',
            qualification: 'BSc in Marketing',
            photo: 'https://via.placeholder.com/150',
        },
    ],
    Design: [
        {
            name: 'Balaram',
            qualification: 'MFA in Graphic Design',
            photo: 'https://via.placeholder.com/150',
        },
        {
            name: 'Suvam',
            qualification: 'BFA in Visual Arts',
            photo: 'https://via.placeholder.com/150',
        },
        {
            name: 'Sandybeast',
            qualification: 'MSc in UX/UI Design',
            photo: 'https://via.placeholder.com/150',
        },
    ],
};

const Mentors = () => {
    const [selectCategory, setSelectCategory] = useState('IT');

    const handleCategoryChange = (category) => {
        setSelectCategory(category);
    };

    // Define styles as objects
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
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Mentors;