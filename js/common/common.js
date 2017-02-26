/**
 * Created by likangshao on 2017/2/26.
 */
define(['jquery'],function(){
    $('.navs .list-unstyled .nav a').on('click',function(){
        $(this).next().stop().slideToggle();
    })

    $.ajax({
        url: '/v6/login',
        type: 'post',
        data: {
            tc_name: 123456,
            tc_pass: 123456
        },
        success: function() {
            console.log('≥…¡À')
        },
        error: function() {
            console.log('∞‹¡À')
        }
    });
})
