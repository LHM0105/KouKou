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
		//加载顶部以及导航栏的js
		require(['js/index-top'],function($){
			console.log('加载index.js');
		});
		
		//nav菜单中向每个li右边添加小箭头
		$('.allgoods>ul>li').append('<span class="iconfont icon-zhankai"></span><span class="iconfont icon-zhankai1"></span>');
		
		//添加nav的所有商品信息
		var obj = document.createElement('div');
		$(obj).addClass('moregoods');
		obj.innerHTML = '<ul class="title"> <li>男装<span>&gt;</span></li> <li>女装<span>&gt;</span></li> <li>配件<span>&gt;</span></li> </ul> <div class="floor"> <h5>女装</h5> <div class="links"> <a href="">背心/马甲</a>|<a href="">衬衫</a>|<a href="">风衣</a>|<a href="">工装制服</a>|<a href="">夹克</a>|<a href="">棉裤</a>|<a href="">棉衣</a>|<a href="">民族服装</a>|<a href="">牛仔裤</a>|<a href="">呢大衣</a>|<a href="">Polo衫</a>|<a href="">T恤</a>|<a href="">卫衣</a>|<a href="">休闲裤</a>|<a href="">西服</a>|<a href="">西服套装</a>|<a href="">羽绒服</a>|<a href="">针织衫/毛衣</a>|<a href="">休闲裤</a>|<a href="">西服</a>|<a href="">西服套装</a>|<a href="">羽绒服</a>|<a href="">针织衫/毛衣</a> </div> </div> </div>';
//		$('.allgoods ul li').not('.have').append(obj);
		
		
		//轮播图插件
		$('.slider').slider();
		//trend部分
		$('#trend .link-list li').each(function(k,v){
			//鼠标放上linklist
			$(v).on('mouseenter',function(){
				//改变li样式
				$(v).addClass('hover').siblings().removeClass();
				//控制内容显示
				$('#trend .conbox .con').css('display','none');
				$('#trend .conbox').children('.con').eq(k).css('display','block');
			});
			
		});
		//trend第二块内容区域的事件
		//鼠标放到按钮上，按钮颜色改变
		$('#con2-click .btn-r').on('mouseenter',function(){
			console.log('trend');
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

		//floor中的商品logo切换
		//向右切换
		$('.floor-left-pic').each(function(k,v){
			$(v).children('.btn-right').on('click',function(){
				//获取当前显示内容的下标
				var iIndex = $(v).children('ul').children('.block').index() + 1;
				
				if(iIndex >= $(v).children('ul').children().length){
					iIndex = 0;
				}
				$(v).children('ul').children('li').eq(iIndex).fadeIn().addClass('block').siblings().removeClass('block').css('display','none');
			});
		});
		
//		//向左切换
		$('.floor-left-pic').each(function(k,v){
			$(v).children('.btn-left').on('click',function(){
				//获取当前显示内容的下标
				var iIndex = $(v).children('ul').children('.block').index() - 1;
				
				if(iIndex < 0){
					iIndex = $(v).children('ul').children().length - 1;
				}
				$(v).children('ul').children('li').eq(iIndex).fadeIn().addClass('block').siblings().removeClass('block').css('display','none');
			});
		});
//		//自动切换
		$('.floor-left-pic').each(function(k,v){
			setInterval(function(){
				//获取当前显示内容的下标
				var iIndex = $(v).children('ul').children('.block').index() + 1;
				
				if(iIndex >= $(v).children('ul').children().length){
					iIndex = 0;
				}
				$(v).children('ul').children('li').eq(iIndex).fadeIn().addClass('block').siblings().removeClass('block').css('display','none');
			},3000);
		});


		//侧边栏
		$('.right-barbox').height($(window).height());
		$(window).resize(function(){
			
			$('.right-barbox').height($(window).height());
		});
		//侧边栏--客服
		$('.kefu').hover(function(){
			$('.kefu span').css({
				'display':'block',
				'opacity':0
			}).stop(true).animate({
				'left':-76,
				'opacity':1
			},300);
		},function(){
			$('.kefu span').stop(true).animate({
				'left':-150,
				'opacity':0
			},300).css({
				'display':'block'
			});
		});
		
		//侧边栏---二维码
		$('.ewmicon .ewm').hide();
		$('.ewmicon').hover(function(){
			$('.ewmicon .ewm').show(300);
			
		},function(){
			$('.ewmicon .ewm').hide();

		});
		
		//侧边栏--回到顶部,以及滚动到一定程度的回到顶部
		$('.right-bar .scrollup').add($('.ewm-up .scroll')).click(function(){
			if($(window).scrollTop() > 0){
				$('body,html').animate({scrollTop:0},500);
			}
		});
		
		//滚动到一程度，出现回到顶部和二维码小图标
		$(window).scroll(function(){
			if($(window).scrollTop()>500){
				$('.ewm-up').css('display','block');
			}else{
				$('.ewm-up').css('display','none');
			}
		});
		
		
	});
});
