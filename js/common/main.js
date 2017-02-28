/**
 * Created by likangshao on 2017/2/25.
 */
requirejs.config({
    baseUrl:'/',
    paths: {
        //第三方库的路径配置
        jquery:'lib/jquery/jquery.min',
        bootstrap:'lib/bootstrap/js/bootstrap.min',
        jqueryCookie:'lib/jquery-cookie/jquery.cookie',
        nprogress: 'lib/nprogress/nprogress',
        // 自己写的路径配置
        userList: 'js/user/list',
        userProfile: 'js/user/profile',
        common:'js/common/common',
        login:'js/home/login',
        index:'js/index'
    },
    shim:{
        bootstrap:{
            deps:['jquery']
        },
       /* jqueryCookie:{
            deps:['jquery']
        }*/
    }
});

//加载模块
require(['jquery','bootstrap','common']);

// 优先以最快的速度开启页面进度条，其他的js加载延后。
require(['nprogress'], function (nprogress) {
    nprogress.start()
});

/*
 *这里获取页面的pathname，然后对应的加载js。
 * */
(function(window) {
    //获得路径
    var pathname = window.location.pathname;
    /**
     * 判断登录状态：
     *  1、请求登录页面
     *      1.1、有SESSID，跳转到主页
     *      1.2、没有SESSID，不做操作
     *  2、请求其它页面
     *      2.1、有SESSID，不做操作
     *      2.2、没有SESSID，跳转到登录页面
     */
    require(['jquery','jqueryCookie'],function($,undefined){
        var sessID= $.cookie('PHPSESSID');
        //登录前作判断
        if(pathname==='/html/home/login.html' && sessID){
            location.href='/';
        }else if(pathname!=='/html/home/login.html' && !sessID){
            location.href='/html/home/login.html';
        }

        switch(pathname) {
            case '/html/user/list.html':
                require(['userList']);
                break;
            case '/html/user/profile.html':
                require(['userProfile']);
                break;
            case '/html/home/login.html':
                require(['login']);
                break;
        }
    })


})(window);