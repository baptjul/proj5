
/**
 * 
 */
class CartAlert {

    constructor() {
        this.dom = document.getElementById("alert");
    }

    render(status) {

        if (status == true) {
        this.dom.innerHTML +=
            `<div class="alert alert-success mx-1" role="alert">
                <p class="text-center">Votre commande est à bien été envoyée, vous allez être redirigé vers une page de confirmation</br>
                Si la page ne s'affiche pas, <a href="confirmation.html">cliquez ici</a></p>
            </div>`;} 
        else {
            this.dom.innerHTML +=
            `<div class="alert alert-danger mx-1" role="alert">
                <p class="text-center">Une erreur est survenue, veuillez réessayer !</p>
            </div>`
        }
    }
}