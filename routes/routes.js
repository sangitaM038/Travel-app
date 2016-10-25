export default function ($stateProvider, $urlRouterProvider) {
    'ngInject';
    require('../components/hello-world/hello-world.scss');
    var controller = require('../components/hello-world/hello-world');
    $urlRouterProvider.otherwise('/form');

    $stateProvider
        .state('form', {
            url: '/form',
            templateUrl: '../components/hello-world/form.html',
            controller: controller
        })
        .state('form.main', {
            url: '/main',
            templateUrl: '../components/hello-world/mainPage.html'
        })
        // nested states
        // each of these sections will have their own view
        // url will be nested (/form/stepOne)
        .state('form.stepOne', {
            url: '/stepOne',
            templateUrl: '../components/hello-world/step-one.html'
        })

        // url will be /form/stepTwo
        .state('form.stepTwo', {
             url: '/stepTwo',
            templateUrl: '../components/hello-world/step-two.html',
        })

        // url will be /form/stepThree
        .state('form.stepThree', {
             url: '/stepThree',
            templateUrl: '../components/hello-world/step-three.html',
        });
}