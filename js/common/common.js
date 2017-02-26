/**
 * Created by likangshao on 2017/2/26.
 */
define(['jquery'],function(){
    $('.navs .list-unstyled .nav a').on('click',function(){
        $(this).next().stop().slideToggle();
    })
})
