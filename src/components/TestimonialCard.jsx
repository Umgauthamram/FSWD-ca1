import React from 'react';

const TestimonialCard = ({CustomerName, ReviewText}) => {
    return (
        <div>
            <p>Customername: {CustomerName}</p>
            <p>ReviewText: {ReviewText}</p>
        </div>
    );
};

export default TestimonialCard;