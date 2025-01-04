import React from 'react'

function Canada() {

    const redirect = (page) => {
        window.location.href = page
    };
    const university = [
        {
            title: 'Lambton College',
            location: 'Sarnia, ON',
            site: 'https://www.lambtoncollege.ca/',
        },
        {
            title: 'Lambton College',
            location: 'Sarnia, ON',
            site: 'https://www.lambtoncollege.ca/',
        },
        {
            title: 'Lambton College',
            location: 'Sarnia, ON',
            site: 'https://www.lambtoncollege.ca/',
        },
        {
            title: 'Lambton College',
            location: 'Sarnia, ON',
            site: 'https://www.lambtoncollege.ca/',
        }
    ]



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
            <h1>Canada</h1>


            <div style={styles.mainContainer}>

                {
                    university.map((plan, index) =>
                        <div key={index} style={styles.section}>
                            <h2 style={styles.title}>{plan.title}</h2>
                            <p style={styles.description}>{plan.location}</p>
                            <button
                                style={styles.button}
                                onClick={() => redirect(plan.site)}
                                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
                                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
                            >
                                Learn More
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    )


}

export default Canada
