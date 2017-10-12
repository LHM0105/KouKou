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
		        'color' : '颜色',
		        'date' : '@DATETIME("yyyy-MM-dd HH:mm:ss")'
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
				console.log(data.goods[i]);
				for( var i = 0;i < data.goods.length;i++){
					//定义空白区域dom对象
					var oBlock = document.createElement('tbody');
					oBlock.className = 'block';
					oBlock.innerHTML = '<tbody class="block"> <tr><td></td></tr> </tbody>';
					//定义商品展示的dom对象
					var obj = document.createElement('tbody');
					//像dom对象添加内容
					obj.innerHTML = '<tr class="tbody-tit"> <td colspan="2"> <input type="checkbox" name="chosed" class="chose"/> <span>订单号<b>'+ data.goods[i].date +'</b></span> </td> <td class="store" colspan="2"> <a href="#">'+ data.goods[i].shop +'</a> </td> <td class="time" colspan="3"> <span>下单时间<b>'+ data.goods[i].date +'</b></span> </td> </tr><tr class="tbody-con"> <td colspan="4" class="td1"> <div class="goods last-goods"> <div class="goods-pic"> <img src="img/'+ data.goods[i].id +'.jpg" /> </div> <div class="goods-text"> <h4>'+ data.goods[i].info +'</h4> <p> <span class="size">尺码:<b>'+ data.goods[i].size +'</b></span> <span class="color">颜色分类:<b>'+ data.goods[i].color +'</b></span> </p> <p class="icons"> <i class="zhi"></i> <i class="zhen"></i> <i class="zheng"></i> </p> </div> <div class="solo-price"> <p class="now-p">￥<span>'+ data.goods[i].nowPrice +'</span></p> <p class="old-p">￥<span>'+ data.goods[i].oldPrice +'</span></p> </div> </div> </td> <td class="td2"> <p class="price">￥<span>'+ data.goods[i].nowPrice +'</span></p> <p class="kuaidi">（含快递：<b>0.00</b>元）</p> </td> <td class="td3"> <a href="#">待付款</a> <a href="#">查看订单</a> </td> <td class="td4"> <input type="button" value="立即支付" name="paynow" /> <a href="#">取消订单</a> </td> </tr>';
					$('table').append(oBlock);
					$('table').append(obj);
				}
				
			}
		}).done(function(){
			$.ajax({
				type:"post",
				url:"http://g.cn",
				async:true,
//				data:''
			});
		});
			
	});
	//
	$('.myorder-tit ul').on('click','li',function(){
		$(this).addClass('hover').siblings().removeClass('hover');
	});
	
	//全选
	$('.choseall').click(function(){
		$('.chose').prop('checked',$(this).prop('checked'));
		$('.choseall').prop('checked',$(this).prop('checked'));
	});
});