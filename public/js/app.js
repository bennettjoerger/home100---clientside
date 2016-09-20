(function(){
  angular.module("home100App", ["firebase", "ui.router"])

  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
          url: '/home',
          templateUrl: 'templates/hardware.html',
          controller: 'HardwareController'
        });
  });
})();
