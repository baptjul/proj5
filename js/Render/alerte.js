
/**
 * 
 */
class Alerte {

    constructor() {
        this.dom = document.getElementById("alert");
    }


    render(message) {
        
        this.dom.innerHTML =  `<div class="alert alert-danger mx-1" role="alert">
        <p class="text-center">Le panier est vide ! <a href="index.html" class="alert-primary">${message}</a></p>
    </div>`;
    }
}