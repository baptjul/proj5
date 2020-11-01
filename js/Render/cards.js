
/**
 * 
 */
class Cards {

    constructor() {
        this.dom = document.getElementById("cards");
    }

    render(object) {

        this.dom.innerHTML +=
        `<div class="col-lg-4 mb-3">
                <div class="card shadow bg-light h-100">
                    <img src="${object.imageUrl}" alt="camera display" class="card-img-top card-img-index">
                    <div class="card-body">
                        <a href="produits.html?id=${object._id}" class="text-decoration-none"><h2 class="card-title">${object.name}</h2></a>
                        <h3 class="price mb-3">${object.price / 100}€</h3>
                        <p class="card-text mb-2">${object.description}</p>
                    </div>
                </div>
            </div>`;
    }
}

//onclick="localStorage.setItem('id', JSON.stringify(${object._id}))"