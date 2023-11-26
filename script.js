const getNewQuote = async () => {

    const url = "https://type.fit/api/quotes";

    const response = await fetch(url);
    const allQuote = await response.json();

    const randomNumber = Math.floor(Math.random() * allQuote.length);
    const randomQuote = allQuote[randomNumber]

    console.log(randomQuote)

    const red = Math.round(Math.random() * 256);
    const green = Math.round(Math.random() * 256);
    const blue = Math.round(Math.random() * 256);
    console.log(red)
    console.log(green)
    console.log(blue)

    const randomBgColor = 'rgb(' +red + ',' + green+','+blue+')'
    console.log(randomBgColor)

    const quoteTextContainer = document.querySelector(".quote-text-container");
    const quoteContainer = document.querySelector("#quote-main");
    document.body.style.backgroundColor = randomBgColor

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

