$(document).ready(function($) {
    var mySwiper = new Swiper ('.swiper-container', {
        loop:true,
        direction : 'vertical',
        mousewheelControl : true,
        onInit: function(swiper){
            swiperAnimateCache(swiper);
            swiperAnimate(swiper);
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper);
        }   
    });

    var $btn = $('#btn');
    var pattern = /^1[3|4|5|8][0-9]\d{8}$/;
    $btn.on('click', function(){
        var $connect = $('#connect').val();
        var $phone = $('#phone').val();
        if(!$connect){
            alert('机构名称或联系人不能为空');
        }else if (!$phone) {
            alert('手机号不能为空');
        }else if(!pattern.test($phone)){
            alert('手机号不合法');
        }else{
            // alert('验证成功');
            var params = {
                name: $connect,
                phone: $phone
            };

            $.ajax({
                url: 'https://www.easy-mock.com/mock/59b4284fe0dc663341a3a6d3/example/res',
                type: 'POST',
                data: params,
                success: function(res){
                    if (res.success) {
                        alert('申请成功');
                        $('#connect').val('');
                        $('#phone').val('');
                    }else{
                        alert('申请失败');
                    }
                },
                error: function() {
                  /* Act on the event */
                }
            });
            
        }
    });

});