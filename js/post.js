let buyingAlert = document.getElementById("alert");
//let formContent = document.getElementById("form");

// fonction d'envoie de commande
function order(form) {
    // desactivation de l'action par défault d'envoie du formulaire
    event.preventDefault();
    // Récupération des données du formulaire
    let formData = new FormData(form);

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
    if (products == null || products.length < 0) {
        // un meassage d'alerte apparait
        window.scrollTo(0, 0);

        let alerte = new Alerte();
        alerte.render('Veuillez selectionner un produit')

        }
    // Si un produit figure bien dans la commande
    else {
        // Envoir de l'objet à l'API, methode POST et redirection
        postItem(AppSet.postApi, orderInfo, itemPrice)
        // Le contenue du formulaire est réinitialisé
        form.reset()
        // Retour en haut de la page pour diriger l'utilisateur vers un message
        window.scrollTo(0, 0);
        
    }
}
