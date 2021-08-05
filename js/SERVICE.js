$(document).ready(function() {
    $('.service_left li').click(function() {
        $(this).find('a').toggleClass('on').parent().siblings().find('a').removeClass('on');
    })
    $('.SER_MSG').click(function() {
        $('.service_left li').find('a').eq(2).toggleClass('on').parent().siblings().find('a').removeClass('on');
    })
    $('.SER_QnA').click(function() {
        $('.service_left li').find('a').eq(3).toggleClass('on').parent().siblings().find('a').removeClass('on');
    })
    $('.SER_PRO').click(function() {
        $('.service_left li').find('a').eq(4).toggleClass('on').parent().siblings().find('a').removeClass('on');
    })
})