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
                    <div class="col-4 ">
                        <div class="row">
                            <img class="col-6" src="${image}" alt="product picture">
                            <p class="col-6 align-self-end">${name}</p>
                        </div>
                    </div>
                    <div class="col-3 align-self-end">
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
