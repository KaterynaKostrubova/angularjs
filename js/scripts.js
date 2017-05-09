var app = angular.module('shopApp',[]);

app.controller('ProductsController', ProductsController);

function Product(id, date, color, img, name, snippet, age, price, quantity){
    this.id = id;
    this.date = date;
    this.color = color;
    this.img = img;
    this.name = name;
    this.snippet = snippet;
    this.age = age;
    this.price = price;
    this.quantity = quantity;

}

function ProductsController(){

    this.shopCart = [];

    this.products = [
        new Product(0, new Date('December 23, 2016'), 'red', 'images/01.jpg', "Masik", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, quia.", 2, 33, 1),
        new Product(1, new Date('February 27, 2017'), 'grey', 'images/03.jpg', "Barsik", "Quae consectetur ab pariatur, temporibus nulla distinctio.", 2, 23, 1),
        new Product(2, new Date('April 15, 2017'), 'white', 'images/03.jpg', "Tom", "Ducimus eveniet nostrum nisi officiis sapiente mollitia consectetur itaque tenetur eius.", 2, 36, 1),
        new Product(3, new Date('March 31, 2017'), 'grey', 'images/04.jpg', "Pushist", "Omnis sint velit eos. Dolorum temporibus hic ut accusantium, deserunt dolor tempora laudantium.", 2, 73, 1),
        new Product(4, new Date('May 02, 2017'), 'red', 'images/06.jpg', "Murka", "voluptatibus cupiditate dicta voluptate eveniet assumenda porro odio quis possimus repellat..", 2, 47, 1),
        new Product(5, new Date('April 03, 2017'), 'white', 'images/06.jpg', "Murchik", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, quia.", 2, 77, 1)
    ];


    this.addToShopCart = function(product) {
        this.shopCart.push(angular.copy(product));
        this.amount += product.price;
    };

    this.removeFromShopCart = function(id, product){
        var index = getIndexById.bind(this)(id);
        this.shopCart.splice(index, 1);
    }

    this.getTotalAmount = function() {

        for(var i = 0; i < this.shopCart.length; i++){
            this.shopCart.product.price[i] + this.shopCart.product.price[i];
        }
    };

    this.amount = 0.00;

    this.clearCart = function (){
        this.shopCart = [];
        this.amount = 0.00;
    }

    this.editorAction = "Create";

    this.addProductInList = function(product) {
        this.products.unshift(product);
    }

    this.removeProductFromList = function(id){
        var index = getIndexById.bind(this)(id);

        this.products.splice(index, 1);
    }


    this.updateProduct = function(id){
        var index = getIndexById.bind(this)(id);
        this.editorAction = "Update";

        this.editor = angular.copy(this.products[index]);
    }

    this.updateProductInList = function(newUser){
        var index = getIndexById.bind(this)(newUser.id);

        this.products.splice(index, 1, newUser);
    }

    this.resetForm = function(){
        this.editor = {
            name: "",
            age: null,
            id: null
        };

        this.editorAction = "Create";
    }


    this.submit = function() {
        switch(this.editorAction){
            case 'Create':
                this.editor.id = Date.now();
                this.addProductInList(this.editor);
                break;
            case 'Update':
                this.updateProductInList(this.editor);
                break;
        }
        this.resetForm();
    }

    function getIndexById(id){
        return this.products.findIndex(function(product){
            return product.id === id;
        });
    }
}

// amount
//checkbox
//quantity +-

