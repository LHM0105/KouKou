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
		
		//头部输入框
		$('#sec-ipt').focus(function(){
			$(this).css({
				color:'#000'
			})
			if($(this).val() === '商品/店铺/品牌'){
				$(this).val('');
			}
		});
		$('#sec-ipt').blur(function(){
			if($(this).val() === ''){
				$(this).val('商品/店铺/品牌');
				$(this).css({color:'#ccc'});
			}
		});
		
		//回到顶部
		$('#scroll-up').click(function(){
			$('html').animate({scrollTop:0},500);
		});
	});
});