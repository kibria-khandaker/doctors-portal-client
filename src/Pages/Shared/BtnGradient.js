import React from 'react';

const BtnGradient = ({ children }) => {
    return (
        <button className="btn text-base bg-gradient-to-r from-secondary to-primary border-0 text-white ">
            {children}
        </button>
    );
};

export default BtnGradient;