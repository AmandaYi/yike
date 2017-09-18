<?php 

// 依据传过来的参数,进行API获取

$typePage = $_GET['typePage'];
$url = "";
$time = "";
switch($typePage){
	case 'home':
	// posts(1);
 	$time = date("Y-m-d",time());	
	$url = "https://moment.douban.com/api/stream/date/".$time."?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6";
	break;
	case 'older':
	$time = date("Y-m-d",strtotime("-1 days"));
	$url = "https://moment.douban.com/api/stream/date/".$time."?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6";
	// echo $time;
	break;
	default:
	echo "参数错误";
}


// echo $time;
echo file_get_contents($url); 
