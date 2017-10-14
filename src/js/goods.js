require.config({
	// 定义路径
	baseUrl: './',
	paths: {
		'jquery': 'js/jquery1.8.3',
		'mock': 'http://mockjs.com/dist/mock',
		'page': 'js/page'
	},
	//配置分页插件的依赖项（jquery）
	shim:{
        'page':{
            deps:['jquery']
        }
    }
});

require(['jquery'], function ($) {
	$(function () {
//		//加载mock
		require(['mock'], function (Mock) {
			Mock.mock('http://g.cn', {
				'src|666': [{	//138张图片
			        'id|1-5': 1,//id从1开始，每次自增1
			        'price|30-200' : 20,//30-200之间
			    }]
			});
			
			$.ajax({
			    url: 'http://g.cn',
			    dataType:'json'
			   }).done(function(data, status, xhr){
//			    console.log(data.src);
//显示商品数量
				$('#goods-num').html(data.src.length);
				var ipageNum = parseInt(data.src.length/60)+1;
				$('#goods-num1').html(ipageNum);
				
		      	//显示商品信息
			    for( var i = 0;i < 60;i++){
			    	var src = data.src[i].id + ".jpg";
			    	var price = data.src[i].price;
//			    	console.log(src,price);
			    	var obj = document.createElement('div');
			    	obj.className = 'goods-box';
			    	obj.innerHTML = '<div class="goods"><div class="goods-pic"><img src="img/'+ src +'" /></div><div class="goods-text"><p class="tit"><a href="#">裙裙欲动 欧美2015夏天气质夏裙连衣裙女</a></p><p class="store-name"><a href="#">裙裙旗舰店</a></p><p class="jia">￥<span>'+price+'</span></p></div><a href="detail.html" class="hover-box"><a href="#" class="buy">立即购买</a><a href="#" class="shou">加入收藏</a></a></div>';
			    	$('#main-box .main').append(obj);
			    }
				
				//点击实现上一页下一页
				$('.sort-right .next-page').click(function(){
//					console.log(1);
					var iNext = parseInt($(this).siblings('span').children('i').html())+1;
					if(iNext > ipageNum){
						iNext = ipageNum;
					}
					$(this).siblings('i').html(iNext);
				});
				
				//加载分页插件
				require(['page'],function(){
					console.log(data.src.length);
					//计算分页总数
					var length = Math.ceil(data.src.length/60);
					//引用分页插件
					$('.pageTest').page({
					      leng: length,//分页总数
					      activeClass: 'activP' , //active 类样式定义
						    
					      clickBack:function(page){
//					        console.log(page);//当点击的页面
					        //显示商品信息
					        //页面中商品的第一个和最后一个的下标
					        var sNum = (page-1) * 60;
					        var eNum = page * 60;
					        //如果是最后一页
					        if(page === length){
					        	var eNum = data.src.length;
					        }
					        //删除当前所有节点
					        $('#main-box .main').empty();
					        //显示新节点
						    for( var i = sNum;i < eNum;i++){
						    	console.log(i);
						    	var src = data.src[i].id + ".jpg";
						    	var price = data.src[i].price;
//			//			    	console.log(src,price);
						    	var obj = document.createElement('div');
						    	obj.className = 'goods-box';
						    	obj.innerHTML = '<div class="goods"><div class="goods-pic"><img src="img/'+ src +'" /></div><div class="goods-text"><p class="tit"><a href="#">裙裙欲动 欧美2015夏天气质夏裙连衣裙女</a></p><p class="store-name"><a href="#">裙裙旗舰店</a></p><p class="jia">￥<span>'+price+'</span></p></div><div class="hover-box"><a href="#" class="buy">立即购买</a><a href="#" class="shou">加入收藏</a></div></div>';
						    	$('#main-box .main').append(obj);
						    }
					    }
				   });
				});
			});
		});
		
		
		//从index.html页面加载头部和搜索框
		$('#topbg').load('index.html #topbg .top');
//		$('#searchbg').load('index.html #searchbg .search');
		$('#navbg').load('index.html #navbg .nav');
		$('#footer-about').load('index.html #footer-about .foot-about-con');
		$('#footer-copy').load('index.html #footer-copy .foot-copy-con');
		//加载index页面的js
		require(['js/index-top'],function($){
			
		});
		//点击“更多选项”
		$('#dev-down .dev-down-con .down').click(function(){
			$(this).css('display','none').siblings('.up').css('display','block');
			$('#seach-items .hide').css('display','block');
		});
		//点击“收起”
		$('#dev-down .dev-down-con .up').click(function(){
			$(this).css('display','none').siblings('.down').css('display','block');
			$('#seach-items .hide').css('display','none');
		});
		//dl中的更多和收起
		$('dl .more-btn').click(function(){
			$(this).css('display','none').siblings('.close-btn').css('display','block');
		});
		$('dl .close-btn').click(function(){
			$(this).css('display','none').siblings('.more-btn').css('display','block');
		});
		
		//品牌和相关类目的更多和收起
		$('dl .more-btn').click(function(){
			$(this).siblings('.search_single').css('display','none').siblings('.search_all').css('display','block');
			
		});
		$('dl .close-btn').click(function(){
			$(this).siblings('.search_all').css('display','none').siblings('.search_single').css('display','block');
		});
		
	});
});