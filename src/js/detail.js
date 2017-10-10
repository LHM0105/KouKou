require.config({
	// 定义路径
	baseUrl: './',
	paths: {
		'jquery': 'js/jquery1.8.3'
	}
});

require(['jquery'], function ($) {
	//从主页index.html加载顶部
	$('#topbg').load('index.html #topbg .top');
	//从登陆页加载底部
	$('#footer-out').load('login.html #footer-out .footer');
	$('#footer-service').load('login.html #footer-service .service-con');
	$('#footer-copyright').load('login.html #footer-copyright p');
	$('#footer-icon').load('login.html #footer-icon a');
	
	$('#top-product-tit .top-product-tit').load('detail.html #product-tit');
	//滚动到一程度，出现回到顶部和二维码小图标
	$(window).scroll(function(){
		//回到顶部小图标
		if($(window).scrollTop()>500){
			$('#scroll').css('display','block');
		}else{
			$('#scroll').css('display','none');
		}
		
		//商品详情区域的头部滚动到一定程度显示，否则隐藏（这里是另写了一份，用load加载的本页面的html代码，但是css代码重写了，冗余）
		if($(window).scrollTop() > 730){
			$('#top-product-tit').css('display','block');
		}else{
			$('#top-product-tit').css('display','none');
		}
	});
	//回到顶部
	$('#scroll .scroll').click(function(){
		if($(window).scrollTop() > 0){
			$('html').animate({scrollTop:0},500);
		}
	});
	
	
	//放大镜效果
	//鼠标放到小图片上
	$('#preview .s-pic .list ul li').on('mouseenter','a',function(){
		//修改图片路径
		var msrc = $(this).children().attr('src').replace('s_','m_');
		//在m-pic中显示对应大图
		$('#preview .m-pic img').attr('src',msrc);
	});
	//鼠标放到大图上
	$('#preview .m-pic').mouseenter(function(){
		//放大镜消失
		$(this).children('i').css('display','none');
		//遮罩显示
		$('#preview .mask').css('display','block');
		//放大的图片显示
		$('#preview .big-pic').css('display','block');
		//放大镜下的图片根据当前m-pic显示
		var bsrc = $(this).children('img').attr('src').replace('m_','b_');
		$('#preview .big-pic img').attr('src',bsrc);
		
	});
	
	//遮罩随鼠标移动
	$('#preview .m-pic').mousemove(function(ev){
		//计算遮罩的位置
		var iL = ev.pageX - $('#preview .m-pic').offset().left - 165;
		var iT = ev.pageY - $('#preview .m-pic').offset().top - 165;
		if(iL < 0){
			iL = 0;
		}
		if(iT < 0){
			iT = 0;
		}
		var iMaxL = $('#preview .m-pic').width() - $('#preview .mask').width();
		var iMaxT = $('#preview .m-pic').height() - $('#preview .mask').height();
		if(iL > iMaxL){
			iL = iMaxL;
		}
		if(iT > iMaxT){
			iT = iMaxT;
		}
		//赋值
		$('#preview .mask').css({
			left: iL,
			top:iT
		});
			
		//改变大图的显示
		$('#preview .big-pic img').css({
			left:-2 * iL,
			top:-2 * iT
		})
	});
	
	//鼠标离开大图
	$('#preview .m-pic').mouseleave(function(){
		//放大镜显示
		$(this).children('i').css('display','block');
		//遮罩消失
		$('#preview .mask').css('display','none');
		//放大的图片消失
		$('#preview .big-pic').css('display','none');
	});
	
	//商品详细信息
	$('#product-tit a').click(function(){
		//改变选项卡tit样式
		$(this).addClass('clicked').siblings('a').removeClass('clicked');
		//改变内容区域显示
		$('#product-con').children().eq($(this).index()).css('display','block').siblings().css('display','none');
	});
	
	
	
	//从后台获取店铺评分信息，对应显示详细内容区域 左侧的评分
	
});