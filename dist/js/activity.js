require.config({baseUrl:"./",paths:{jquery:"js/jquery1.8.3"}}),require(["jquery"],function(o){o(function(){o("#top").load("login.html #top .top-con"),o("#footer-out").load("login.html #footer-out .footer"),o("#footer-service").load("login.html #footer-service .service-con"),o("#footer-copyright").load("login.html #footer-copyright p"),o("#sec-ipt").focus(function(){o(this).css({color:"#000"}),"商品/店铺/品牌"===o(this).val()&&o(this).val("")}),o("#sec-ipt").blur(function(){""===o(this).val()&&(o(this).val("商品/店铺/品牌"),o(this).css({color:"#ccc"}))}),o("#scroll-up").click(function(){o("html").animate({scrollTop:0},500)})})});