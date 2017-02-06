<<<<<<< HEAD
/**
 * FileName:app.js
 * CreatedBy: Tanvi Raul
 * purpose : perform routing according to state
 */

/**
 * @define module
 * @param {string} ngApp - parameter refers to the HTML element in which app will run
 * @param {Array} injector - loading modules through injector
 * */
var app = angular.module('IPLModule', ["ui.router"]);
/** configure existing services */
app.config(function($stateProvider,$urlRouterProvider) {

$urlRouterProvider.otherwise('team');
$stateProvider
    .state("team", {
             url: '/team',
        templateUrl : './templates/home.html',
        controller: 'teamController'
    })
    .state("player", {
       url: '/team/players/:id',
        templateUrl : './templates/players.html',
        controller: 'playerController'
    });


=======
var app = angular.module('IPLModule', ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider

    .when("/players/:id", {
        templateUrl : './templates/players.html',
        controller: 'playerController'
    })
    .when("/", {
        templateUrl : './templates/home.html',
        controller: 'teamController'
    })
    // .otherwise("/", {
    //     templateUrl : './templates/home.html',
    //     controller: 'myController'
    // })
>>>>>>> 60df35d6ae1195ea0c71996faa0da0fdfa0bda85
});
