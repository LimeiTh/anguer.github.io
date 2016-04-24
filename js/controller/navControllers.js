/**
 * Created by Administrator on 2016/4/24 0024.
 */
angular.module('blog.navController',['ngAnimate','ngTouch'])

    .controller('NavController',function($scope,$location){
        $scope.isCollapsed = true;

        $scope.openNewPage = function(){
            $location.path("/test");
        }
    })












;