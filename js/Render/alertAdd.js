
/**
 * 
 */
class AlertAdd {

    constructor() {
        this.dom = document.getElementById("cartAlert");
    }

    delayedRender(status) {
        this.dom.innerHTML = '';
        setTimeout(() => {
            this.render(status)}, 100)
    }

    render(status) {

        if (status == true) {
        this.dom.innerHTML = 
        `<div class="alert alert-success mx-1 mb-3" role="alert">
            <p class="ml-2">Ce produit a été ajouté au panier.</br>
            Vous pouvez maintenant <a href="panier.html" >accéder au panier</a> ou <a href="index.html">continuez vos achats</a>!
        </div>`;}
        else {
            this.dom.innerHTML = 
            `<div class="alert alert-danger mx-1 mb-3" role="alert">
                <p>Veuillez selectionner un produit !</p>
            </div>`;
        }
    }

}