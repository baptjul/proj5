// fonction d'affichage des alertes dans le panier
function alertDisplay(status) {
    // Retour en haut de la page pour diriger l'utilisateur
    window.scrollTo(0, 0);
    // préparation de l'affichage
    let cartAlert = new CartAlert()
    // Si un élménent est dans le résultat
    if (typeof status === 'boolean') {
        if (status === true) {
            // Message de confirmatio et redirection
        cartAlert.render(status)
        // Redirection après délais
        setTimeout(() => { window.location.href = "confirmation.html"; }, 3000);
        } else (cartAlert.render(status))
    } else { cartAlert.error('Veuillez selectionner un produit') }
} 
