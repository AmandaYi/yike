var Yike = angular.module('Yike',['ngRoute','Controllers']);


// 配置路由,依赖配置方法
Yike.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
	// 解决ng1.6.0地址问题,比如地址解析为#!
	$locationProvider.hashPrefix('');
	// 路由一共是6个,分别是如下部分
	// <span>今日一刻</span>
	// <span>往期内容</span>
	// <span>热门作者</span>
	// <span>栏目浏览</span>
	// <span>我的喜欢</span>
	// <span>设置页面</span>
	// 今日一刻SPA
	$routeProvider.when('/home',{
		templateUrl: "./views/HomeContent.html",
		controller: "HomeController"
	})
	// 往期内容SPA
	.when('/older',{
		templateUrl:"./views/OlderContent.html",
		controller: "OlderController"
	})
	// 热门作者SPA
	.when('/author',{
		templateUrl:"./views/AuthorContent.html",
		controller: "AuthorController"
	})
	// 栏目浏览SPA
	.when('/list',{
		templateUrl:"./views/ListContent.html",
		controller: "ListController"
	})
	// 我的喜欢SPA
	.when('/favourite',{
		templateUrl:"./views/FavouriteContent.html",
		controller: "FavouriteController"
	})
	// 设置页面SPA
	.when('/settings',{
		templateUrl:"./views/SettingsContent.html",
		controller: "SettingsController"
	})
	// 错误页面跳转
	.otherwise({
		redirectTo:"/home"
	});
}]);








// 首屏渲染run方法

Yike.run(['$rootScope',function($rootScope){
	// 首屏渲染,默认collapse为假,也就是不渲染
	$rootScope.collapsed = false;


	// 当鼠标点击切换图标的时候,才改变值
	$rootScope.toggleNav = function () {
		// console.log("我被点击了");
		$rootScope.collapsed = !!!$rootScope.collapsed;
		// 如果$rootScope.collapsed的值为真,意味着打开了侧边栏,那么文字需要过渡显示
		if($rootScope.collapsed) {
			// 获取所有导航列表
			var navList = document.querySelectorAll('.navs dd');
			console.log(navList);
			for(var i = 0; i < navList.length; i ++){
				navList[i].style.transform = 'translate(0)';
				navList[i].style.transitionDelay = '0.2s';
				navList[i].style.transitionDuration = (i + 1) * 0.15 + 's';
			}
		}else{
			// 获取所有导航列表,重新获取的,因为着数值都是新的呢
			var navList = document.querySelectorAll('.navs dd');
			// 否则,当$rootScope.collapsed的值为假,意味着关闭了侧边栏,那么文字需要回去到原来的位置,为了方便下次打开侧边来进行动画效果
			for(var i = 0; i < navList.length; i ++){

				navList[i].style.transform = 'translate(-100%)';
				navList[i].style.transitionDelay = '0s';
				navList[i].style.transitionDuration = (i + 1) * 0.15 + 's';
			}
		}

	}



}]);