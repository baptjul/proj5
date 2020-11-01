/* import AppSet from './index';
import CartSet from './index';
// import cartNumber from './index';
import cartTotal from './index';
import postItem from './index';
import fetchCollection from './fetch';
import fetchOne from './fetch';
import postResponse from './postResponse';
import order from './order'*/

// test index
function testCartSet() {
    localStorage.clear("cart")
    let cart = CartSet.getCart()
    if (Array.isArray(cart)) {
        console.log("The cart is set up correctly")
        return true
    } else {
        console.error("The cart isn't set up correctly")
        return false
    }
}

function testCartAdd() {
    localStorage.clear("cart")
    let firstProduct = new Item("id1", "nomObjet1", 10, "image", "couleur1")
    CartSet.addItem(firstProduct)
    if (CartSet.getCart().length === 1) {
        console.log("the function addItem is working")
        return true
    } else {
        console.error("the function addItem doesn't work")
        return false
    }
}

function testCartDelete() {
    localStorage.clear("cart")
    let firstProduct = new Item("id1", "nomObjet1", 10, "image", "couleur1")
    CartSet.addItem(firstProduct)
    let prodId = CartSet.getCart()[0].uniqId
    CartSet.deleteItem(prodId)
    if (CartSet.getCart().length < 1) {
        console.log("the function deleteItem is working")
        return true
    } else {
        console.error("the function deleteItem doesn't work")
        return false
    }
}

function testCartTotal() {
    let firstProduct = new Item("id1", "nomObjet1", 10, "image", "couleur1")
    let secondProduct = new Item("id2", "nomObjet2", 20, "image", "couleur2")
    let products = [firstProduct, secondProduct]
    cartTotal(products)
    let price = JSON.parse(localStorage.getItem("price"))
    if (price == 30) {
        console.log("the function CartTotal is working")
        return true
    } else {
        console.error("the function CartTotal doesn't work")
        return false
    }
};

function testCartDisplay() {
    let firstProduct = new Item("id1", "nomObjet1", 10, "image", "couleur1")
    let secondProduct = new Item("id2", "nomObjet2", 20, "image", "couleur2")
    CartSet.addItem(firstProduct)
    CartSet.addItem(secondProduct)
    if (CartSet.getCart().length === 2) {
        console.log("the function cartNumber is working")
        return true
    } else {
        console.error("the function cartNumber doesn't work")
        return false
    }
};

function testPostItem() {
    let postApi = 'http://localhost:3000/api/cameras/order'
    let user = {firstName: "Prénom", lastName: "Nom", address: "Adresse", city: "Ville", email: "email@mail.com"}
    const orderInfo = new Command(user, ['5be1ed3f1c9d44000030b061'])
    postItem(postApi, orderInfo).then(data => {
        let returnedid = data.orderId
        if (returnedid !== null || undefined) {
            console.log("the function PostItem is working")
            return true
        } else {
            console.error("the function PostItem doesn't work")
            return false
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
            console.log("the function fetchCollection is working")
            return true
        } else {
            console.error("the function fetchCollection doesn't work")
            return false
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
            console.log("the function fetchOne and productPage are working")
            return true
        } else {
            console.error("the function fetchOne and productPage doesn't work")
            return false
        }
    })
}

// test post response
function testPostResponse() {
    let firstProduct = new Item("id1", "nomObjet1", 10, "image", "couleur1")
    const userInfo = { firstName: 'Prénom', lastName: 'Nom', adresse: 'Adresse', city: 'Ville', email: 'email@mail.com' }
    const orderInfo = new Command(userInfo, firstProduct.id)
    postResponse("apiReturnedId", 10, orderInfo)
    let result = JSON.parse(localStorage.getItem('result'))
    let checkResult = result.email.indexOf('email@mail.com')
    if (checkResult !== -1) {
        console.log("the function postResponse is working")
        return true
    } else {
        console.error("the function postResponse doesn't work")
        return false
    }
}

// test order
function testOrder() {
    localStorage.clear("cart")
    let firstProduct = new Item("id1", "nomObjet1", 10, "image", "couleur1")
    CartSet.addItem(firstProduct)
    const userInfo = { firstName: 'Prénom', lastName: 'Nom', adresse: 'Adresse', city: 'Ville', email: 'email@mail.com' }
    let response = order(userInfo)
    if (response === true) {
        console.log("the function order is working")
        return true
    } else {
        console.error("the function order doesn't work")
        return false
    }
}


function validateTest() {
    let result = document.getElementById("result");

    let test1 = testCartSet();
    let test2 = testCartDelete();
    let test3 = testCartTotal();
    let test4 = testCartDisplay();
    let test5 = testPostItem();
    let test6 = testFetchCollection();
    let test7 = testFetchOne();
    let test8 = testPostResponse();
    let test9 = testOrder()
    const allTest = [ test1, test2, test3, test4, test5, test6, test7, test8, test9 ]

    function checkIfTrue(status) {
        if (status === true)
        return true
    }

    if (allTest.every(checkIfTrue)){
        result.innerHTML = `<div class="alert alert-success mx-1" role="alert"><p>All test are working</p><div>`
        console.log("every test are green")
    }else {
        result.innerHTML = `<div class="alert alert-danger mx-1" role="alert"><p>Some test are not working</p><div>`
        console.error("some test(s) have problems")
    }

    
}