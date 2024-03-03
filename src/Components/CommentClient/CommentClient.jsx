import React from 'react';
import './CommentClient.css';

const CommentClient = ({comment, name}) => {
    return (
        <section className='commentClient'>
            <p className='commentClient-message'>«{comment}»</p>
            <h2 className='commentClient-name'>{name}</h2>
        </section>
    );
};

export default CommentClient;