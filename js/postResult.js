function postResult(status) {
    window.scrollTo(0, 0);
    // préparation de l'affichage
    let cartAlert = new CartAlert()
    // Message de confirmation ou d'erreur
    cartAlert.render(status)
    if (status === true) {
        // Réinitialisation de la page
        form.reset();
        cartPage();
        // Redirection après délais
        setTimeout(() => { window.location.href = "confirmation.html"; }, 3000);
    }
}
