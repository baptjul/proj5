
/**
 * 
 */
class PriceDisplay {

    constructor() {
        this.dom = document.getElementById("total");
    }

    render(price) {
        this.dom.innerHTML +=
        `<p>total = <strong>${price}€</strong><p>`
}
}