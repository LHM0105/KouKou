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
	$('#footer-service').load('login.html #footer-service .service-con');
	$('#footer-copyright').load('login.html #footer-copyright p');
	$('#footer-icon').load('login.html #footer-icon a');
	$('#footer-out').load('login.html #footer-out .footer');
	
	//模拟数据//加载mock
		require(['mock'], function (Mock) {
			
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
			//加载数据
			$.ajax({
			    url: 'http://g.cn',
			    dataType:'json'
			   }).done(function(data, status, xhr){
			    console.log(data.goods);
				
		      	//显示商品信息
			    for( var i = 0;i < data.goods.length;i++){
			    	//图片地址
			    	var src = data.goods[i].id + ".jpg";
//			    	var price = data.goods[i].price;
			    	var obj = document.createElement('table');
//			    	obj.className = 'goods-box';
			    	obj.innerHTML = '<table><thead><tr><td colspan="8"><input type="checkbox" checked="checked" class="chose" name="chose" id="chose" /><a href="#">'+ data.goods[i].shop +'</a></td></tr></thead><tbody><tr><td class="ischeck"><input type="checkbox" name="ischecked" checked="checked" value="" id=""/></td><td class="goods-info"><dl><dt><a href="#"><img src="img/'+ src +'" /></a></dt><dd><p class="info-text">'+ data.goods[i].info +'</p><p class="bz"><span class="jian"></span><span class="zhen"></span><span class="zheng"></span></p></dd></dl></td><td class="color-size"> <span>尺码：<b>'+ data.goods[i].size +'</b></span> <span>颜色分类：<b>'+ data.goods[i].color +'</b></span> </td> <td class="price"><span class="now-p">￥<b>'+ data.goods[i].nowPrice +'</b></span><span class="old-p">￥<b>'+ data.goods[i].oldPrice+'</b></span></td><td class="goods-num"><div class="num-box"><span class="differ"></span><input type="text" value="1" name="goods-num" class="goos-num"/><span class="add"></span></div></td><td class="cx"><p>满100减30</p></td><td class="price0"><span>￥<b>'+ data.goods[i].nowPrice +'</b></span></td><td class="cz"><a href="#" class="move">移入收藏夹</a><a href="#" class="delete">删除</a></td></tr></tbody></table>';
			    	//追加到页面
			    	$('#shopcart .shopcart-con .shopcart-con0').append(obj);
			    }
			    
			    //点击改变商品数量
			    $('.num-box .add').click(function(){
			    	var nextNum = parseInt($(this).siblings('.goos-num').val()) + 1;
			    	$(this).siblings('.goos-num').val(nextNum);
			    });
			    $('.num-box .differ').click(function(){
			    	var nextNum = parseInt($(this).siblings('.goos-num').val()) - 1;
			    	if(nextNum < 1){
			    		nextNum = 1;
			    	}
			    	$(this).siblings('.goos-num').val(nextNum);
			    });
			});
			
		});
});