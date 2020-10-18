// fonction de fetch
async function displayFetch() {
    // on récupère les informations de l'API
    let response = await fetch(AppSet.collectionApi)
    // si la connexion à l'adresse de l'API fonction
    if (response.ok) {
        // on récupère son contenu et on le transforme en objet js
        let data = await response.json()
        // visuel du nombre d'article dans le panier
        cartNumber()
        // si l'adresse URL contient un hash "accueil" (voir fonction urlHash dans index.js) ...
        if (window.location.hash) {
            // ... ajout de l'HTML et affichage de l'accueil
            let card = new Card();
            data.forEach(product => {
                card.render(product)
            })
            // si l'adresse URL contient un id ...
        } else if (window.location.href.indexOf("?id=")) {
            // ... affichage de la page produit
            productPage(data)
        }
        // Si la connexion à l'API échoue, message invitant l'utilisateur à recharger la page
    } else {
        let alert = new fetchError();
        alert.render('Une erreur est servenu, veuillez recharger la page !')
    }
}

onload = () => {
    urlHash(),
    displayFetch();
}
