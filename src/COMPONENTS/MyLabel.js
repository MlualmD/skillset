import React from 'react';

const MyLabel = (props) => {
    const {attributes={   placeholder: "Please Type My ID"}}=props;

    return (
        <div>
            <label> my label</label>
        </div>
    );
};

export default MyLabel;