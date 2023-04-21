let favorites = JSON.parse(localStorage.getItem('favorites')) || []
const imageContainer = document.querySelector('.image')

//pegar imagem externa
async function getExternalImage(){
    imageContainer.classList.remove('fav');
    const response = await fetch("https://source.unsplash.com/featured")
    const imageSource = response.url;
    
    imageContainer.innerHTML = `<img class="imgLink" src="${imageSource}">`
}

//clicar no botão, pegar imagem externa
getExternalImage()

const button = document.querySelector('button');
button.addEventListener('click', getExternalImage)
imageContainer.addEventListener('click', favorito)

function favorito(){
    
    const imageSource = document.querySelector('.imgLink').src; 

    const index = favorites.indexOf(imageSource);
    const existsInLocalStorage = index != -1;
    if(existsInLocalStorage){
        favorites.splice(index, 1);
        imageContainer.classList.remove('fav');
    }
    else{
        favorites.push(imageSource);
        imageContainer.classList.add('fav');
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
}

//salvar no local storage ou remover