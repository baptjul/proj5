//recuperation des données de l'API
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
                            <a href="produits.html?id=${element._id}" class="btn btn-primary shadow ">Choisir un objectif</a>
                        </div>
                    </div>
                </div>`;
                });
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
}

onload = () => {                 
    fetchItems();
}