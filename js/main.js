setInterval(function(){
    $('#full img').eq(0).clone().appendTo($('#full'))
    $('#full img').eq(0).remove();
    $('#full img').eq(0).removeClass('hide').addClass('show').siblings().removeClass('show').addClass('hide')
},6000)
$('.img1').click(function(){
    $('.ppt').removeClass('ppt_s');
    $('.img_1').addClass('ppt_s');
})
$('.img2').click(function(){
    $('.ppt').removeClass('ppt_s');
    $('.img_2').addClass('ppt_s');
})
$('.img3').click(function(){
    $('.ppt').removeClass('ppt_s');
    $('.img_3').addClass('ppt_s');
})