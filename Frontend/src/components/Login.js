import React, { useState } from 'react';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            console.log('Logging in with:', formData.email, formData.password);
        } else {
            console.log('Signing up with:', formData.name, formData.email, formData.password);
        }
    };

    const styles = {
        container: {
            width: '300px',
            margin: '0 auto',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            backgroundColor: '#ffffff',
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
            width: '93%',
            padding: '10px',
            marginBottom: '15px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '16px',
        },
        button: {
            width: '100%',
            padding: '10px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
        },
        toggleText: {
            textAlign: 'center',
            marginTop: '10px',
            color: '#555',
        },
        toggleButton: {
            background: 'none',
            border: 'none',
            color: '#007bff',
            cursor: 'pointer',
            textDecoration: 'underline',
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>{isLogin ? 'Login' : 'Sign Up'}</h2>
            <form onSubmit={handleSubmit}>
                {!isLogin && (
                    <div>
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
                    </div>
                )}
                <div>
                    <label style={styles.label}>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={styles.input}
                        />
                    </label>
                </div>
                <div>
                    <label style={styles.label}>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            style={styles.input}
                        />
                    </label>
                </div>
                <button type="submit" style={styles.button}>
                    {isLogin ? 'Login' : 'Sign Up'}
                </button>
            </form>
            <p style={styles.toggleText}>
                {isLogin ? "Don't have an account?" : 'Already have an account?'}
                <button onClick={() => setIsLogin(!isLogin)} style={styles.toggleButton}>
                    {isLogin ? 'Sign Up' : 'Login'}
                </button>
            </p>
        </div>
    );
};

export default Login;