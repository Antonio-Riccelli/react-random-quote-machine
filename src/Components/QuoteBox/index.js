import React from 'react';

export default function QuoteBox({children, onClick}) {
    return (
        <section id="quote-box">
            {children}
            <div id="interactive">
            <button id="new-quote" onClick={onClick}>&gt;</button>
            <a href="" id="tweet-quote">Tweet it!</a>
            </div>
        </section>
    )
}