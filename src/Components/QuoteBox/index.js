import React from 'react';
import './index.css'

export default function QuoteBox({children, onClick, text, author, book}) {
    return (
        <section id="quote-box">
            {children}
            <div id="interactive">
            <button id="new-quote" onClick={onClick}>&gt;</button>
            <a href={`https://twitter.com/intent/tweet?text=${text} - ${author} - from "${book}".`} id="tweet-quote">Tweet it!</a>
            </div>
        </section>
    )
}
