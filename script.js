const getNewQuote = async () => {

    var url = "https://type.fit/api/quotes";

    const response = await fetch(url);
    const allQuote = await response.json();

    const randomNumber = Math.floor(Math.random() * allQuote.length);
    const randomQuote = allQuote[randomNumber]

    console.log(randomQuote)

    const quoteTextContainer = document.querySelector(".quote-text-container");
    console.log(quoteTextContainer)
    quoteTextContainer.innerHTML = `
        <div class="quote-text">
            ${randomQuote.text}
        </div>
        <div class="quote-author">
            ${randomQuote.author}
        </div>
    `

}

const button = document.getElementById("get-quote");
button.addEventListener("click", function () {
    getNewQuote(); 
});

