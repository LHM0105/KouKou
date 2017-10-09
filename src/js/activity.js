require.config({
	// 定义路径
	baseUrl: './',
	paths: {
		'jquery': 'js/jquery1.8.3'
	}
});

require(['jquery'], function ($) {

	$(function () {
		//从其他页面加载
		$('#top').load('login.html #top .top-con');
		$('#footer-out').load('login.html #footer-out .footer');
		$('#footer-service').load('login.html #footer-service .service-con');
		$('#footer-copyright').load('login.html #footer-copyright p');
	});
});