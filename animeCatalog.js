

const baseURL = "https://animechan.vercel.app/api/quotes"

let buttonElement = document.getElementById('tenRandom');

let listElement = document.getElementById('animeList')

function fetchAnimeQuote() {
   fetch("https://animechan.vercel.app/api/quotes")
    .then(function(response) {
        console.log(response)
        return response.json();
    })
    .then(function (jsonData) {
        console.log(jsonData);
        for (let anime of jsonData) {
            displayInfo(anime);    
            }
    });

}

function displayInfo(animeInfo) {   
   
    let animeBox = document.createElement('li');
    let animeTitle = document.createElement('h2');
    let animeCharacter = document.createElement('p');
    let animeQuote = document.createElement('p');

    animeTitle.innerText = animeInfo.anime;
    animeCharacter.innerText = animeInfo.character;
    animeQuote.innerText = animeInfo.quote;

    animeBox.classList.add('animeInfo');
    animeTitle.classList.add('animeName');
    animeCharacter.classList.add('character');
    animeQuote.classList.add('quote');

    animeBox.appendChild(animeTitle);
    animeBox.appendChild(animeCharacter);
    animeBox.appendChild(animeQuote);
    listElement.appendChild(animeBox);

}

buttonElement.addEventListener('click', (event) => {

    while(listElement.firstChild) {
        listElement.removeChild(listElement.firstChild);
    }
    fetchAnimeQuote();
});
