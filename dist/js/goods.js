require.config({baseUrl:"./",paths:{jquery:"js/jquery1.8.3",mock:"http://mockjs.com/dist/mock",page:"js/page"},shim:{page:{deps:["jquery"]}}}),require(["jquery"],function(s){s(function(){require(["mock"],function(i){i.mock("http://g.cn",{"src|138":[{"id|1-5":1,"price|30-200":20}]}),s.ajax({url:"http://g.cn",dataType:"json"}).done(function(i,c,o){for(var a=0;a<13;a++){var e=i.src[a].id+".jpg",n=i.src[a].price,l=document.createElement("div");l.className="goods-box",l.innerHTML='<div class="goods"><div class="goods-pic"><img src="img/'+e+'" /></div><div class="goods-text"><p class="tit"><a href="#">裙裙欲动 欧美2015夏天气质夏裙连衣裙女</a></p><p class="store-name"><a href="#">裙裙旗舰店</a></p><p class="jia">￥<span>'+n+'</span></p></div><div class="hover-box"><a href="#" class="buy">立即购买</a><a href="#" class="shou">加入收藏</a></div></div>',s("#main-box .main").append(l)}require(["page"],function(){console.log(i.src.length);var c=Math.ceil(i.src.length/13);s(".pageTest").page({leng:c,activeClass:"activP",clickBack:function(o){var a=13*(o-1),e=13*o;if(o===c)e=i.src.length;s("#main-box .main").empty();for(var n=a;n<e;n++){console.log(n);var l=i.src[n].id+".jpg",t=i.src[n].price,d=document.createElement("div");d.className="goods-box",d.innerHTML='<div class="goods"><div class="goods-pic"><img src="img/'+l+'" /></div><div class="goods-text"><p class="tit"><a href="#">裙裙欲动 欧美2015夏天气质夏裙连衣裙女</a></p><p class="store-name"><a href="#">裙裙旗舰店</a></p><p class="jia">￥<span>'+t+'</span></p></div><div class="hover-box"><a href="#" class="buy">立即购买</a><a href="#" class="shou">加入收藏</a></div></div>',s("#main-box .main").append(d)}}})})})}),s("#topbg").load("index.html #topbg .top"),s("#navbg").load("index.html #navbg .nav"),s("#footer-about").load("index.html #footer-about .foot-about-con"),s("#footer-copy").load("index.html #footer-copy .foot-copy-con"),require(["js/index-top"],function(s){}),s("#dev-down .dev-down-con .down").click(function(){s(this).css("display","none").siblings(".up").css("display","block"),s("#seach-items .hide").css("display","block")}),s("#dev-down .dev-down-con .up").click(function(){s(this).css("display","none").siblings(".down").css("display","block"),s("#seach-items .hide").css("display","none")}),s("dl .more-btn").click(function(){s(this).css("display","none").siblings(".close-btn").css("display","block")}),s("dl .close-btn").click(function(){s(this).css("display","none").siblings(".more-btn").css("display","block")}),s("dl .more-btn").click(function(){s(this).siblings(".search_single").css("display","none").siblings(".search_all").css("display","block")}),s("dl .close-btn").click(function(){s(this).siblings(".search_all").css("display","none").siblings(".search_single").css("display","block")})})});