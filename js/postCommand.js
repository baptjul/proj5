function postCommand(contact, products) {
    // Création d'un tableau qui va contenir toute les id
    let itemChoice = []
    // Si aucun produit ne figure dans le panier
    if (products.length === 0) {
        // arret de la fonction
        return false;
    }
    // Pour chaque produit, l'id est disposé dans le tableau 
    products.forEach(product => {
        itemChoice.push(product.id)
    })
    // Calcul du prix total des produits
    let itemPrice = cartTotal(products)
    // création de l'objet à envoyer
    let orderInfo = new Command(contact, itemChoice)
    // Envoie à l'API et récupération des datas
    let post = postItem(AppSet.postApi, orderInfo)
    post.then(data => {
        if (data === undefined) {
            return undefined
        }
        // Récuperation de l'id renvoyé
        let returnedid = data.orderId
        // Réinitialisation du panier
        ResultSet.clear();
        // Récupération des données renvoyées par l'API
        let checkoutInfo = new checkOut(returnedid, itemPrice, contact.email)
        // Conservation des informations 
        ResultSet.addItem(checkoutInfo)
    })
    // Retourne vrai
    return true;
}
