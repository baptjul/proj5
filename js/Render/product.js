
/**
 * 
 */
class Product {

    constructor() {
        this.dom = document.getElementById("products");
    }

    render(object) {

        this.dom.innerHTML +=
        `<div class="row">
            <div class="col-lg-8 mb-4">
                <img class="card-img-top shadow" src="${object.imageUrl}" alt="product picture">
            </div>
            <div class="col-lg-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h2 class="card-title my-2">${object.name}</h2>
                        <h3 class="my-4 price">${object.price / 100}€</h3>
                        <p class="card-text my-3">${object.description}</p>
                        <div class="list-group" id="choiceList">
                        </div>
                        <a id="panier" class="btn btn-primary float-right my-3" role="button" aria-pressed="true">Ajouter au panier</a>
                    </div>
                    <div id="cartAlert">
                    </div>
                </div>
            </div>
        </div>`;
    }
}