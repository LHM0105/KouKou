require.config({
	// 定义路径
	baseUrl: './',
	paths: {
		'jquery': 'js/jquery1.8.3'
	}
});

require(['jquery'], function ($) {

	$(function () {
		//加载底部
		$('#footer').load('index.html #footer .footer-con','login',function(){});
		$('#footer-about').load('index.html #footer-about .foot-about-con','login',function(){});
		$('#footer-copy').load('index.html #footer-copy .foot-copy-con','login',function(){});
	});
	
});