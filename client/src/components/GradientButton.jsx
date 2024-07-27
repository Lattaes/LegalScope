import React from 'react';
import { Link } from 'react-router-dom';

const GradientButton = ({ text, to }) => {
    const buttonStyle = {
        background: 'linear-gradient(90.35deg, #2563eb 0.36%, #d946ef 201.02%)',
        borderRadius: '10px',
        color: '#F9FAFB',
        padding: '8px 30px',
        fontSize: '16px',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        textDecoration: 'none',
        display: 'inline-block',
    };

    return (
        <Link to={to}>
            <div style={buttonStyle}>{text}</div>
        </Link>
    );
};

export default GradientButton;
