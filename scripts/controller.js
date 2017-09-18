angular.module("Controllers",[])
// 今日一刻C控制器
.controller('HomeController',['$scope','$http',function($scope,$http){

	// 获取数据$http

	$http({
		url: "./api/zuimeiyike.php",
		method:'GET',
		// 参数
		params:{
			typePage: 'home'
		}
	}).success(function(info){
		// console.log(info);
		$scope.info = info.posts;
		// console.log($scope.info);

	})


}])
// 往期内容C控制器
.controller('OlderController',['$scope','$http',function($scope,$http){

	// 往期内容
	$http({
		url: "./api/zuimeiyike.php",
		method: "GET",
		params: {
			typePage: "older"
		}
	}).success(function(info){
		// console.log(info);
		$scope.info = info.posts;
		
	})

}])
// 热门作者C控制器
.controller('AuthorController',['$scope',function($scope){}])
// 栏目浏览C控制器
.controller('ListController',['$scope',function($scope){}])
// 我的喜欢C控制器
.controller('FavouriteController',['$scope',function($scope){}])
// 设置页面C控制器
.controller('SettingsController',['$scope',function($scope){}]);
