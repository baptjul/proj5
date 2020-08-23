// variable créant une liste qui constituera  notre panier
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// variable indiquant si un objectif est selectionné
let lenseSelected = false

// Création d'une fonction qui permettera un retour visuel de l'objectif de selectionné (onClick)
let menuItem = 0
function itemChoice(id) {
    // on parcourt les éléments pour leur retirer la classe .active
    for (let button = 0; ; button++) {
        document.getElementById(button).classList.remove("active")
        // et on indique qu'aucun élement est selectionné
        lenseSelected = false
        if (button == menuItem) break
    }
    // puis on ajoute la classe .active à l'élement cliqué
    document.getElementById(id).classList.add("active");
    // et on indique qu'un objectif est bien selectionné
    lenseSelected = true
}

// fonction affichant dans l'header le nombre d'article dans le panier (wip)
function itemNumber() {
    let numberOfItem = JSON.parse(localStorage.getItem("cart")).length
    console.log(numberOfItem)
    document.getElementById("cartNumber").innerHtml =
            `<p class="text-light"> ${numberOfItem}</p>`
    }

//fetch de l'API
function itemPage() {
    fetch('http://localhost:3000/api/cameras')
        .then(response => response.json())
        .then(itemNumber())
        .then((data) =>
            data.forEach(element => {
                const {name, _id, lenses, price, description, imageUrl} = element
                lenseSelected = false
                // affichage du produit selon l'id affiché dans l'URL
                if (window.location.href.indexOf(_id) > -1) {
                    // création de la page innerHTML
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
                                        <div class="list-group" id="lenseList">
                                        </div>
                                        <a id="panier" class="btn btn-primary float-right my-3" role="button" aria-pressed="true">Ajouter au panier</a>
                                    </div>
                                    <div id="alert">
                                    </div>
                                </div>
                            </div>
                        </div>`

                    // Définir la liste des objectif dans le menu
                    const list = document.getElementById("lenseList")
                    for (let property in lenses) {
                        menuItem = property
                        // ajout du code HTML
                        list.innerHTML +=
                            `<button type="button" class="list-group-item list-group-item-action" onClick="itemChoice(${property})" id="${property}" value="${lenses[property]}">${lenses[property]}</button>`;
                    }

                    // addEventListener sur le bouton 'Ajouter au panier' on click
                    let popup = document.getElementById("alert")
                    document.getElementById("panier").addEventListener('click', function () {
                        // Si un objectif à bien été selectionné
                        if (lenseSelected == true) {
                            // Récupération de l'objecif selectionné par l'utilisateur
                            let lense = document.querySelector(".active").getAttribute("value")
                            // et création d'une variable avec les informations de l'appareil photo selectionné
                            let cartItem = {"name": name, "id": _id,"price": price/100,"image": imageUrl,"lenses": lense}
                            // la variable est ajouter à la liste du panier
                            cart.push(cartItem)
                            localStorage.setItem("cart", JSON.stringify(cart))
                            console.log(cart)
                            itemNumber()
                            // Création d'une alerte indiquant que le produit est ajouté au panier
                            popup.innerHTML =
                                `<div class="alert alert-success mx-1" role="alert">
                                    Ce produit a été ajouté au panier.</br>
                                    <p>Vous pouvez maintenant <a href="panier.html" class="alert-info">accéder au panier</a> ou <a href="index.html" class="alert-info">continuez vos achats</a>!
                                </div>`
                            window.scrollTo(0, 0);
                        // Si un objectif n'a pas été selectionné, rappel à l'utilisateur de faire un choix
                        } else {
                            popup.innerHTML =
                                `<div class="alert alert-danger mx-1" role="alert">
                                    <p>Veuillez selectionner un objectif !</p>
                                </div>`}
                        // Element nous permettant de vérifier dans la console qu'un élément est bien conservé
                        if (localStorage.getItem("cart") === null) {
                            console.log("aucun element en stock")
                        } else {console.log("produit stocké") }
                        // suppression de la classe .active pour éviter que l'utilisateur ajoute plusieur foix le même élément par erreur
                        for (let button = 0; ; button++) {
                            document.getElementById(button).classList.remove("active")
                            lenseSelected = false
                            if (button == menuItem) break}
                    })
                }
            }))
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
    itemPage();
}

