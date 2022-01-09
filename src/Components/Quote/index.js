import React from 'react';

export default function Quote({text, author, book}) {
    return (
        <div>
        <p id="text">{text}</p>
        <p id="author">{author}</p>
        <p id="book">{book}</p>
        </div>
    )
}