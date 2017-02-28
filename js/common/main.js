/**
 * Created by likangshao on 2017/2/25.
 */
requirejs.config({
    baseUrl:'/',
    paths: {
        //���������·������
        jquery:'lib/jquery/jquery.min',
        bootstrap:'lib/bootstrap/js/bootstrap.min',
        jqueryCookie:'lib/jquery-cookie/jquery.cookie',
        nprogress: 'lib/nprogress/nprogress',
        // �Լ�д��·������
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

//����ģ��
require(['jquery','bootstrap','common']);

// �����������ٶȿ���ҳ���������������js�����Ӻ�
require(['nprogress'], function (nprogress) {
    nprogress.start()
});

/*
 *�����ȡҳ���pathname��Ȼ���Ӧ�ļ���js��
 * */
(function(window) {
    //���·��
    var pathname = window.location.pathname;
    /**
     * �жϵ�¼״̬��
     *  1�������¼ҳ��
     *      1.1����SESSID����ת����ҳ
     *      1.2��û��SESSID����������
     *  2����������ҳ��
     *      2.1����SESSID����������
     *      2.2��û��SESSID����ת����¼ҳ��
     */
    require(['jquery','jqueryCookie'],function($,undefined){
        var sessID= $.cookie('PHPSESSID');
        //��¼ǰ���ж�
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