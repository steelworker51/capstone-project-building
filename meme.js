if (window.location.pathname.includes("fitness-meme.html")) {
    console.log("This is the Fitness-Meme page!");

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
            canvas.width = img.width;
            canvas.height = img.height;
    
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
}