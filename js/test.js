// import AppSet from './index';
import CartSet from './index';
// import cartNumber from './index';
import cartTotal from './index';
import postItem from './index';
import fetchCollection from './fetch';
import fetchOne from './fetch';
import postResponse from './postResponse';
import order from './order'



// test index
function testCartSet() {
    CartSet.clear();
    let cart = CartSet.getCart()
    if (Array.isArray(cart)) {
        console.log("The cart is set up correctly")
    } else {
        console.error("The cart isn't set up correctly")
    }
}

function testCartAdd() {
    CartSet.clear();
    let firstProduct = new Item("id1", "nomObjet1", 10, "image", "couleur1")
    CartSet.addItem(firstProduct)
    if (CartSet.getCart().length === 1) {
        console.log("the function addItem is working")
    } else {
        console.error("the function addItem isn't working")
    }
}

function testCartDelete() {
    CartSet.clear();
    let firstProduct = new Item("id1", "nomObjet1", 10, "image", "couleur1")
    CartSet.deleteItem(CartSet.addItem(firstProduct))
    if (CartSet.getCart().length < 1) {
        console.log("the function deleteItem is working")
    } else {
        console.error("the function deleteItem isn't working")
    }
}

function testCartTotal() {
    let firstProduct = new Item("id1", "nomObjet1", 10, "image", "couleur1")
    let secondProduct = new Item("id2", "nomObjet2", 20, "image", "couleur2")
    let products = [firstProduct, secondProduct]
    cartTotal(products)
    let price = JSON.parse(localStorage.getItem("price"))
    if (price == 30) {
        console.log("the function CartTotal work")
    } else {
        console.error("the function CartTotal doesn't work")
    }
};

function testCartDisplay() {
    let firstProduct = new Item("id1", "nomObjet1", 10, "image", "couleur1")
    let secondProduct = new Item("id2", "nomObjet2", 20, "image", "couleur2")
    let products = [firstProduct, secondProduct]
    CartSet.setItem(products)
    if (CartSet.getCart().length == 2) {
        console.log("the function cartNumber work")
    } else {
        console.error("the function cartNumber doesn't work")
    }
};

function testPostItem() {
    let postApi = 'http://localhost:3000/api/cameras/order'
    const userInfo = { "firstName": 'Prénom', "lastName": 'Nom', "adresse": 'Adresse', "city": 'Ville', "email": 'email@mail.com' }
    const orderInfo = new Command(userInfo, '5be1ed3f1c9d44000030b061')
    postItem(postApi, orderInfo).then((data) => {
        let returnedid = data.orderId 
        if (returnedid !== null || undefined) {
            console.log("the function PostItem work")
        } else {
            console.error("the function PostItem doesn't work")
        }
    })
    
}

// test fetch accueil 
function testFetchCollection() {
    let collectedId = []
    fetchCollection().then((data) => {
        data.forEach(item => {
            collectedId.push(item._id)
        })
        if (collectedId.length >= 1) {
            console.log("the function fetchCollection work")
        } else {
            console.error("the function fetchCollection isn't working")
        }
    })
}

// test fetch et page produit
function testFetchOne() {
    let item = {}
    fetchOne('5be1ed3f1c9d44000030b061').then((data) => {
        let productChoice = data.lenses || data.colors || data.varnish
        for (let values in productChoice) {
            item = values[0]
        }
        const { name, _id, price, description, imageUrl } = data
        let productchoice = new Item(_id, name, price / 100, imageUrl, item)
        if (productchoice !== null || undefined) {
            console.log("the function fetchOne and productPage work")
        } else {
            console.error("the function fetchOne and productPage aren't working")
        }
    }) 
}

// test post response
function testPostResponse() {
    const userInfo = { firstName: 'Prénom', lastName: 'Nom', adresse: 'Adresse', city: 'Ville', email: 'email@mail.com' }
    postResponse("id1", 10, userInfo)
    let result = JSON.parse(localStorage.getItem('result'))
    let checkResult = result.email.indexOf('email@mail.com')
    if (checkResult !== -1) {
        console.log("the function postResponse work")
    }else {
        console.error("the function postResponse isn't working")
    }
}

// test order
function testOrder() {
    CartSet.clear();
    let firstProduct = new Item("id1", "nomObjet1", 10, "image", "couleur1")
    CartSet.addItem(firstProduct)
    const userInfo = { firstName: 'Prénom', lastName: 'Nom', adresse: 'Adresse', city: 'Ville', email: 'email@mail.com' }
    let response = order(userInfo)
    if (response === true) {
        console.log("the function order work")
    }else {
        console.error("the function order isn't working")
    }
}
