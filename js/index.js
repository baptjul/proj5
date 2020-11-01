// 'http://localhost:3000/api/furniture'
// 'http://localhost:3000/api/teddies'
// 'http://localhost:3000/api/cameras'

class App {
    // construction de l'API a récupérer
    constructor(options) {
        this.apiUrl = options.apiUrl;
        this.collectionApi = this.apiUrl + options.collectionApi;
        this.postApi = this.apiUrl + options.collectionApi + options.postApi;

        options.titleElement.innerHTML = options.titleNameHTML;
    }
}

class Cart {
    // Création d'un localstorage qui nous servira de panier
    constructor(localStorageName) {
        this.localStorageName = localStorageName
    }

    // fonction nous permettant de récupérer le panier
    getCart() {
        return JSON.parse(localStorage.getItem(this.localStorageName)) || [];
    }

    // fonction nous permettant d'ajouter un objet au panier
    addItem(object) {
        // Récupération du tableau/panier
        let data = this.getCart();
        // ajout d'un id unique a l'élément selectionné
        object.uniqId = 'id' + (new Date()).getTime();
        // ajout de l'élement au tableau/panier
        data.push(object)
        // conservation des informations
        localStorage.setItem(this.localStorageName, JSON.stringify(data))
    }

    deleteItem(uniqId) {
        // Récupération du tableau/panier
        let data = this.getCart();
        // suppression de l'element grace a son id unique
        data = data.filter(element => element.uniqId !== uniqId)
        // Renvoie de la nouvelle liste
        localStorage.setItem(this.localStorageName, JSON.stringify(data))
        // et rechargement de la page pour actualiser affichage et prix
        //cartPage();
    }
}

/*let SetOak = new App({
    apiUrl: 'http://localhost:3000/',
    collectionApi: 'api/furniture',
    postApi: `/order`,
    titleElement : document.getElementById("title"),
    titleNameHTML: '<h1><i class="fas fa-shopping-cart"></i>Orinoco-Oak</h1>'
});

let SetTeddies = new App({
    apiUrl: 'http://localhost:3000/',
    collectionApi: 'api/teddies',
    postApi: `/order`,
    titleElement : document.getElementById("title"),
    titleNameHTML: '<h1><i class="fas fa-shopping-cart"></i>Orinoco-Teddies</h1>'
});*/

// constante qui défini l'api utilisé
let AppSet = new App({
    apiUrl: 'http://localhost:3000/',
    collectionApi: 'api/cameras',
    postApi: `/order`,
    titleElement: document.getElementById("title"),
    titleNameHTML: '<h1><i class="fas fa-shopping-cart"></i>Orinoco-photo</h1>'
});

// constante qui constituera  notre panier
const CartSet = new Cart('cart');

// création de classe qui contiendra le produit selectionné par l'utilisateur
class Item {
    constructor(_id, name, price, imageUrl, itemChoice) {
        this.id = _id
        this.name = name
        this.price = price
        this.imageUrl = imageUrl
        this.itemChoice = itemChoice
    }
}

// création d'une classe qui prendra les éléments à envoyer en POST
class Command {
    constructor(contact, id) {
        this.contact = contact
        this.products = id
    }
}

// création d'une classe regroupant les informations a afficher lors de la confirmation
class checkOut {
    constructor(id, price, email) {
        this.id = id
        this.price = price
        this.email = email
    }
}

// --> fonction affichant dans l'header le nombre d'article dans le panier
function cartNumber() {
    // l'affichage rend pour valeur le nombre d'élément dans le panier
    document.getElementById("cartNumber").innerHTML =
        `${CartSet.getCart().length}`
};


// --> fonction d'affichage du prix total du panier
function cartTotal(element) {
    // prix initial du panier
    let totalPrice = 0
    // le prix de chaque produit selectionné est ajouté
    element.forEach(product => {
        let price = product.price
        if (price == null) { price = 0 }
        totalPrice += price
    })

    localStorage.setItem("price", JSON.stringify(totalPrice))
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
};