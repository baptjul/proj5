
function allTest() {
    // test index
    function testCartSet() {
        CartSet.clear()
        let cart = CartSet.getCart()
        if (Array.isArray(cart)) {
            console.log("The cart is set up correctly")
            return true
        }
        console.error("The cart isn't set up correctly")
        return false
    }

    function testCartAdd() {
        CartSet.clear()
        let firstProduct = new Item("id1", "nomObjet1", 10, "image", "couleur1")
        CartSet.addItem(firstProduct)
        if (CartSet.getCart().length === 1) {
            console.log("the function addItem is working")
            return true
        }
        console.error("the function addItem doesn't work")
        return false
    }

    function testCartDelete() {
        CartSet.clear()
        let firstProduct = new Item("id1", "nomObjet1", 10, "image", "couleur1")
        CartSet.addItem(firstProduct)
        let prodId = CartSet.getCart()[0].uniqId
        CartSet.deleteItem(prodId)
        if (CartSet.getCart().length < 1) {
            console.log("the function deleteItem is working")
            return true
        }
        console.error("the function deleteItem doesn't work")
        return false
    }

    function testCartTotal() {
        let firstProduct = new Item("id1", "nomObjet1", 10, "image", "couleur1")
        let secondProduct = new Item("id2", "nomObjet2", 20, "image", "couleur2")
        let products = [firstProduct, secondProduct]
        let price = cartTotal(products)
        if (price == 30) {
            console.log("the function CartTotal is working")
            return true
        }
        console.error("the function CartTotal doesn't work")
        return false
    };

    function testCartDisplay() {
        let firstProduct = new Item("id1", "nomObjet1", 10, "image", "couleur1")
        let secondProduct = new Item("id2", "nomObjet2", 20, "image", "couleur2")
        CartSet.addItem(firstProduct)
        CartSet.addItem(secondProduct)
        if (CartSet.getCart().length === 2) {
            console.log("the function cartNumber is working")
            return true
        }
        console.error("the function cartNumber doesn't work")
        return false
    };

    function testPostItem() {
        let postApi = 'http://localhost:3000/api/cameras/order'
        let user = { firstName: "Prénom", lastName: "Nom", address: "Adresse", city: "Ville", email: "email@mail.com" }
        const orderInfo = new Command(user, ['5be1ed3f1c9d44000030b061'])
        postItem(postApi, orderInfo).then(data => {
            let returnedid = data.orderId
            if (returnedid !== null || undefined) {
                console.log("the function PostItem is working")
                return true
            }
            console.error("the function PostItem doesn't work")
            return false
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
            }
            console.error("the function fetchCollection doesn't work")
            return false
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
            }
            console.error("the function fetchOne and productPage doesn't work")
            return false
        })
    }

    // test order
    function testPostCommand() {
        CartSet.clear()
        let firstProduct = new Item("5be1ed3f1c9d44000030b061", "Zurss 50S", 10, "http://localhost:3000/images/vcam_1.jpg", "35mm 1.4")
        let secondProduct = new Item("5be1ef211c9d44000030b062", "Hirsch 400DTS", 20, "http://localhost:3000/images/vcam_2.jpg", "50mm 1.8")
        CartSet.addItem(firstProduct)
        CartSet.addItem(secondProduct)
        const userInfo = { firstName: 'Leprénom', lastName: 'Lenom', address: 'Ladresse', city: 'Laville', email: 'email@mail.com' }
        let products = CartSet.getCart()
        let response = postCommand(userInfo, products)
        if (response === true) {
            console.log("the function postCommand is working")
            return true;
        }
        console.error("the function postCommand doesn't work")
        return false
    }


    // lancement des tests et verification qu'il ne sont pas faux
    // certaines fonctions sont des promesses et ne recoivent de réponse qu'après que toutes la page sois exécutées
    function checkIfTrue(test) {
        return test !== false
    }
    let allTest = [testCartSet(), testCartAdd(), testCartDelete(), testCartTotal(), testCartDisplay(), testPostItem(), testFetchCollection(), testFetchOne(), testPostCommand()]

    let checkAllTest = allTest.every(checkIfTrue);
    return checkAllTest

}


function checkTest(status) {

    if (status === true) {
        result.innerHTML = `<div class="alert alert-success mx-1" role="alert"><p>All tests are working</p><div>`
        console.log("all tests are green")
    } else {
        result.innerHTML = `<div class="alert alert-danger mx-1" role="alert"><p>Some test(s) are not working</p><div>`
        console.error("some test(s) have problems")
    }
}

