function cartPage() {
    // récuperation du localstorage
    let products = CartSet.getCart()
    // preparation de l'affichage HTML
    let cartDisplay = new CartDisplay()
    let cartPrice = new PriceDisplay();
    // Si le panier est vide, un message apparait invitant l'utilisateur a retourner sur la page d'accueil
    if (products == null || products.length < 1) {
        // Réinitialisation du panier (utilie lorsque l'utilisateur vide son panier)
        // Ajout de l'HTML
        cartDisplay.render()
    } // Sinon les éléments du panier sont récupérés et affichés
    else {
        // Ajout de l'HTML pour chaque produit du panier
        products.forEach(product => {
            cartDisplay.delayedRender(product)
        })
    }
    // Calcul du prix
    let price = cartTotal(products)
    // Si le prix n'est pas nul
    if (price !== 0) {
        // Affichage du prix
        cartPrice.render(price)
        // Sinon emplacement reste vide
    } else { cartPrice.render() }
}
