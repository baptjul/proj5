// constante qui défini l'api utilisé
/*
// pour le site avec les meubles
let AppSet = new App({
    apiUrl: 'http://localhost:3000/',
    collectionApi: 'api/furniture',
    postApi: `/order`,
    titleElement : document.getElementById("title"),
    titleNameHTML: '<h1><i class="fas fa-shopping-cart"></i>Orinoco-Oak</h1>'
});

// pour le site avec les peluches
let AppSet = new App({
    apiUrl: 'http://localhost:3000/',
    collectionApi: 'api/teddies',
    postApi: `/order`,
    titleElement : document.getElementById("title"),
    titleNameHTML: '<h1><i class="fas fa-shopping-cart"></i>Orinoco-Teddies</h1>'
});*/

// Pour le site avec les appareils photos
let AppSet = new App({
    apiUrl: 'http://localhost:3000/',
    collectionApi: 'api/cameras',
    postApi: `/order`,
    titleElement: document.getElementById("title"),
    titleNameHTML: '<h1><i class="fas fa-shopping-cart"></i>Orinoco-photo</h1>'
});

// constante qui constituera  notre panier
const CartSet = new Cart('cart');
// constante qui conservera les informations renvoyé par l'API apres POST
const ResultSet = new Cart('result')


// --> fonction affichant dans l'header le nombre d'article dans le panier
function cartNumber() {
    // l'affichage rend pour valeur le nombre d'élément dans le panier
    document.getElementById("cartNumber").innerHTML =
        `${CartSet.getCart().length}`
};


// --> fonction d'affichage du prix total du panier
function cartTotal(products) {
    // prix initial du panier
    let totalPrice = 0
    // le prix de chaque produit selectionné est ajouté
    products.forEach(product => {
        let price = product.price
        if (price == null) { price = 0 }
        totalPrice += price
    })
    return totalPrice
};

// --> Création d'une fonction pour envoyer la commande à l'api (requiert un URL et l'objet à envoyer)
async function postItem(url, object) {
    // fetch de l'api avec la methode POST
    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // Avec pour retour le contenu de l'objet
        body: JSON.stringify(object)
    })
    if (response.ok) {
        // Attente de la réponse de l'API
        let data = await response.json()
        return data;
    }
    return undefined
};