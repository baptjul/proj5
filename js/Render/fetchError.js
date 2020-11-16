class fetchError {

    constructor() {
        this.dom = document.querySelector("#cards, #products");
    }

    render(message) {

        this.dom.innerHTML +=
            `<div class="col mt-4 text-center">
                <div class="dots">
                    <span class="dots__anim dots__anim--1"></span>
                    <span class="dots__anim dots__anim--2"></span>
                    <span class="dots__anim dots__anim--3"></span>
                </div>
                <p class="dots__text">${message}</p>
            </div>`;
    }
}