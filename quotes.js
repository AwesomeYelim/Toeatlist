const quotes = [
    {
        quote : "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.",
        author : "Romans 8:38-39",
    },
    {
        quote : "The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.",
        author : "Lamentations 3:22-23",
    },
    {
        quote : "Greater love has no one than this: to lay down one's life for one's friends.",
        author : "John 15:13",
    },
    {
        quote : "Now to him who is able to do immeasurably more than all we ask or imagine, according to his power that is at work within us.",
        author : "Ephesians 3:20",
    },
    {
        quote : "The LORD is my light and my salvation; whom shall I fear? The LORD is the stronghold of my life; of whom shall I be afraid?",
        author : "Psalm 27:12",
    },
    {
        quote : "There is no fear in love. But perfect love drives out fear, because fear has to do with punishment. The one who fears is not made perfect in love.",
        author : "John 4:18",
    },
    {
        quote : "What, then, shall we say in response to these things? If God is for us, who can be against us?",
        author : "Romans 8:31",
    },
    {
        quote : "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
        author : "Romans 15:13",
    },
    {
        quote : "Be strong, and let your heart take courage, all you who wait for the LORD!",
        author : "Psalm 31:24",
    },
    {
        quote : "Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.",
        author : "Isaiah 41:10",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;