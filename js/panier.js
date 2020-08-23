// fonction pour supprimer un élément du panier (onClick)
function deleteItem(element) {
    // on récupère les élements du panier
    let response = localStorage.getItem("cart")
    let cart = JSON.parse(response)
    // puis on enlève de la liste l'élement correspondant
    cart.splice(element, 1)
    // Renvoie de la nouvelle liste
    localStorage.setItem('cart', JSON.stringify(cart))
    // et rechargement de la page pour actualiser affichage et prix
    window.location.reload();
}

// variable indiquant le prix initial du panier
let totalPrice = 0

// fonction récupérant les informations du panier
async function cartItems() {
    let response = await localStorage.getItem("cart");
    let product = await JSON.parse(response)
    await itemNumber()
    // Si le panier est vide, un message apparait invitant l'utilisateur a retourner sur la page d'accueil
    if (response == null || product.length < 1) {
        document.getElementById("cart").innerHTML +=
            `Votre panier est vide <a href="index.html">choisissez un produit</a>`
    } // Sinon les éléments du panier sont récupérés et affichés
    else {
        product.forEach(element => {
            const {name, id, price, image, lenses} = element
            document.getElementById("cart").innerHTML +=
                ` <div class="row mt-2">
                    <div class="col-5 ">
                        <div class="row">
                            <img class="col-6" src="${image}" alt="product picture">
                            <p class="col-6 align-self-end">${name}</p>
                        </div>
                    </div>
                    <div class="col-2 align-self-end">
                        <p>${lenses}</p>
                    </div>
                    <div class="col-2 align-self-end" id="price">
                        <p>${price} €</p>
                    </div>
                    <div class="col-3 my-auto">
                        <button type="button" onclick="deleteItem(${this.id})" class="btn btn-danger">supprimer</button>
                    </div>
                </div>`
        }) // le prix de chaque élément est additionné
        product.forEach(element => {
            let price = element.price
            if (price == null) { price = 0 }
            totalPrice += price
            console.log(totalPrice)
        })// et le total est affiché 
        document.getElementById("total").innerHTML +=
            `<p>total = <strong>${totalPrice} €</strong><p>`
    }
}

onload = () => {
    cartItems();
}


function order() {
    // récuperation des données du formulaire
    let name = document.getElementById('name').value;
    let lastName = document.getElementById('lastName').value;
    let mail = document.getElementById('email').value;
    let city = document.getElementById('city').value;
    let postal = document.getElementById('postal').value;
    let address = document.getElementById('address').value;
    // regroupement des trois elements d'adresse
    let fullAddress = {city, postal, address}
    let note = document.getElementById('note').value;
    // regroupement de toutes les valeurs
    let contact = {name, lastName, fullAddress, mail, note}; 
    
    // création d'un tableau qui regroupera l'appareille et l'objectif choisie
    let itemChoice = []
    let response = localStorage.getItem("cart");
    let product = JSON.parse(response)
    product.forEach(element => {
        let id = element.id
        let chosenLense = element.lenses
        let item = {id, chosenLense}
        itemChoice.push(item)
    })

    // On regroupe formulaire, produit et prix totale
    let order = {contact, itemChoice, totalPrice}

    const post = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(order)
    }
    fetch('http://localhost:3000/api/cameras', post)
        .then(response => response.json())
        .then((data) => {
            if (itemChoice.length < 1) {
                document.getElementById("alert").innerHTML =
                `<div class="alert alert-danger mx-1" role="alert">
                    <p class="text-center">Le panier est vide ! <a href="index.html" class="alert-info">Veuillez choisir un produit</a></p>
                </div>`
            } else {
                localStorage.setItem("orderComplete")
                localStorage.clear();   
            }
        })
}

const xhr = new XMLHttpRequest()