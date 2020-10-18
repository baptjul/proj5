// Récupération de l'adresse mail de l'utilisateur
let checkoutResult =  JSON.parse(localStorage.getItem('result'))

// Message de validation pour l'utilisateur
document.getElementById('checkout').innerHTML =
    `<div class="col">
        <h2 class="text-center mt-2">Votre commande n°<span class="text-primary">${checkoutResult.id}</span> est validée</h2>
        <h3 class="text-center mt-5">Prix total de la commande : <span class="price">${checkoutResult.price} €</span></h3>
        <h3 class="text-center mt-5">Un récapitulatif de votre commande sera envoyé à l'adresse <span class="text-primary">${checkoutResult.email}</span></h3>
        <p class="text-center mt-5">Orinoco-photo vous remercie pour votre visite.</p>
    </div>`;