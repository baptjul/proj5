//recuperation des données de l'API
async function fetchItems() {
    const response = await fetch('http://localhost:3000/api/cameras')
    const data = await response.json()
    // Si des données sont trouvées, on crée une boucle d'affichage
    .then((data) => {
        for (let i = 0; i < data.length; i++) {
            const {name, _id, price, description, imageUrl, } = data[i]
            document.getElementById("cards").innerHTML +=
            `<div class="col-lg-4 mb-3 mr-1">
                <div class="card shadow bg-light">
                    <img src="${imageUrl}" alt="camera display" class="card-img-top">
                    <div class="card-body">
                        <h2 class="card-title">${name}</h2>
                        <h3 class="price">${price/100}€</h3>
                        <p class="card-text">${description}</p>
                        <a href="produits.html?=${_id}" class="btn btn-primary shadow ">Choisir un objectif</a>
                    </div>
                </div>
            </div>`;
        }
    })
    // Si une erreur survient lors du fetch, création d'un message pour l'utilisateur
    .catch(error => {
        document.getElementById("cards").innerHTML =
            `<div class="col mt-4 text-center">
                <div class="dots">
                    <span class="dots__anim dots__anim--1"></span>
                    <span class="dots__anim dots__anim--2"></span>
                    <span class="dots__anim dots__anim--3"></span>
                </div>
                <p class="dots__text">Une erreur est servenu, veuillez recharger la page !</p>
            </div>`;})
    return data
}

onload = () => {                 
    fetchItems();
}

/*
let fetchAPI = function(url) {
    return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest()
        request.onreadystatechange = function () {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                resolve(JSON.parse(request.responseText))
            } else {
                reject(request)
            }
        }
        request.open('GET', url, true);
        request.send();
    })
}

fetchAPI('http://localhost:3000/api/cameras')
    .then((data) => {
        for (let i = 0; i < data.length; i++) {
            const {name, _id, price, description, imageUrl} = data[i]
            document.getElementById("cards").innerHTML +=
            `<div class="col-12 col-lg-4 mt-3">
                <div class="card shadow">
                    <img src="${imageUrl}" alt="Animations CSS modernes" class="card-img-top">
                    <div class="card-body">
                        <h2 class="card-title">${name}</h2>
                        <h3>${price/100 + "€"}</h3>
                        <p class="card-text">${description}</p>
                        <a href="produits.html?produit=${_id}" class="btn btn-light shadow">Acheter ce produit</a>
                    </div>
                </div>
            </div>`;}
        }).catch(function(error) {
        document.getElementById("cards").innerHTML =
            `<div class="col mt-4 text-center">
                <div class="dots">
                    <span class="dots__anim dots__anim--1"></span>
                    <span class="dots__anim dots__anim--2"></span>
                    <span class="dots__anim dots__anim--3"></span>
                </div>
                <p class="dots__text">Une erreur est servenu, veuillez recharger la page !</p>
            </div>`;
    });
    */