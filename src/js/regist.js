require.config({
	// 定义路径
	baseUrl: './',
	paths: {
		'jquery': 'js/jquery1.8.3'
	}
});

require(['jquery'], function ($) {

	$(function () {
		//从login页面导入头部和底部
		$('#top').load('login.html #top .top-con');
		$('#logo-out').load('login.html #logo-out .logo-con');
		$('#footer-out').load('login.html #footer-out .footer');
		$('#footer-service').load('login.html #footer-service .service-con');
		$('#footer-copyright').load('login.html #footer-copyright p');
		$('#footer-icon').load('login.html #footer-icon a');
		
		//注册表单部分
		//账号输入框 获取焦点
		$('form #userid').focus(function(){
			//输入框文字消失
			if($(this).val() === '邮箱/用户名/手机号'){
				$(this).val('');
			}
			$('.zhanghao .tishi').css('display','none');
			//输入框后的提示文字显示
			$('.zhanghao .info').css('display','block');
			
		});
		
		//失去焦点
		$('form #userid').blur(function(){
			//获取输入框内容长度
			var len = 0;
		    var array_len = $(this).val().length;
		    
		    for(var i=0;i<array_len;i++)
		    {
		        var match_string = $(this).val().charAt(i); //charAt() 方法可返回指定位置的字符。ie7,ie8可支持。
		        
		        if (match_string.match( /[\u4e00-\u9faf]/) != null) // 如有有中文
		            len += 2; //如有有中文，占用两个字节
		        else
		            len += 1; //无中文 1个字节
		    }
		    
			//验证手机号
			var partten = /^((\(\d{3}\))|(\d{3}\-))?(13[0-9]|15[012356789]|18[0123456789]|14[57]|17[0-9])\d{8}$/;
			var telNum = true;
		    if(partten.test($(this).val())){
		        telNum = true;
		    }else{
		        telNum = false;
		    }
		    
		    //邮箱验证
		    var result=$(this).val().match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)((com)|(net)|(cn))+)$/);
    
    		//非法字符验证
    		var re = /^\S+$/gi;
//  		var re = /^[\u4e00-\u9fa5a-z\d]+$/gi;
    		var istrue = true;
		    if (re.test($(this).val())) {
		       istrue = true;
		    }else{
		       istrue = false;
		    }
		    
			//输入框文字为空
			if($(this).val() === ''){
				//提示文字
				$('.zhanghao .tishi').css('display','none');
				$('.zhanghao .warn-id-empty').css('display','block');
				//输入框border变色
				$('.zhanghao #userid').css('border-color','#F1756B');
			}else if(len < 4 || len > 25){
				//判断输入框内容长度是否合理
				$('.zhanghao .warn-id-length').css('display','block');
				
			}else if(istrue === false){
				//包含非法字符
				//提示信息
				$('.zhanghao .tishi').css('display','none');
				$('.zhanghao .warn-id-error').css('display','block');
			}else if($(this).val().match(/^\d{4}$/) && telNum === false){
				//内容为纯数字
				//手机号不正确
				//提示信息
				$('.zhanghao .tishi').css('display','none');
				$('.zhanghao .warn-id-type').css('display','block');
				
			}else if($(this).val().match(/\@{1}/) && result == null){
				//验证邮箱不正确
				//提示信息
				$('.zhanghao .tishi').css('display','none');
				$('.zhanghao .warn-id-email').css('display','block');
			}else{
				//验证成功
				//输入框边框颜色变回灰色
				$('.zhanghao #userid').css('border-color','#d0d0d0');
				//显示对号
				$('.zhanghao .tishi').css('display','none');
				$('.zhanghao .ok').css('display','block');
			}
			//输入框后的提示文字消失
			$('.zhanghao .info').css('display','none');
			
		});
		
		//密码
		// 密码强弱
		
		//密码输入框值改变时
		$('.mima #psw').on('input',function(){
			var H = $('.mima #psw').val();
			var D = H.length;//密码长度
	        var E;
	        if(D == 1){ // 输入一个字符的时候
	            E=-13;    // 显示一个 强度
	        }
	        if(D==2){  // 输入2个字符的时候
	            E=-27;  // 显示2个 强度
	        }
	        if(D==3){  // 输入2个字符的时候
	            E=-40;  // 显示3个 强度
	        }
	
	        if(D>3 && D<7){  // 输入 3到 7 之间
	            E=-53;        // 5个 强度
	        }
	        var num =  /^\d+$/;
	        if(num.test(H)  && D>=7){ // 纯数字 时
	            E=-53;  // 5个 强度
	            // $('.p_tishi2').show();
	        }
	        var zm = /^[A-Za-z]+$/;
	        if(zm.test(H)  &&  D>=7){  // 纯字母 时
	
	            E=-53;  // 5个 强度
	        }
	        var zh = /[A-Za-z]+[0-9]+/;
	        if(zh.test(H)  &&  D>=7){   // 字母 加 数字  时
	            E=-90;
	        }
	        var n_z = /[0-9]+[A-Za-z]+/;
	        if(n_z.test(H)  &&  D>=7){  //  数字 加 字母  时
	            E=-90;
	        }
	        //  字母 + 特殊符号 +  字母
	        var z_m = /(^[A-Za-z]+)([^A-Za-z0-9]+)([A-Za-z]+)$/;
	
	        if(z_m.test(H) && D>=7){
	           E=-110;
	        }
	        //  字母 + 特殊符号
	
	        var t_s_z = /(^[A-Za-z]+)([^A-Za-z0-9]+)$/
	
	        if(t_s_z.test(H)  && D>=7 ){
	            E=-116;
	        }
	
	        //  数字 + 特殊符号 +  数字
	        var sz_t = /(^[\d]+)([^A-Za-z0-9]+)([\d]+)$/;
	        if(sz_t.test(H)  && D>=7 ){
	            E=-130
	        }
	
	        //  数字 + 特殊符号
	        var sz_ts = /(^[\d]+)([^A-Za-z0-9]+)$/;
	
	        if(sz_ts.test(H)  && D>=7 ){
	            E=-90;
	        }
	
	        // 特殊符号 +  数字
	        var ts_sz = /(^[^A-Za-z0-9]+)([\d]+)$/
	
	        if(ts_sz.test(H)  && D>=7){
	            E=-103
	        }
	        // 特殊符号 +  字母
	        var ts_zu = /(^[^A-Za-z0-9]+)([A-Za-z]+)$/;
	        if(ts_zu.test(H)  && D>=7){
	            E=-116
	        }
	        // 字母 + 数字 + 特殊符号
	        var gh = /(?=.*[\d]+)(?=.*[A-Za-z]+)(?=.*[^A-Za-z0-9]+)/;
		    if(gh.test(H)  && D>=7){
		        E=-130
		    }
			
			$('.pswStrenthDiv').css('background-position-y',E);
		});
		
		//确认密码输入框默认不可用
		$('.psw-sure #psw-s').prop('disabled',true);
		
		//判断密码
		//获取焦点
		$('.mima #psw').focus(function(){
			$('.mima .tishi').css('display','none');
			$('.mima .info').css('display','block');
			$(this).css('border-color','#d0d0d0');
		});
		
		//失去焦点
		$('.mima #psw').blur(function(){
			$(this).css('border-color','red');
			if($(this).val() === ''){
				//密码为空
				$('.mima .tishi').css('display','none');
				$('.mima .warn-psw-empty').css('display','block');
			}else if($(this).val().length < 6 || $(this).val().length > 20){
				//密码长度判断
				$('.mima .tishi').css('display','none');
				$('.mima .warn-psw-length').css('display','block');
			}else if($(this).val().match(/\s+/)){
				//密码不能包含空格
				$('.mima .tishi').css('display','none');
				$('.mima .warn-psw-type').css('display','block');
			}else if($(this).val() === $('.zhanghao #userid').val()){
				//密码为空
				$('.mima .tishi').css('display','none');
				$('.mima .warn-psw-repeat').css('display','block');
			}else{
				//验证成功
				$('.mima .tishi').css('display','none');
				$('.mima .ok').css('display','block');
				$(this).css('border-color','#d0d0d0');
				//打开 确认密码输入框
				$('.psw-sure #psw-s').prop('disabled',false);
			}
			
		});
		//确认密码框获取焦点
		$('.psw-sure #psw-s').focus(function(){
			$(this).css('background','#fff');
		});
		
		//确认密码框失去焦点
		$('.psw-sure #psw-s').blur(function(){
			if($(this).val() === ''){
				//确认密码为空
				$('.psw-sure .tishi').css('display','none');
				$('.psw-sure .warn-psw-s-empty').css('display','block');
			}else if($(this).val() !== $('.mima #psw').val()){
				//两次密码不一致
				$('.psw-sure .tishi').css('display','none');
				$('.psw-sure .warn-psw-s-unequal').css('display','block');
			}else{
				//验证成功
				$('.psw-sure .tishi').css('display','none');
				$('.psw-sure .ok').css('display','block');
			}
		});
		
		//协议部分
		$('form .xieyi').on('click','label',function(){
			$('form .xieyi label').toggleClass('checked');
		});
		
		//设置遮罩层高度
		$('.maskbg').height($('body').height());
		//协议弹出窗口
		$('form .xieyi').on('click','a',function(){
			$('.maskbg').css('display','block');
			$('.xieyi-box').css('display','block');
		});
		//点击弹出窗的关闭或者“同意并继续”，弹出窗消失
		$('.xieyi-box .close').on('click',function(){
			$('.xieyi-box').css('display','none');
			$('.maskbg').css('display','none');
		});
		
	});
	
});