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
		
		//注册表单部分
		//协议部分
		$('form .xieyi').on('click','label',function(){
			$('form .xieyi label').toggleClass('checked');
		});
		
		//设置遮罩层高度
		$('.maskbg').height($('body').height());
		//协议弹出窗口
		$('form .xieyi').on('click','a',function(){
			$('.maskbg').css('display','block');
			$('.xieyi-box').css('display','block');
		});
		//点击弹出窗的关闭或者“同意并继续”，弹出窗消失
		$('.xieyi-box .close').on('click',function(){
			$('.xieyi-box').css('display','none');
			$('.maskbg').css('display','none');
		});
		
	});
	
});