/**
 * Created by likangshao on 2017/2/26.
 */
define(['jquery','jqueryCookie'],function($,undefined){
    //左侧导航下拉列表
    $('.navs .list-unstyled .nav a').on('click',function(){
        $(this).next().stop().slideToggle();
    });

    //退出登录
    $('#logout').on('click',function(){
        $.post('/v6/logout', function(data) {
            if(data.code == 200) {
                location.href = '/html/home/login.html';
            }
        });
    });

    // 获取本地cookie用户信息，同时做容错处理
    var userInfo=null;
    try{
        userInfo= JSON.parse($.cookie('userInfo'));
    }catch(e){
        userInfo={};
    }

    //将用户信息展示到侧栏
    $('.aside .profile h4').html(userInfo.tc_name? userInfo.tc_name: 'dagenimeiminga');
    $('.aside .profile img').attr('src', userInfo.tc_avatar? userInfo.tc_avatar: '/img/default.png');

})
