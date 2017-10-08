require.config({
	// 定义路径
	baseUrl: './',
	paths: {
		'jquery': 'js/jquery1.8.3'
	}
});

require(['jquery'], function ($) {

	$(function () {
		//从login页面导入头部和底部
		$('#top').load('login.html #top .top-con');
		$('#logo-out').load('login.html #logo-out .logo-con');
		$('#footer-out').load('login.html #footer-out .footer');
		$('#footer-service').load('login.html #footer-service .service-con');
		$('#footer-copyright').load('login.html #footer-copyright p');
		$('#footer-icon').load('login.html #footer-icon a');
		
		
	});
	
});