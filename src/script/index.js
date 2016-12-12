$(function(){
    //获取url修改footer
    var BaseUrl = window.location.href;
    if(/^.*g.baidu.com.*$/.test(BaseUrl)){
        $('.footer .baidu').show();
        $('.footer .zitong').hide();
    }

    // 特色轮播特效
	var teseSwiper = $('.tese-carousel').swiper({
		loop: true,
		autoplay: 3000,
		autoplayDisableOnInteraction: false,
		pagination: '.pagination',
    	paginationClickable: true
	});
    // 新闻轮播特效
	var newsSwiper = $('.news-carousel').swiper({
		loop: true,
		autoplay: 3000,
		autoplayDisableOnInteraction: false,
		pagination: '.pagination2',
    	paginationClickable: true
	});
    // 为切换Tab页绑定事件
	$('.news > .selector > .comn > a').on('click', function(e){
	    e.preventDefault();
        $('.news > .selector > .comn').removeClass('active');
        $(this).parent().addClass('active');
        
        var dataTag = $(this).attr('data-tag');
        
        $(".news > .content,.more").hide();
        $("#" + dataTag).show();
        $(".more-" + dataTag).show();
	});
	
	$('a[data-tag=news]').click();


    //点击预约
    $("#order-submit").click(function(){
        var mobile = $('#order-mobile').val();
        if(!mobile){
            $('.error').text('请输入手机号');
            return;
        }
        if(!mobile.match(/^1\d{10}$/)){
	        $('.error').text('您填写的手机格式不正确');
            return;
        }

        //成功之后处理
        $('#order-mobile').val('');
        $('.error').text('');
        $('#showOrderSucPop').show();
    });
    $('.close').click(function(){
        $('.order-pop').hide();
    })

    $('#order-mobile').focus(function(){
        $('.error').text('');
    })

    //侧边栏收起拉开
    $('.left-bar').click(function(){
        $('.qr-bar').animate({"right":"-188px"},function(){
            $('.left-bar-back').show();
        })
    });
    $('.left-bar-back').click(function(){
        $(this).hide();
        $('.qr-bar').animate({"right":"0px"});
    });
})