require.config({baseUrl:"./",paths:{jquery:"js/jquery1.8.3",mock:"http://mockjs.com/dist/mock"}}),require(["jquery"],function(n){n(function(){n("#username").on("focus",function(){"邮箱/用户名/手机号"===n(this).val()&&n(this).val(""),n(this).css("color","#000"),n(this).siblings(".warning").css("display","none")}),n("#psw").focus(function(){n(this).siblings(".warning").css("display","none")}),n("#username").on("blur",function(){""===n(this).val()&&n(this).val("邮箱/用户名/手机号").css("color","#555")}),n('form[name="login"]').submit(function(){"邮箱/用户名/手机号"===n('input[name="username"]').val()?n('input[name="username"]').siblings(".warning").css("display","block"):""===n('input[name="psw"]').val()?n('input[name="psw"]').siblings(".warning").css("display","block"):require(["mock"],function(s){s.mock("http://g.cn",{result:[{status:"用户名或密码错误"}]});var i=n('input[name="username"]').val(),t=n('input[name="psw"]').val();n.ajax({url:"http://g.cn",type:"POST",data:{userid:i,password:t},success:function(s){alert("登陆成功"),n(window).attr("location","index.html")},error:function(n){alert("登陆失败")}})})})})});