/**
 * Created by Administrator on 2016/4/24 0024.
 */
angular.module('blog.navController',['ngAnimate','ngTouch'])

    .controller('NavController',function($scope,$location,$timeout){
        $scope.isCollapsed = true;

        $scope.openNewPage = function(){
            $location.path("/test");
        };

        var currentDateTime = new Date();
        (function tick(){
            currentDateTime = new Date();
            $timeout(tick,1000);
        })();

        $scope.getCurrentDateTime = function(){
            return currentDateTime.getDateTimeString();
        }
    })












;