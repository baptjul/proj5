function cartPage() {
    // récuperation du localstorage
    let products = CartSet.getCart()
    // visuel du nobmre d'article dans le panier
    cartNumber()
    // preparation de l'affichage HTML
    let cartDisplay = new CartDisplay()
    // Si le panier est vide, un message apparait invitant l'utilisateur a retourner sur la page d'accueil
    if (products == null || products.length < 1) {
        // Réinitialisation du panier (utilie lorsque l'utilisateur vide son panier)
        localStorage.clear("cart")
        // Ajout de l'HTML
        cartDisplay.render()
    } // Sinon les éléments du panier sont récupérés et affichés
    else {
        // Ajout de l'HTML pour chaque produit du panier
        products.forEach(product => {
            cartDisplay.render(product)
        })
        cartTotal(products)
    }
}

onload = () => {
    cartPage();
}