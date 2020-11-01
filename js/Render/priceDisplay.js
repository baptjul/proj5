
/**
 * 
 */
class PriceDisplay {

    constructor() {
        this.dom = document.getElementById("total");
    }

    render(price) {
        if (price !== undefined) {
        this.dom.innerHTML =
        `<p>total = <strong>${price}€</strong><p>`
        }else {
            this.dom.innerHTML = ``;
        }
}
}