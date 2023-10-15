// variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"The best way to find yourself is to lose yourself in the service of others."`,
    person: `Mahatma Gandhi`
},{
    quote:`"If you want to oive a happy life, tie it to a goal, not to people or things."`,
    person: `Albert Einstein`
},{
    quote: `"At his best, man is the noblest of all animals; separated from law and justice he is the worst."`,
    person:`Aristole`
},{
    quote: `"Your time is limited, so don't waste it living someone else's life."`,
    person: `Steve Jobs`
},{
    quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn."`,
    person: `Benjamin Fraklin`
},{
    quote: `"It does not matter how slowly you go as long as you do not stop."`,
    person: `Confucius`
},{
    quote:`"Our lives begin to end the day we become silent about things that matter."`,
    person: `Martin Luther King`
},{
    quote: `"Remember that not getting what you want is sometimes a wonderful stroke of luck."`,
    person: `Dalai Lama`
},{
    quote: `"The journey of thousand miles begins with one step."`,
    person: `Lao Tzu`
},];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);
    
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
