define(['jquery'], function (f) {
	
	//以注册jquery插件的方式写
	(function($){
		//插件的构造函数
		function Slider(jqueryObj){
			//传入的参数是调用这个插件的jquery对象
			this.el = jqueryObj;
			
			this.oImgList = this.el.children('.img-list');
			this.aImgList = this.el.children('.img-list').children('li');//图片集合

			//获取图片宽度图片宽度就是盒子宽度
			this.iImgW = this.el.width();
			
			//获取图片数量
			this.iImgNum = this.aImgList.length;
			
			
			//设置ul宽度 和 图片显示
			this.oImgList.css({
				width:this.iImgW * this.iImgNum,
				left:this.iImgIndex * this.iImgW
			});
			//设置li宽度
			this.aImgList.css('width',this.iImgW);
			
			//添加小按钮
			var sBtnList = '';
			for(var i = 0;i<this.iImgNum;i++){
				sBtnList += '<li>'+(i+1)+'</li>';
			}
			
			this.el.children('.btn-list').append(sBtnList);
			//设置小按钮位置在正中央
			this.el.children('.btn-list').css('margin-left',-this.el.children('.btn-list').width()/2);
			//获取小按钮集合
			this.aBtnList = this.el.children('.btn-list').children('li');
			
			this.aBtnList.eq(0).addClass('active');
			//设置第一张图片显示
			this.aImgList.css('display','none');
			this.aImgList.eq(0).addClass('active').css('display','list-item');
			//设置第一张显示时的背景色
			var bgcolor = this.el.children('.img-list').children('li').eq(0).css('background-color');
			//改变bannerbg背景色
			$('.bannerbg').css('background',bgcolor);
			
			//鼠标放上，显示切换按钮
			this.el.hover(function(){
//				this.el.children('a').css('display','block');
				clearInterval(this.iTimer);//清除自动切换的定时器
			}.bind(this),function(){
//				this.el.children('a').css('display','none');
				this.autoMove();//再次执行自动切换的方法
			}.bind(this));
			
			//滑过小按钮切换
			this.el.children('.btn-list').on('mouseover','li',function(){
				//小按钮变色
				$(this).addClass('active').siblings().removeClass('active');
				
				//图片变化 
				$(this).parent().siblings('.img-list').children('li').eq($(this).index()).fadeIn().addClass('active').siblings().fadeOut().removeClass('active'); 
				var bgcolor = $(this).parent().siblings('.img-list').children('li').eq($(this).index()).css('background-color');
				//改变bannerbg背景色
				$('.bannerbg').css('background',bgcolor);
				
			});
			
			
			//自动切换的方法
			this.autoMove = function(){
				//定时器
				this.iTimer = setInterval(function(){

			//改变按钮显示
					var iBtnIndex = this.el.children('.btn-list').children('.active').index() + 1;
					if(iBtnIndex >= this.el.children('.btn-list').children().length){
						iBtnIndex=0;
					}
					//显示当前小按钮
					this.el.children('.btn-list').children('li').eq(iBtnIndex).addClass('active').siblings().removeClass('active');
					
					
//					//改变图片显示
					this.el.children('.img-list').children('li').eq(iBtnIndex).addClass('active').fadeIn().siblings().fadeOut();
					
					//改变bannerbg背景色
					var bgcolor = this.el.children('.img-list').children('li').eq(iBtnIndex).css('background-color');
					$('.bannerbg').css('background',bgcolor);
					
				}.bind(this),4000);
			}
			//执行自动切换方法
			this.autoMove();
		}
		
		//注册插件
		$.fn.extend({
			slider:function(){
				this.each(function(k,v){
					//v是dom对象
					new Slider($(v));
				});
			}
		});
		
		//
	})(jQuery);
});



