require.config({
	// 定义路径
	baseUrl: './',
	paths: {
		'jquery': 'js/jquery1.8.3',
		'mock': 'http://mockjs.com/dist/mock'
	}
});

require(['jquery'], function ($) {
	//从登陆页面加载内容
	$('#top').load('login.html #top .top-con');
	$('#footer-out').load('login.html #footer-out .footer');
	$('#footer-service').load('login.html #footer-service .service-con');
	$('#footer-copyright').load('login.html #footer-copyright p');
	
	//查询订单部分
	//点击 更多筛选条件
	$('#search1').click(function(){
//		console.log(1);
		//简单搜索消失，精确搜索出现
		$(this).parent().css('display','none').siblings('.search0').css('display','block');
	});
	//点击精简筛选条件
	$('#search0').click(function(){
		//简单搜索消失，精确搜索出现
		$(this).parent().parent().css('display','none').siblings('.search').css('display','block');
	});
	
	$('.search0 .left .select dd ul').hide();
	$('.select dd').click(function(){
		//简单搜索消失，精确搜索出现
		$(this).children('ul').toggle();
	});
	//点击下拉框，输入框内容改变
	$('.select dd ul li').click(function(){
		console.log($(this).html());
		$(this).parent().parent().children('input').val($(this).html());
	});
	
	//加载模拟数据
	require(['mock'],function(Mock){
		//定义模拟数据
		Mock.mock('http://g.cn', {
			'goods|5': [{	//5件商品
		        'id|1-5': 1,//id从1开始，每次自增1
		        'price|30-200' : 20,//30-200之间
		        'info' : '商品的描述信息一些描述信息商品的描述信息一些描述信息',
		        'shop' : '店铺名',
		        'size' : '155/S/95',
		        'nowPrice|100-200' : 10,
		        'oldPrice|200-300' : 10,
		        'num|1-10' : 1,//商品数量 
		        'color' : '@color'
		    }]
		});
		$.ajax({
			url: 'http://g.cn',
			dataType:'json'
		}).done(function(data,status,xhr){
			if(data.goods.length === 0){
				var obj = document.createElement('tbody');
				obj.innerHTML = '暂无交易信息';
				$(obj).css({
					'text-align':'center',
					'font-size':'30px',
					'width':"100%",
					'text-align':'center'
				});
				$('table').append(obj);
			}else{
				for( var i = 0;i < data.goods.length;i++){
					var obj = document.createElement('tbody');
					obj.innerHTML = '<span></span>';
					$('table .tb').append(obj);
				}
			}
		});
			
	});
	//
	$('.myorder-tit ul').on('click','li',function(){
		$(this).addClass('hover').siblings().removeClass('hover');
	});
	
	
});