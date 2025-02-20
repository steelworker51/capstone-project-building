/*if (window.location.pathname.includes("fitness-meme.html")) {
    console.log("This is the Fitness-Meme page!");
}

document.getElementById("downloadBtn").style.display = "none";

function generateMeme() {
    let fileInput = document.getElementById("imageInput");
    let topText = document.getElementById("topText").value.toUpperCase();
    let bottomText = document.getElementById("bottomText").value.toUpperCase();
    let canvas = document.getElementById("memeCanvas");
    let ctx = canvas.getContext("2d");

    if (fileInput.files.length === 0) {
        alert("Please upload an image first!");
        return;
    }

    let img = new Image();
    img.src = URL.createObjectURL(fileInput.files[0]);

    img.onload = function () {
        // Set canvas size to match the image
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw image on canvas
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Define text styles
        ctx.font = `${canvas.width / 10}px Impact`;
        ctx.fillStyle = "white";
        ctx.strokeStyle = "black";
        ctx.lineWidth = canvas.width / 100;
        ctx.textAlign = "center";

        // Draw top text
        ctx.fillText(topText, canvas.width / 2, canvas.height / 8);
        ctx.strokeText(topText, canvas.width / 2, canvas.height / 8);

        // Draw bottom text
        ctx.fillText(bottomText, canvas.width / 2, canvas.height - canvas.height / 10);
        ctx.strokeText(bottomText, canvas.width / 2, canvas.height - canvas.height / 10);

        // Show download button
        document.getElementById("downloadBtn").style.display = "block";
    };
}

// Download the generated meme
document.getElementById("downloadBtn").addEventListener("click", function () {
    let canvas = document.getElementById("memeCanvas");
    let link = document.createElement("a");
    link.download = "meme.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
});

if (window.location.pathname.includes("signup.html")) {
    console.log("This is the Fitness Signup Page page!");
}
        function saveToLocalStorage(event) {
            event.preventDefault();
            const fullname = document.getElementById('fullname').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            localStorage.setItem('fullname', fullname);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            
            alert('Signup details saved!');
        }

if (window.location.pathname.includes("motivate.html")) {
            console.log("This is the Motivational-Quotes page!");
        }

/*const quotes = [
    {
        quote: "Today is your opportunity to build the tomorrow you want.",
        author: "Ken Poirot"
    },
    {
        quote: "When you have a dream, you've got to grab it and never let go.",
        author: "Carol Burnett"
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "You define your own life. Don't let other people write your script.",
        author: "Oprah Winfrey"
    },
    {
        quote: "Someone once told me to never dream. I said NEVER SAY NEVER",
        author: "Justin Bieber"
    }
] */

// Array of quotes
const quotes = [
    "Today is your opportunity to build the tomorrow you want. - Ken Poirot",
    "The future depends on what you do today. - Mahatma Gandhi",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The only way to do great work is to love what you do. - Steve Jobs"
];

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to update the quote in the DOM
function updateQuote() {
    const quoteElement = document.getElementById("quoteText"); // Ensure the h1 or h2 has this id
    quoteElement.textContent = getRandomQuote();
}

// Add event listener to #box to change the quote on click
const box = document.getElementById("box");
box.addEventListener("click", updateQuote);

// Call updateQuote once to show an initial quote
updateQuote();