// Récuperation des données de l'API
function fetchItems() {
    fetch('http://localhost:3000/api/cameras')
        .then(response => response.json())
        // Si des données sont trouvées, on crée une boucle d'affichage
        .then((data) => {
                data.forEach((element) => {
                    document.getElementById("cards").innerHTML +=
                `<div class="col-lg-4 mb-3">
                    <div class="card shadow bg-light">
                        <img src="${element.imageUrl}" alt="camera display" class="card-img-top">
                        <div class="card-body">
                            <h2 class="card-title">${element.name}</h2>
                            <h3 class="price">${element.price/100}€</h3>
                            <p class="card-text">${element.description}</p>
                            <a href="?id=${element._id}" class="btn btn-primary shadow ">Choisir un objectif</a>
                        </div>
                    </div>
                </div>`;
                });
        })
        // 
        .then(parent.location.hash = "accueil")
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
}

function itemPage() {
    fetch('http://localhost:3000/api/cameras')
        .then(response => response.json())
        .then((data) =>
            data.forEach(element => {
                const { name, _id, lenses, price, description, imageUrl } = element
                let quantity = 0
                if (window.location.href.indexOf(_id) > -1) {
                    // crée la page innerHTML
                    document.getElementById("products").innerHTML =
                        `<div class="row">
                            <div class="col-lg-8 mb-4">
                                <img class="card-img-top " src="${imageUrl}" alt="product picture">
                            </div>
                            <div class="col-lg-4 mb-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h2 class="card-title my-2">${name}</h2>
                                        <h3 class="my-4 price">${price / 100}€</h3>
                                        <p class="card-text my-3">${description}</p>
                                        <div class="dropdown mt-5">
                                            <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Nos objectifs
                                            </button>
                                            <div class="dropdown-menu" id="lenseList" aria-labelledby="dropdownMenuButton"></div>
                                        </div>
                                        <a id="panier" class="btn btn-primary float-right my-3" role="button" aria-pressed="true">Ajouter au panier</a>
                                    </div>
                                    <div id="alert">
                                    </div>
                                </div>
                            </div>
                        </div>`

                        for (let property in lenses) {
                            document.getElementById("lenseList").innerHTML +=
                                `<a href="#" class="dropdown-item " id="selectedLense" onClick='active(${property})' >${lenses[property]}</a>`
                        }

                    }}))}

// Verfification de l'url de la page pour déterminée l'affichage
if (window.location.href.indexOf("?id=") > -1) {
    parent.location.hash == null
    document.getElementById("home").style.visibility = "collapse"
    onload = () => {itemPage()}
}
else {onload = () => {                 
    fetchItems();
}} 

