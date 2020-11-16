class ListItem {

    constructor() {
        this.dom = document.getElementById("choiceList");
    }

    render(product, values) {

        this.dom.innerHTML +=
            `<button type="button" class="list-group-item list-group-item-action"  onClick="itemChoice(this)" id="${values}" value="${product[values]}">${product[values]}</button>`;
    }
}