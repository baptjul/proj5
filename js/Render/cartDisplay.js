
/**
 * 
 */
class CartDisplay {

    constructor() {
        this.dom = document.getElementById("cart");
    }


    delayedRender(object) {
        this.dom.innerHTML = ``;
        setTimeout(() => {
            this.render(object)
        }, 100)
    }

    render(object) {
        if (object !== undefined) {
            this.dom.innerHTML +=
                ` <div class="row mt-2 pr-2">
                <div class="col-4">
                    <div class="row">
                        <img class="col-sm-12 col-md-7" src="${object.imageUrl}" alt="product picture">
                        <p class="col-sm-12 col-md-5 text-center align-self-center">${object.name}</p>
                    </div>
                </div>
                <div class="col-3 align-self-center text-center">
                    <p>${object.itemChoice}</p>
                </div>
                <div class="col-3 align-self-center text-center" id="price">
                    <p>${object.price} €</p>
                </div>
                <div class="col-2 align-self-center">
                    <button type="button" onclick="CartSet.deleteItem('${object.uniqId}');" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
                </div>
            </div>`;
        } else {
            this.dom.innerHTML = `Votre panier est vide <a href="index.html">choisissez un produit</a>`;
        }
    }
}