// fonction de fetch
async function fetchCollection() {
    // on récupère les informations de l'API
    let response = await fetch(AppSet.collectionApi)
    // si la connexion à l'adresse de l'API fonction
    if (response.ok) {
        // on récupère son contenu et on le transforme en objet js
        let data = await response.json()
        return data;
    } else {
        let alert = new fetchError();
        alert.render('Une erreur est servenu, veuillez recharger la page !')
    }

}

// fonction de fetch
async function fetchOne(id) {
    // on récupère les informations de l'API
    let response = await fetch(`${AppSet.collectionApi}/${id}`)
    // let response = await fetch(AppSet.collectionApi)
    // si la connexion à l'adresse de l'API fonction
    if (response.ok) {
        // on récupère son contenu et on le transforme en objet js
        let data = await response.json()
        return data;
    } else {
        let alert = new fetchError();
        alert.render('Une erreur est servenu, veuillez recharger la page !')
    }

}
