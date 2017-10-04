var Person = function(firstname, lastname) {

    this.firstname = firstname;
    this.lastname = lastname;
}

function logPerson(person) {
    console.log(john);
}

var john = new Person('John', 'Doe');

logPerson(john);


// MODULE
var myApp = angular.module('myApp', []);

// CONTROLLERS
myApp.controller('mainController', function($scope) {

    console.log($scope);//simply an object that is being injected in the view by controller

});



