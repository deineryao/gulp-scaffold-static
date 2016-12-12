//获取url修改footer
var BaseUrl = window.location.href;
if(/^.*g.baidu.com.*$/.test(BaseUrl)){
    $('.footer .baidu').show();
    $('.footer .zitong').hide();
}
//预约弹窗

$('.order-btn').click(function(){
    $('#pop-mobile').val('');
    $('.error').text('');
    $('#showOrderPop').show();
});

$('.close,.cancel').click(function(){
    $('.order-pop').hide();
})

$('.ensure').click(function(){
    var mobile = $('#pop-mobile').val();
    if(!mobile){
        $('.error').text('请输入手机号');
        return;
    }
    if(!mobile.match(/^1\d{10}$/)){
        $('.error').text('您填写的手机格式不正确');
        return;
    }

    //成功之后处理
    $('#showOrderPop').hide();
    $('#showOrderSucPop').show();
})