require.config({baseUrl:"./",paths:{jquery:"js/jquery1.8.3",mock:"http://mockjs.com/dist/mock"}}),require(["jquery"],function(o){o("#top").load("login.html #top .top-con"),o("#footer-service").load("login.html #footer-service .service-con"),o("#footer-copyright").load("login.html #footer-copyright p"),o("#footer-icon").load("login.html #footer-icon a"),o("#footer-out").load("login.html #footer-out .footer"),require(["mock"],function(s){s.mock("http://g.cn",{"goods|5":[{"id|1-5":1,"price|30-200":20,info:"商品的描述信息一些描述信息商品的描述信息一些描述信息",shop:"店铺名",size:"155/S/95","nowPrice|100-200":10,"oldPrice|200-300":10,"num|1-10":1,color:"@color"}]}),o.ajax({url:"http://g.cn",dataType:"json"}).done(function(s,c,e){console.log(s.goods);for(var a=0;a<s.goods.length;a++){var t=s.goods[a].id+".jpg",n=document.createElement("table");n.innerHTML='<table><thead><tr><td colspan="8"><input type="checkbox" checked="checked" class="chose" name="chose" id="chose" /><a href="#">'+s.goods[a].shop+'</a></td></tr></thead><tbody><tr><td class="ischeck"><input type="checkbox" name="ischecked" checked="checked" value="" id=""/></td><td class="goods-info"><dl><dt><a href="#"><img src="img/'+t+'" /></a></dt><dd><p class="info-text">'+s.goods[a].info+'</p><p class="bz"><span class="jian"></span><span class="zhen"></span><span class="zheng"></span></p></dd></dl></td><td class="color-size"> <span>尺码：<b>'+s.goods[a].size+"</b></span> <span>颜色分类：<b>"+s.goods[a].color+'</b></span> </td> <td class="price"><span class="now-p">￥<b>'+s.goods[a].nowPrice+'</b></span><span class="old-p">￥<b>'+s.goods[a].oldPrice+'</b></span></td><td class="goods-num"><div class="num-box"><span class="differ"></span><input type="text" value="1" name="goods-num" class="goos-num"/><span class="add"></span></div></td><td class="cx"><p>满100减30</p></td><td class="price0"><span>￥<b>'+s.goods[a].nowPrice+'</b></span></td><td class="cz"><a href="#" class="move">移入收藏夹</a><a href="#" class="delete">删除</a></td></tr></tbody></table>',o("#shopcart .shopcart-con .shopcart-con0").append(n)}o(".num-box .add").click(function(){var s=parseInt(o(this).siblings(".goos-num").val())+1;o(this).siblings(".goos-num").val(s)}),o(".num-box .differ").click(function(){var s=parseInt(o(this).siblings(".goos-num").val())-1;s<1&&(s=1),o(this).siblings(".goos-num").val(s)})})})});