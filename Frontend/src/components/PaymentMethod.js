import React, { useState } from 'react';
import axios from 'axios';

const PaymentMethod = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        email: '',
        phone: '',
        paymentMethod: '',
    });
    const [payment, setPayment] = useState();
    const [isPopupVisible, setIsPopupVisible] = useState(false);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/items/', formData);
            console.log('Item saved:', response.data);
        } catch (error) {
            console.error('error saving item', error)
        }

    };



    const viewPopup = () => {
        setIsPopupVisible(true)
        setPayment(formData.paymentMethod)
    }


    const hidePopup = () => {
        setIsPopupVisible(false);
    };

    const paymentDone = () => {
        alert('Your Payment is Done');
        hidePopup();

    }

    const styles = {
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
        container: {
            width: '400px',
            margin: 'auto',
            padding: '20px',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        },
        heading: {
            textAlign: 'center',
            color: '#333',
        },
        label: {
            display: 'block',
            margin: '10px 0 5px',
            color: '#555',
        },
        input: {
            width: '90%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginBottom: '15px',
        },
        select: {
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginBottom: '15px',
        },
        button: {
            width: '100%',
            padding: '10px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
        },
        buttonHover: {
            backgroundColor: '#45a049',
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
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            textAlign: 'center',
        },
    };

    const [amount, setAmount] = useState('');
    const [status, setStatus] = useState('');




    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Payment Form</h2>
            <form onSubmit={handleSubmit}>
                <label style={styles.label}>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </label>
                <label style={styles.label}>
                    Address:
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </label>
                <label style={styles.label}>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required style={styles.input} />
                </label>
                <label style={styles.label}>
                    Phone Number:
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required style={styles.input} />
                </label>
                <label style={styles.label}>
                    Payment Method:
                    <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required style={styles.select} >
                        <option value="">Select a payment method</option>
                        <option value="esewa">eSewa</option>
                        <option value="khalti">Khalti</option>
                        <option value="fonepay">Fonepay</option>
                    </select>
                </label>
                <button type="submit" style={styles.button} onClick={viewPopup}>
                    Submit Payment
                </button>
            </form>

            {isPopupVisible && (
                <div style={styles.popStyles} className='popup-overlay' onSubmit={handleSubmit}>

                    <div style={styles.popupContentStyles} >
                        <h1>{payment.toUpperCase()}</h1>
                        <input type="text" placeholder='Enter your payment id ' style={styles.input} required />
                        <input type="password" style={styles.input} placeholder='Password' required />
                        <button type='submit' style={styles.sidebarButton} onClick={paymentDone}>Book Now</button>
                    </div>
                </div >
            )
            }
        </div >
    );
};

export default PaymentMethod;