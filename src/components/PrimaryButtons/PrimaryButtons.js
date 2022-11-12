import React from 'react';

const PrimaryButtons = ({ children }) => {
    return (
        <button className="btn btn-primary h-14 bg-gradient-to-r from-primary to-secondary text-white">{children}</button>

    );
};

export default PrimaryButtons;