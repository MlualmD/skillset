import React from 'react';

const MyTab = (props) => {
    const {title,onClick}=props

    
    return (
        <button onClick={onClick}>
            {title}
        </button>
    );
};

export default MyTab;