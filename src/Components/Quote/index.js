import React from 'react';
import './index.css'

export default function Quote({text, author, book}) {
    return (
        <div>
        <q id="text">{text}</q>
        <p id="author">{author}</p>
        <p id="book">from: {book}</p>
        </div>
    )
}