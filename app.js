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
myApp.controller('mainController', function($scope, $log, $filter) {



    $scope.name = 'John';
    $scope.formattedName = $filter('uppercase')($scope.name);

    $log.info($scope.name);
    $log.info($scope.formattedName);
    $scope.occupation = 'Coder';

    $scope.getName = function() {
        return 'John Doe';
    }

    console.log($scope);//simply an object that is being injected in the view by controller
    console.log($log);//logging object with functions inside

    $log.log('hello!');
    $log.info('This is some info');
    $log.warn('Warning!');
    $log.debug('There was some error');
    $log.error('This was an error!');

});


var searchPeople = function(firstname, lastname , height, age, occupation) {
    return 'Jane Doe';
}
// same result as before
var searchPeopleString = searchPeople.toString();

console.log(searchPeople(1,2,3,4,5));


console.log(angular.injector().annotate(searchPeople));