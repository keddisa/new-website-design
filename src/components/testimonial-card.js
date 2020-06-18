import React from 'react';

const TestimonialCard = ({headshotImage, name, title, content}) => {
    return(<div className="testimonial-card">
            <img src={headshotImage} alt="testimonial-image." className="testimonial-headshot"/>
            <div className="text-content">
                {content}
            </div>
            <div className="text-content testimonial-name">{name}</div>
            <div className="text-content testimonial-title">{title}</div>
        </div>)
}

export default TestimonialCard;