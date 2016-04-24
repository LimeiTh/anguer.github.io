/**
 * Created by Administrator on 2016/4/24 0024.
 */
angular.module('blog.mainController',['ngAnimate','ngTouch'])

    .controller('MainController',function($scope,$location){

    })
    .controller('TestController',function($scope,$location){
        $scope.backHome = function(){
            $location.path("/main");
        }
    })











;