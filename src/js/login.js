require.config({
	// 定义路径
	baseUrl: './',
	paths: {
		'jquery': 'js/jquery1.8.3',
		'mock': 'http://mockjs.com/dist/mock'
	}
});

require(['jquery'], function ($) {

	$(function () {
		//用户名输入框
		$('#username').on('focus',function(){
			if($(this).val() === '邮箱/用户名/手机号'){
				$(this).val('');
			}
			$(this).css('color','#000');
			$(this).siblings('.warning').css('display','none');
		});
		$('#psw').focus(function(){
			$(this).siblings('.warning').css('display','none');
		});
		$('#username').on('blur',function(){
			if($(this).val() === ''){
				$(this).val('邮箱/用户名/手机号').css('color','#555');
			}
		});
		
		//点击提交按钮登陆表单
		$('form[name="login"]').submit(function(){
			//检查用户是否输入了id
			if($('input[name="username"]').val() === '邮箱/用户名/手机号'){
//				console.log(1);
				$('input[name="username"]').siblings('.warning').css('display','block');
			}else if($('input[name="psw"]').val() === ''){
				//检查是否输入了密码
				$('input[name="psw"]').siblings('.warning').css('display','block');
			}else{
				
				//从后台加载评论区域数据
				require(['mock'], function (Mock) {
					//模拟评论数据
					Mock.mock('http://g.cn', {
						'result': [{//用户登陆的状态
							
					        'status': '用户名或密码错误'//or 成功
					        
					    }]
					});
					
					   
					var username = $('input[name="username"]').val();
					var psw = $('input[name="psw"]').val();
					//向后台发送数据
					$.ajax({
						url: 'http://g.cn',//请求地址
						type: 'POST',//请求方式，post请求
						data: {//向后台发送的数据
							'userid': username,
							'password': psw
						},
						success:function(data){
							//获取后台返回的是否登陆成功的数据
							//是否成功，bool值
							//如果验证通过，即成功登陆
							if(true){
								//提示登陆
								alert('登陆成功');
								//将当前登陆了的用户信息（id，用户名等需要的）存到localStorage，以便在另一个页面调用
								localStorage.setItem('kkLoginUsername',username);
								//跳转到主页面
								$(window).attr('location','index.html');
							}else{
								//如果验证未通过，
								//返回登陆失败的信息
								//账号或密码错误
							}
						},
						
						error:function(data){
							alert('由于一股神秘的力量，登陆失败了');
							
						}
					});
				});
			
			}
		});
		
	});
	
});