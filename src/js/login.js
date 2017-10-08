require.config({
	// 定义路径
	baseUrl: './',
	paths: {
		'jquery': 'js/jquery1.8.3'
	}
});

require(['jquery'], function ($) {

	$(function () {
		//用户名输入框
		$('#username').on('focus',function(){
			$(this).val('').css('color','#000');
			
		});
		$('#username').on('blur',function(){
			$(this).val('邮箱/用户名/手机号').css('color','#555');
			
		});
	});
	
});