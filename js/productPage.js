// --> Création d'une fonction qui permettera un retour visuel de l'objectif de selectionné (onClick)
let menuItem = 0
function itemChoice(element) {
    // on vise les boutons possedant la classe "list-groupe-item-action"
    buttons = document.querySelectorAll('button.list-group-item-action');
    // au clic toute les classe ".active" sont supprimées 
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    // ajout de la classe ".active" à l'élément sélectionné
    if (element !== null) {
        element.classList.add("active");
    }
};

// contenue de la page produit
function productPage(data) {
    let productChoice = data.lenses || data.colors || data.varnish
    const { name, _id, price, description, imageUrl } = data
    // création de la page innerHTML
    let productDislay = new Product();
    productDislay.render(data)

    // Définir la liste des choix dans le menu
    for (let values in productChoice) {
        // Nombre d'objectifs pour le bon fonctionnant de la fonction onClick (voir index)
        menuItem = values
        // ajout du code HTML avec onclik l'ajout de la classe ".active"
        let list = new ListItem();
        list.render(productChoice, values);
    }
    
    // addEventListener sur le bouton 'Ajouter au panier' on click
    document.getElementById("panier").addEventListener('click', function () {
        let activeElement = document.querySelector("button.list-group-item-action.active")
        let popup = new AlertAdd()

        // Si un choix à bien été selectionné
        if (activeElement) {
            // Récupération de l'élement selectionné par l'utilisateur
            let itemChoice = activeElement.value
            // et instence de classe avec les informations de l'appareil photo selectionné
            let productchoice = new Item(_id, name, price / 100, imageUrl, itemChoice)
            // la variable est ajouter au tableau du panier
            CartSet.addItem(productchoice)
            // Modification de l'affichage du panier
            cartNumber()
        }
        // Création d'une alerte indiquant que le produit est ajouté au panier ou, si aucun élément n'a été selectionné, rappel à l'utilisateur de faire un choix
        popup.delayedRender(activeElement !== null)

        // suppression de la classe .active pour éviter que l'utilisateur ajoute plusieur foix le même élément par erreur
        itemChoice(null)
    })
}