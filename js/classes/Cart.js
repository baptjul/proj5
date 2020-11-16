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
    }

    clear() {
        localStorage.clear(this.localStorageName)
    }
}