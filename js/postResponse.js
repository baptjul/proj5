// fonction de stockage des informations après envoie à l'API
function postResponse(id, price, object) {
    // Vide le panier actuel
    localStorage.clear("cart")
    // Récupération des données renvoyées par l'API
    let checkoutInfo = new checkOut(id, price, object.contact.email)
    // Conservation des informations
    localStorage.setItem("result", JSON.stringify(checkoutInfo))
}