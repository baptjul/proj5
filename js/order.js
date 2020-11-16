function order(form) {
    // desactivation de l'action par défault d'envoie du formulaire
    event.preventDefault();
    // Récupération des données du formulaire
    let formData = new FormData(form);
    // création de l'objet de contact et du tableau de produit
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
    // Traitement de la commande (renvoie vrai ou faux)
    return postCommand(contact, products)

}
