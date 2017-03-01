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
        template: 'lib/artTemplate-3.0.1/template',
        datepicker: 'lib/bootstrap-datepicker/js/bootstrap-datepicker',
        datepickerLanguage: 'lib/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',

        // �Լ�д��·������
        userList: 'js/user/list',
        userProfile: 'js/user/profile',
        common:'js/common/common',
        login:'js/home/login',
        index:'js/index',
        courseAdd:'js/course/add',
        courseAddStep1:'js/course/add_step1',
        courseAddStep2:'js/course/add_step2',
        courseAddStep3:'js/course/add_step3',
        courseCategory:'js/course/category',
        courseCategoryAdd:'js/course/category_add',
        courseList:'js/course/list',
        courseTopic:'js/course/topic',
        repass: 'js/home/repass',
        settings: 'js/home/settings',
        teacherAdd: 'js/teacher/add',
        teacherList: 'js/teacher/list',
        userList: 'js/user/list',
        userProfile: 'js/user/profile',
        common: 'js/common/common',
        util:'js/common/util'
    },
    shim:{
        bootstrap:{
            deps:['jquery']
        },
        datepickerLanguage:{
            deps:['jquery','datepicker']
        }
    }
});

// �����������ٶȿ���ҳ���������������js�����Ӻ�
require(['nprogress'], function (nprogress) {
    nprogress.start()
});

//����ģ��
require(['jquery','bootstrap','common']);

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
            case '/html/teacher/add.html':
                require(['teacherAdd']);
                break;
            case '/html/teacher/list.html':
                require(['teacherList']);
                break;
            /*course*/
            case '/html/course/add.html':
                require(['courseAdd']);
                break;
            case '/html/course/add_step1.html':
                require(['courseAddStep1']);
                break;
            case '/html/course/add_step2.html':
                require(['courseAddStep2']);
                break;
            case '/html/course/add_step3.html':
                require(['courseAddStep3']);
                break;
            case '/html/course/category.html':
                require(['courseCategory']);
                break;
            case '/html/course/category_add.html':
                require(['courseCategoryAdd']);
                break;
            case '/html/course/list.html':
                require(['courseList']);
                break;
            case '/html/course/topic.html':
                require(['courseTopic']);
                break;
            /*home*/
            case '/html/home/login.html':
                require(['login']);
                break;
            case '/html/home/repass.html':
                require(['repass']);
                break;
            case '/html/home/settings.html':
                require(['settings']);
                break;
            case '/':
                require(['index']);
                break;
        }
    })


})(window);