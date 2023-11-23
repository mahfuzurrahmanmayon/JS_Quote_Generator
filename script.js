const api = "https://type.fit/api/quotes";

fetch(api)
    .then(res => res.json())
    .then(data => console.log(data))