const quotes=[
    {
        quote:"That which does not kill us makes us stronger",
        author:"Friedrich Wilhelm Nietzsche"
    },
    {
        quote:"Eureka",
        author:"Archimedes"
    },
    {
        quote:"Magic is believing in yourself, if you can do that, you can make anything happen",
        author:"Johann Wolfgang von Goethe"
    },
    {
        quote:"When you've finished getting yourself ready in the morning, you must go get the planet ready.",
        author:"Antoine de Saint-Exupery"
    },
    {
        quote:"A long life may not be good enough, but a good life is long enough.",
        author:"Benjamin Franklin"
    },
    {
        quote:"Life is either a daring adventure or nothing.",
        author:"Helen Keller"
    },
    {
        quote:"Life is a tale told by an idiot -- full of sound and fury, signifying nothing.",
        author:"William Shakespeare"
    },
    {
        quote:"Age is foolish and forgetful when it underestimates youth.",
        author:"J.K.Rowling"
    },
    {
        quote:"Life is like riding a bicycle. To keep your balance you must keep moving.",
        author:"Albert Einstein"
    }
]
const quote=document.querySelector(".quotes span:first-child");
const author=document.querySelector(".quotes span:last-child");


const randomQuotes=quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText=randomQuotes.quote;
author.innerText=randomQuotes.author;