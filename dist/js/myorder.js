require.config({baseUrl:"./",paths:{jquery:"js/jquery1.8.3",mock:"http://mockjs.com/dist/mock"}}),require(["jquery"],function(s){s("#top").load("login.html #top .top-con"),s("#footer-out").load("login.html #footer-out .footer"),s("#footer-service").load("login.html #footer-service .service-con"),s("#footer-copyright").load("login.html #footer-copyright p"),s("#search1").click(function(){s(this).parent().css("display","none").siblings(".search0").css("display","block")}),s("#search0").click(function(){s(this).parent().parent().css("display","none").siblings(".search").css("display","block")}),s(".search0 .left .select dd ul").hide(),s(".select dd").click(function(){s(this).children("ul").toggle()}),s(".select dd ul li").click(function(){console.log(s(this).html()),s(this).parent().parent().children("input").val(s(this).html())}),require(["mock"],function(o){o.mock("http://g.cn",{"goods|5":[{"id|1-5":1,"price|30-200":20,info:"商品的描述信息一些描述信息商品的描述信息一些描述信息",shop:"店铺名",size:"155/S/95","nowPrice|100-200":10,"oldPrice|200-300":10,"num|1-10":1,color:"颜色",date:'@DATETIME("yyyy-MM-dd HH:mm:ss")'}]}),s.ajax({url:"http://g.cn",dataType:"json"}).done(function(o,t,e){if(0===o.goods.length)(a=document.createElement("tbody")).innerHTML="暂无交易信息",s(a).css({"text-align":"center","font-size":"30px",width:"100%","text-align":"center"}),s("table").append(a);else{console.log(o.goods[c]);for(var c=0;c<o.goods.length;c++){var n=document.createElement("tbody");n.className="block",n.innerHTML='<tbody class="block"> <tr><td></td></tr> </tbody>';var a=document.createElement("tbody");a.innerHTML='<tr class="tbody-tit"> <td colspan="2"> <input type="checkbox" name="chosed" class="chose"/> <span>订单号<b>'+o.goods[c].date+'</b></span> </td> <td class="store" colspan="2"> <a href="#">'+o.goods[c].shop+'</a> </td> <td class="time" colspan="3"> <span>下单时间<b>'+o.goods[c].date+'</b></span> </td> </tr><tr class="tbody-con"> <td colspan="4" class="td1"> <div class="goods last-goods"> <div class="goods-pic"> <img src="img/'+o.goods[c].id+'.jpg" /> </div> <div class="goods-text"> <h4>'+o.goods[c].info+'</h4> <p> <span class="size">尺码:<b>'+o.goods[c].size+'</b></span> <span class="color">颜色分类:<b>'+o.goods[c].color+'</b></span> </p> <p class="icons"> <i class="zhi"></i> <i class="zhen"></i> <i class="zheng"></i> </p> </div> <div class="solo-price"> <p class="now-p">￥<span>'+o.goods[c].nowPrice+'</span></p> <p class="old-p">￥<span>'+o.goods[c].oldPrice+'</span></p> </div> </div> </td> <td class="td2"> <p class="price">￥<span>'+o.goods[c].nowPrice+'</span></p> <p class="kuaidi">（含快递：<b>0.00</b>元）</p> </td> <td class="td3"> <a href="#">待付款</a> <a href="#">查看订单</a> </td> <td class="td4"> <input type="button" value="立即支付" name="paynow" /> <a href="#">取消订单</a> </td> </tr>',s("table").append(n),s("table").append(a)}}}).done(function(){s.ajax({type:"post",url:"http://g.cn",async:!0})})}),s(".myorder-tit ul").on("click","li",function(){s(this).addClass("hover").siblings().removeClass("hover")}),s(".choseall").click(function(){s(".chose").prop("checked",s(this).prop("checked")),s(".choseall").prop("checked",s(this).prop("checked"))})});