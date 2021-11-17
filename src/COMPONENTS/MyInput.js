import React from 'react';

const MyInput = (props) => {
    const {attributes={   placeholder: "Please Type My ID"}}=props;

    return (
        <div>
            <input {...attributes}/>
        </div>
    );
};

export default MyInput;