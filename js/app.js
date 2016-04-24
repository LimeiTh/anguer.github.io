/**
 * Created by Administrator on 2016/4/16 0016.
 */
var app = angular.module('blog',['ngAnimate','ngTouch','ui.router','ui.bootstrap',
    'blog.navController','blog.mainController'])

/*.run(function($rootScope,$location) {
    $rootScope.$on('$locationChangeStart',function(event,next,current) {
        if (next.endsWith('#') || next.endsWith('.html')) {
            return;
        }
        var publicPage = false;
        if (!publicPage) {
            $location.path('/app/main');
        }
    });
})*/

.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state('app',{
            url: '/app',
            abstract: true,
            template: '<ui-view>'
        })
        .state('main',{
            url: '/main',
            abstract: false,
            templateUrl: 'templates/main/index.html'
        })
        .state('test',{
            url: '/test',
            abstract: false,
            templateUrl: 'templates/test/index.html'
        })


    ;
    $urlRouterProvider.otherwise('/main');
})