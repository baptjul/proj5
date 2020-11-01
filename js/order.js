function order(form) {
    // desactivation de l'action par défault d'envoie du formulaire
    event.preventDefault();
    // Récupération des données du formulaire
    let formData = new FormData(form);
    console.log(formData)

    // création de l'objet de contact et du tableau de produit
    let itemPrice = JSON.parse(localStorage.getItem("price"))
    let itemChoice = [];
    let contact = {};

    // récupération des données du formulaires par leur nom
    for (var entry of formData) {
        // nom du label ...
        let key = entry[0];
        // ... ainsi que sa valeur
        let value = entry[1];
        contact[key] = value
    }

    // récupération des données du panier
    let products = CartSet.getCart()
    if (products == null) {
        itemChoice = []
    } else {
        products.forEach(product => {
            itemChoice.push(product.id)
        })
    }

    // création de l'objet à envoyer
    const orderInfo = new Command(contact, itemChoice)

    // Si aucun produit ne figure dans le panier
    if (itemPrice === 0) {
        // Renvoie indéfini
        return undefined
    }// Si un produit figure bien dans la commande
    else {// Envoir de l'objet à l'API
        postItem(AppSet.postApi, orderInfo).then(data => {
            // Récuperation de l'id renvoyé
            let returnedid = data.orderId
            // Traitement des informations recu 
            postResponse(returnedid, itemPrice, orderInfo)
        })
        // Le contenue du formulaire est réinitialisé
        form.reset()
        // Retourne vrai
        return true;
    }
}
