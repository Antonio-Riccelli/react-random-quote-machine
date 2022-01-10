// import quotes from '../assets/quoteArchive.mjs';
const quotes = [
    {
        text: 'Reverence awakens in the soul a sympathetic power through which we attract qualities in the beings around us, which would otherwise remain concealed.',
        book: 'Knowledge of the Higher Worlds',
        author: "Rudolf Steiner"
},
    {
        text: "Esoteric science is the science of what takes place esoterically, in the sense that it is perceived not outside in nature but where one's soul turns when it directs its inner being toward the spirit. Esoteric science is the opposite and counterpart of natural science",
        book: 'Occult Science - An Outline',
        author: "Rudolf Steiner"
    },
    {
        text: 'Evolution is not a progression to ever greater and greater differentiation, but ... is first an ascent to a higher point, and after having reached this point is then a descent to more and more simple forms.',
        book: 'Michael Lectures, IX',
        author: "Rudolf Steiner"
    },
    {
        text: 'Destiny is the result of two factors, which grow together in the life of a human being. One streams outwards from the inner depths of the soul; the other comes to meet man from the world around him.',
        book: 'The Course of My Life',
        author: "Rudolf Steiner"
    },
    {
        text: 'As above, so below, as within, so without, as the universe, so the soul…',
        book: 'Corpus Hermeticum',
        author: 'Hermes Trismegistus'
    },
    {
        text: 'No eyes will raise to heaven. The pure will be thought insane and the impure will be honoured as wise. The madman will be believed brave, and the wicked esteemed as good.',
        book: 'Corpus Hermeticum',
        author: 'Hermes Trismegistus'
    },
    {
        text: 'Evolution is not finished; reason is not the last word nor the reasoning animal the supreme figure of Nature. As man emerged out of the animal, so out of man the superman emerges.',
        book: 'Thoughts and Aphorisms',
        author: 'Sri Aurobindo'
    },
    {
        text: 'Seek the seeker',
        book: 'Abide as the Self',
        author: 'Ramana Maharshi'
    },
    {
        text: 'Reason in man is rather like God in the world',
        book: 'Opuscule II, De Regno',
        author: 'Saint Thomas Aquinas'
    },
    {
        text: "The eye with which I see God is the same with which God sees me. My eye and God's eye is one eye, and one sight, and one knowledge, and one love.",
        book: 'Sermon IV: True Hearing',
        author: 'Meister Eckhart'
    },
    {
        text: 'Of the inhabitants then of worlds other than our own we can know still less having no standards by which to appraise them.',
        book: 'De Docta Ignorantia',
        author: 'Nicholas Of Cusa'
    },
]

const quoteBox = document.querySelector("#quote-box");
const text = document.querySelector("#text");
const author = document.querySelector("#author");
const book = document.querySelector("#book");
const button = document.querySelector("#new-quote");
const tweet = document.querySelector("#tweet-quote");

const generateRandomInteger = () => {
    let randomInteger = Math.floor(Math.random() * quotes.length);
    return randomInteger;
}

const retrieveQuote = () => {
    let randomInteger = generateRandomInteger();
    let retrievedQuote = quotes[randomInteger];
    return retrievedQuote;
}

function renderQuote() {
    let quote = retrieveQuote();
    console.log("This is the quote", quote)
    text.innerHTML = quote.text;
    author.innerHTML = quote.author;
    book.innerHTML = quote.book;
}

renderQuote();
button.addEventListener("click", renderQuote);



