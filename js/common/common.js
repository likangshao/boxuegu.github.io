/**
 * Created by likangshao on 2017/2/26.
 */
define(['jquery'],function($){
    $('.nav a').click(on,function(){
        $(this).next().slideToggle();
    })
})
