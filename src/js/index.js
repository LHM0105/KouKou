require.config({
	// 定义路径
	baseUrl: './',
	paths: {
		'jquery': 'js/jquery1.8.3'
	},
	//配置slider的依赖项（jquery）
	shim:{
        'slider':{
            deps:['jquery']
        }
    }
});

require(['jquery','js/slider'], function ($) {
	$(function(){
		console.log(1);
		$('.slider').slider();
		
	});
});
