angular.module('miniRouting',['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {


    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home/homeTmpl.html',
        controller: 'homeCtrl'
      })

      .state('settings', {
        controller: 'settingsCtrl',
        templateUrl: 'views/settings/settingsTmpl.html',
        url: '/settings'
      })

      .state('products', {
        controller: 'productsCtrl',
        templateUrl: 'views/products/productTmpl.html',
        url: '/products/:id'
      });

    $urlRouterProvider
      .otherwise('/');


  });
