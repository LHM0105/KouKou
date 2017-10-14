require.config({
	// 定义路径
	baseUrl: './',
	paths: {
		'jquery': 'js/jquery1.8.3',
		'mock': 'http://mockjs.com/dist/mock',
		'page': 'js/page'
	}
});

require(['jquery'], function ($) {
	$(function(){
		//从主页index.html加载顶部
		$('#topbg').load('index.html #topbg .top');
		//从登陆页加载底部
		$('#footer-out').load('login.html #footer-out .footer');
		$('#footer-service').load('login.html #footer-service .service-con');
		$('#footer-copyright').load('login.html #footer-copyright p');
		$('#footer-icon').load('login.html #footer-icon a');
		
		//从后台加载评论区域数据
		require(['mock'], function (Mock) {
			//模拟评论数据
			Mock.mock('http://g.cn', {
				'src|12': [{	//12条评论
			        'pic|1-5': 1,//id从1开始，每次自增1
			        'userId|100000-999999' : 20,//用户id
			        'text' : '这是评论的内容，this is the content of pinglun',
			        'time' : '@DATETIME("yyyy-MM-dd")'
			    }]
			});
			$.ajax({
			    url: 'http://g.cn',
			    dataType:'json'
			   }).done(function(data, status, xhr){
				    console.log(data.src.length);
				    //判断是否有评论信息
				    if(data.src.length > 0){
				    	//每页显示的数量
				    	var aLength = 5;
				    	//隐藏“暂无评论”
				    	$('.detail-con-pl .no-text').css('display','none');
				    	
				    	//显示评论内容
				    	var oList = document.createElement('ul');
					    oList.className = 'pl-list';
					    var minLen = data.src.length<aLength?data.src.length:aLength;
				    	for( var i = 0;i < minLen;i++){
				    		var src = data.src[i].pic + ".jpg";
				    		var obj = document.createElement('li');
				    		obj.innerHTML = '<div class="photo"> <img src="img/'+ src +'" /> <p>'+ data.src[i].userId +'</p> </div> <div class="txt"> <p>'+ data.src[i].text +'</p> <i>'+ data.src[i].time +'</i> </div>';
				    		$(oList).append(obj);
				    	}
				    	//显示
				    	$('.detail-con-pl').prepend(oList);
				    	
				    	
				    	//				//加载分页插件
						require(['page'],function(){
							
							//计算分页总数
							var length = Math.ceil(data.src.length/aLength);
							//引用分页插件
							$('.pageTest').page({
							      leng: length,//分页总数
							      activeClass: 'activP' , //active 类样式定义
								    
							      clickBack:function(page){
			//					        console.log(page);//当点击的页面
								        //显示商品信息
								        //页面中商品的第一个和最后一个的下标
								        var sNum = (page-1) * aLength;
								        var eNum = page * aLength;
								        //如果是最后一页
								        if(page === length){
								        	var eNum = data.src.length;
							        }
							        
							        $('.detail-con-pl .pl-list').remove();
							        //显示评论内容
							    	var oList = document.createElement('ul');
								    oList.className = 'pl-list';
								    
							    	for( var i = sNum;i < eNum;i++){
							    		var src = data.src[i].pic + ".jpg";
							    		var obj = document.createElement('li');
							    		obj.innerHTML = '<div class="photo"> <img src="img/'+ src +'" /> <p>'+ data.src[i].userId +'</p> </div> <div class="txt"> <p>'+ data.src[i].text +'</p> <i>'+ data.src[i].time +'</i> </div>';
							    		$(oList).append(obj);
							    	}
							    	//显示
							    	$('.detail-con-pl').prepend(oList);
							    }
						   });
						});
				    	
				    }
				
			});
		});
		
		
		
		//滚动到一程度，出现回到顶部和二维码小图标
		$(window).scroll(function(){
			//回到顶部小图标
			if($(window).scrollTop()>500){
				$('#scroll').css('display','block');
			}else{
				$('#scroll').css('display','none');
			}
			
			//商品详情区域的头部滚动到一定程度显示，头部选项卡样式改变，显示在最顶部
			if($(window).scrollTop() > 730){
				$('#product-tit').css({
					'position':"fixed",
					'top':0,
					'z-index':4
				});
	
			}else{
				$('#product-tit').css({
					'position':'static'
				})
			}
		});
		
		//商品详细信息
		$('#product-tit a').click(function(){
			//改变选项卡tit样式
			$(this).addClass('clicked').siblings('a').removeClass('clicked');
			//改变内容区域显示
			$('#product-con').children().eq($(this).index()).css('display','block').siblings().css('display','none');
		});
		
		$('#product-data-color a').add($('#product-data-size a')).click(function(){
			$(this).addClass('chosed').siblings('a').removeClass('chosed');
		});
		
		$('.address-to .address-con li ul li').click(function(){
			console.log(this);
			$('.address-to .address-t').html($(this).children('span').html());
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
		
		
		
		//从后台获取店铺评分信息，对应显示详细内容区域 左侧的评分
		
	});
});