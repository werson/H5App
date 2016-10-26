angular.module('app.routes', [])

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
      .state('splash', {
        url: '/splash',
        templateUrl: 'templates/splash.html',
        controller: 'splashCtrl'
      })
      .state('welcome', {
        url: '/welcome',
        templateUrl: 'templates/welcome.html',
        controller: 'welcomeCtrl'
      })
      .state('login', {
        url: '/login',
        cache: false,
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      })

      .state('home', {
        url: '/home',
        cache: false,
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      })
      .state('me', {
        url: '/me',
        cache: false,
        templateUrl: 'templates/me.html',
        controller: 'meCtrl'
      })


      .state('search', {
        url: '/search',
        cache: false,
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      })

      .state('list', {
        url: '/list',
        cache: 'false',
        templateUrl: 'templates/list.html',
        controller: 'listCtrl'
      })

      .state('detail', {
        url: '/detail',
        cache: 'false',
        templateUrl: 'templates/detail.html',
        controller: 'detailCtrl'
      })

      .state('addApprover', {
        url: '/addApprover',
        cache: 'false',
        templateUrl: 'templates/addApprover.html',
        controller: 'addApproverCtrl'
      })

      .state('approverlist', {
        url: '/approverlist',
        cache: 'false',
        templateUrl: 'templates/approverlist.html',
        controller: 'approverlistCtrl'
      })

      .state('history', {
        url: '/history',
            templateUrl: 'templates/history.html',
            cache: 'false',
            controller: 'historyCtrl'
      })
      .state('approve', {
        url: '/approve',
        cache: 'false',
        templateUrl: 'templates/approve.html',
        controller: 'approveCtrl'
      })
      .state('confirmapprove', {
        url: '/confirmapprove',
        cache: 'false',
        templateUrl: 'templates/confirmapprove.html',
        controller: 'confirmapproveCtrl'
      })
      .state('approveresult', {
        url: '/approveresult',
        cache: 'false',
            templateUrl: 'templates/approveresult.html',
            controller: 'approveresultCtrl'
      })
      .state('im', {
        url: '/im',
        templateUrl: 'templates/im.html',
        controller: 'imCtrl'
      })



    $urlRouterProvider.otherwise('/splash')


  });
