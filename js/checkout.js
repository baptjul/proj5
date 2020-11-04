function checkout() {
    // Récupération de l'adresse mail de l'utilisateur
    let checkoutResult = ResultSet.getCart();
    //JSON.parse(localStorage.getItem('result'));
    if (checkoutResult.length !== 0) {
        let info = checkoutResult[0]
        // Message de validation pour l'utilisateur
        document.getElementById('checkout').innerHTML =
            `<div class="col">
            <h2 class="text-center mt-2">Votre commande n°<span class="text-primary">${info.id}</span> est validée</h2>
            <h3 class="text-center mt-5">Prix total de la commande : <span class="price">${info.price} €</span></h3>
            <h3 class="text-center mt-5">Un récapitulatif de votre commande sera envoyé à l'adresse <span class="text-primary">${info.email}</span></h3>
            <p class="text-center mt-5">Orinoco-photo vous remercie pour votre visite.</p>
            <p class="text-center"><a href="index.html">Retour à la page d'accueil</a></p>
        </div>`;
        // Réinitialisation des paniers
        CartSet.clear();
        ResultSet.clear();

    } else {
        document.getElementById('checkout').innerHTML =
            `<div class="col">
            <div class="alert alert-danger mx-1" role="alert" id="error">
                <p class="text-center">Une erreur est survenue, veuillez réessayer !</p>
            </div>
        <p class="text-center"><a href="panier.html">Retour au panier</a></p>
        <p class="text-center mt-0"><a href="index.html">Retour à la page d'accueil</a></p>
        </div>`
    }
}