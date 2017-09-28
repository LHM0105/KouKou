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

require(['jquery','js/slider'], function ($) {
	$(function(){
		//搜索框
		$('#search-ipt').on('focus',function(){
			$(this).val('');
		});
		$('#search-ipt').on('blur',function(){
			$(this).val('请输入您要搜索的关键字...');
		});
		
		
		
		//nav菜单中向每个li右边添加小箭头
		$('.allgoods>ul>li').append('<span class="iconfont icon-zhankai"></span><span class="iconfont icon-zhankai1"></span>');
		
//		$('.allgoods>ul>li').each(function(k,v){
////			//向第3个后的li中添加更多链接 的div（0,1,2已经在html页面添加）
////			??用if就报错？？？
//			console.log(k);
//			if(k>2){
//				$(this).append('<div class="moregoods"><ul class="title"><li>' + $(v).children('a').eq(0).html() + '<span>&gt;</span></li><li>女装<span>&gt;</span></li><li>配件<span>&gt;</span></li></ul><div class="floor"><h5>男装</h5><div class="links"><a href="">背心/马甲</a>|<a href="">衬衫</a>|<a href="">风衣</a>|<a href="">工装制服</a>|<a href="">夹克</a>|<a href="">棉裤</a>|<a href="">棉衣</a>|<a href="">民族服装</a>|<a href="">牛仔裤</a>|<a href="">呢大衣</a>|<a href="">Polo衫</a>|<a href="">T恤</a>|<a href="">卫衣</a>|<a href="">休闲裤</a>|<a href="">西服</a>|<a href="">西服套装</a>|<a href="">羽绒服</a>|<a href="">针织衫/毛衣</a></div></div><div class="floor"><h5>女装</h5><div class="links"><a href="">背心/马甲</a>|<a href="">衬衫</a>|<a href="">风衣</a>|<a href="">工装制服</a>|<a href="">夹克</a>|<a href="">棉裤</a>|<a href="">棉衣</a>|<a href="">民族服装</a>|<a href="">牛仔裤</a>|<a href="">呢大衣</a>|<a href="">Polo衫</a>|<a href="">T恤</a>|<a href="">卫衣</a>|<a href="">休闲裤</a>|<a href="">西服</a>|<a href="">西服套装</a>|<a href="">羽绒服</a>|<a href="">针织衫/毛衣</a>|<a href="">休闲裤</a>|<a href="">西服</a>|<a href="">西服套装</a>|<a href="">羽绒服</a>|<a href="">针织衫/毛衣</a></div></div><div class="floor"><h5>配件</h5><div class="links"><a href="">背心/马甲</a>|<a href="">衬衫</a>|<a href="">风衣</a>|<a href="">工装制服</a>|<a href="">夹克</a>|<a href="">棉裤</a>|<a href="">棉衣</a>|<a href="">民族服装</a>|<a href="">牛仔裤</a></div></div></div>');
//			}
//		});
		
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
		
		//轮播图插件
		$('.slider').slider();
		
		//trend部分
		//改变li颜色
		$('#trend .link-list li').each(function(k,v){
			//鼠标放上linklist
			$(v).on('mouseenter',function(){
				//改变li颜色
				$(v).siblings().removeClass('lihover');
				$(v).addClass('lihover');
				//去除其他b的样式，给当前b标签添加样式
				$(v).siblings().children('.link').children().eq(0).removeClass();
				$(v).children('.link').children().eq(0).addClass('b-hover'+(k+1));
				
				//控制内容显示
				$('#trend .conbox .con').css('display','none');
				$('#trend .conbox').children('.con').eq(k).css('display','block');
				
			});
			
		});
		
		//trend第二块内容区域的事件
		//鼠标放到按钮上，按钮颜色改变
		$('#con2-click .btn-r').on('mouseenter',function(){
			$(this).css({
				'background-position':'-180px -136px'
			})
		});
		$('#con2-click .btn-r').on('mouseleave',function(){
			$(this).css({
				'background-position':'-120px -136px'
			})
		});
		$('#con2-click .btn-l').on('mouseenter',function(){
			$(this).css({
				'background-position':'-60px -136px'
			})
		});
		$('#con2-click .btn-l').on('mouseleave',function(){
			$(this).css({
				'background-position':'0 -136px'
			})
		});
		
		//trend第二块内容区域的点击滚动事件
		$('#con2-click .btn-r').on('click',function(){
			
			$('#con2-click .logos-box ul').stop(true).animate({
				'margin-left':'-108px'
			},500,function(){
				//获取第一个li将其加到ul最后
				$('#con2-click .logos-box ul li').first().remove().appendTo($('#con2-click ul'));
				$('#con2-click .logos-box ul').css({'margin-left':0});
			});
			
		});
		$('#con2-click .btn-l').on('click',function(){
			$('#con2-click .logos-box ul').stop(true).animate({
				'margin-left':'108px'
			},500,function(){
				//获取第一个li将其加到ul最后
				$('#con2-click .logos-box ul li').last().remove().prependTo($('#con2-click ul'));
				$('#con2-click .logos-box ul').css({'margin-left':0});
			});
			
		});
		
/*//css中实现
		//商品的图片链接样式1：鼠标放上透明度变化
		$('.imgthin').each(function(k,v){
			$(v).hover(function(){
				$(this).animate({
					opacity:0.8
				},0);
			},function(){
				$(this).animate({
					opacity:1
				},0);
			});
		});
		
*/
/*
		//鼠标放上，图片显示呼吸效果(在css中实现了)
//		$('.imgbreath').each(function(k,v){
//			$(v).hover(function(){
//				//计算变大后的尺寸
//				var w = $(v).width() * 1.05;
//				var h = $(v).height() * 1.05;
//				//添加动画
//				$(this).children('a').children('img').stop(true).animate({
//					width:w,
//					height:h
//				});
//				
//			
//			},function(){
//				//鼠标移开动画
//				$(this).children('a').children('img').stop(true).animate({
//					width:$(v).width(),
//					height:$(v).height()
//				});
//			});
//		});
*/		


		
	});
});
