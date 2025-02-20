/*if (window.location.pathname.includes("motivational-quotes.html")) {
    console.log("This is the Motivational-Quotes page!");

    const quotes = [
        "Today is your opportunity to build the tomorrow you want. - Ken Poirot",
        "The future depends on what you do today. - Mahatma Gandhi",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
        "The only way to do great work is to love what you do. - Steve Jobs"
    ];

    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    function updateQuote() {
        const quoteElement = document.getElementById("quoteText");
        quoteElement.textContent = getRandomQuote();
    }

    const box = document.getElementById("box");
    box.addEventListener("click", updateQuote);

    updateQuote();
}*/

if (window.location.pathname.includes("motivate.html")) {
    console.log("This is the Motivational-Quotes page!");

    const quotes = [
        "Today is your opportunity to build the tomorrow you want. - Ken Poirot",
        "The future depends on what you do today. - Mahatma Gandhi",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
        "The only way to do great work is to love what you do. - Steve Jobs"
    ];

    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    function updateQuote() {
        const quoteElement = document.getElementById("quoteText");
        quoteElement.textContent = getRandomQuote();
    }

    const box = document.getElementById("box");
    if (box) {
        box.addEventListener("click", function() {
            console.log("Box clicked!"); // Check if the event is firing
            updateQuote();
        });
    } else {
        console.log("Box element not found!");
    }

    updateQuote();
}