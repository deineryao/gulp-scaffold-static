$(function(){
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
	$('.news > .selector > span[class!=more] > a').on('click', function(e){
	  e.preventDefault();

    $('.news > .selector > span[class!=more]').removeClass('active');
    $(this).parent().addClass('active');
    
    var dataTag = $(this).attr('data-tag');
    
    $(".news > .content").hide();
    $("#" + dataTag).show();
	});
	
	$('a[data-tag=news]').click();


    //点击预约
    $("#order-submit").click(function(){
        alert('预约手机号：'+$('#order-mobile').val());
    });
     
    //动画
    $('.first-page .person').addClass('fadeRight');
    $('.first-page .person > div').hide();
    setTimeout(function(){
        $('.first-page .person .name-1').show().addClass('imgAnimation1');
    },500);
    setTimeout(function(){
        $('.first-page .person .name-2').show().addClass('imgAnimation2');
    },500);
    setTimeout(function(){
        $('.first-page .person .name-3').show().addClass('imgAnimation3');
    },500);
})