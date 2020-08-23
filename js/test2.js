fetch('http://localhost:3000/api/cameras')
    .then(response => response.json())
    // Si des données sont trouvées, on crée une boucle d'affichage
    .then((data) => {
        data.forEach((element) => {
            const {name, _id, lenses, price, description, imageUrl} = element
        })
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
                </div>`;
    })

// Verfification de l'url de la page pour déterminée l'affichage
if (window.location.href.indexOf("?id=") > -1) {
    parent.location.hash == null
    document.getElementById("home").style.visibility = "collapse"
} // 
else {
    parent.location.hash = "accueil";
    forEach((element) => {
        document.getElementById("cards").innerHTML +=
            `<div class="col-lg-4 mb-3">
                <div class="card shadow bg-light">
                    <img src="${imageUrl}" alt="camera display" class="card-img-top">
                    <div class="card-body">
                        <h2 class="card-title">${name}</h2>
                        <h3 class="price">${price / 100}€</h3>
                        <p class="card-text">${description}</p>
                        <a href="?id=${_id}" class="btn btn-primary shadow ">Choisir un objectif</a>
                    </div>
                </div>
            </div>`;
    })
}
