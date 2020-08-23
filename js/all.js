// fonction affichant dans l'header le nombre d'article dans le panier
function itemNumber() {
    let numberOfItem = JSON.parse(localStorage.getItem("cart")).length
    if (numberOfItem == null) {numberOfItem = 0}
    if (numberOfItem > 0) {
    document.getElementById("cartNumber").innerHTML =
            `${numberOfItem}`
    }}

    onload = () => {
        itemNumber();
    }
    