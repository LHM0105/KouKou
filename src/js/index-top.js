require.config({
	// 定义路径
	baseUrl: './',
	paths: {
		'jquery': 'js/jquery1.8.3'
	},
	//配置slider插件的依赖项（jquery）
	shim:{
        'slider':{
            deps:['jquery']
        }
    }
});

require(['jquery'], function ($) {
	$(function(){
		//搜索框
		$('#search-ipt').on('focus',function(){
			$(this).val('');
		});
		$('#search-ipt').on('blur',function(){
			$(this).val('请输入您要搜索的关键字...');
		});
		
		//导航栏nav
		//鼠标放上li
		$('.allgoods>ul>li').hover(function(){
			//小箭头改变
			$(this).children('.icon-zhankai').css('display','none');
			$(this).children('.icon-zhankai1').css('display','block');
			$(this).addClass('active');
			//显示更多
			$(this).children('.moregoods').css('display','block');
		},function(){
			$(this).children('.icon-zhankai1').css('display','none');
			$(this).children('.icon-zhankai').css('display','block');
			$(this).removeClass('active');
			//显示更多
			$(this).children('.moregoods').css('display','none');
		});
		
		
	});
});