require.config({baseUrl:"./",paths:{jquery:"js/jquery1.8.3",mock:"http://mockjs.com/dist/mock"}}),require(["jquery"],function(e){e("#top").load("login.html #top .top-con"),e("#footer-out").load("login.html #footer-out .footer"),e("#footer-service").load("login.html #footer-service .service-con"),e("#footer-copyright").load("login.html #footer-copyright p"),e("#search1").click(function(){e(this).parent().css("display","none").siblings(".search0").css("display","block")}),e("#search0").click(function(){e(this).parent().parent().css("display","none").siblings(".search").css("display","block")}),e(".search0 .left .select dd ul").hide(),e(".select dd").click(function(){e(this).children("ul").toggle()}),e(".select dd ul li").click(function(){console.log(e(this).html()),e(this).parent().parent().children("input").val(e(this).html())}),require(["mock"],function(o){o.mock("http://g.cn",{"goods|5":[{"id|1-5":1,"price|30-200":20,info:"商品的描述信息一些描述信息商品的描述信息一些描述信息",shop:"店铺名",size:"155/S/95","nowPrice|100-200":10,"oldPrice|200-300":10,"num|1-10":1,color:"@color"}]}),e.ajax({url:"http://g.cn",dataType:"json"}).done(function(o,t,n){if(0===o.goods.length)(c=document.createElement("tbody")).innerHTML="暂无交易信息",e(c).css({"text-align":"center","font-size":"30px",width:"100%","text-align":"center"}),e("table").append(c);else for(var i=0;i<o.goods.length;i++){var c=document.createElement("tbody");c.innerHTML="<span></span>",e("table .tb").append(c)}})}),e(".myorder-tit ul").on("click","li",function(){e(this).addClass("hover").siblings().removeClass("hover")})});