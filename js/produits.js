//fetch API
async function fetchItems() {
    const response = await fetch('http://localhost:3000/api/cameras')
    const data = await response.json()
    then((data) => {
        for (let i = 0; i < data.length; i++) {
            let {name, _id, price, description, imageUrl, lenses} = data[i]
            let quantity = 0

            // définir l'url avec id en condition 

                // crée la page innerHTML
                document.getElementById("products").innerHTML =
                `<div class="row">
                    <div class="col-lg-8 mb-4">
                        <img class="card-img-top img-fluid" src="${imageUrl}" alt="product picture">
                    </div>
                    <div class="col-lg-4 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h2 class="card-title my-2">${name}</h2>
                                <h3 class="my-4 price">${price/100}€</h3>
                                <p class="card-text my-3">${description}</p>
                                <div class="dropdown mt-5">
                                    <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Nos objectifs
                                    </button>
                                    <div class="dropdown-menu" id="lenseList" aria-labelledby="dropdownMenuButton"></div>
                                </div>
                                <a id="panier" class="btn btn-primary float-right my-3" role="button" aria-pressed="true">Ajouter au panier</a>
                            </div>
                            <div id="alert">
                            </div>
                        </div>
                    </div>
                </div>`

                // Définir la liste des objectif dans le menu déroulant
                for (let property in lenses) {
                document.getElementById("lenseList").innerHTML +=
                `<a class="dropdown-item" id="${property}" selected="selected" href="#">${lenses[property]}</a>`
                }

                // addEventListener sur le bouton 'Ajouter au panier' on click
                document.getElementById("panier").addEventListener('click',buyItem);

                function buyItem(){
                    if () {
                        quantity += 1
                        let lenses = document.querySelector(${property}).value
                        let cart = ["name"= name,"id"= _id, "price"= price/100, "imageURL"= imageUrl, "lenses"= lenses]
                        localStorage.setItem("cart", JSON.stringify(cart))

                        document.getElementById("alert").innerHTML =
                        `<div class="alert alert-success" role="alert">
                            Le produit a été ajouté au panier.</br>
                            <a href="panier.html" class="alert-info">accéder au panier</a>!
                        </div>`

                } else  document.getElementById("alert").innerHTML =
                    `<div class="alert alert-danger" role="alert">
                        <p>Veuillez selctionnez un objectif !</p>
                    </div>`
                }
        }
    }).catch(function(error) {
        console.error(error)
    })
    return data
}

onload = () => {                 
    fetchItems();
}