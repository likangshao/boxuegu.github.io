/**
 * Created by likangshao on 2017/3/1.
 */

define([],{
    //��ȡָ���Ĳ�ѯ�ַ���
    getQueryString:function(key){
        // ȥ���ַ�������ĸ?��
            // slice����������ȡ�ַ�����ĳ�����֣������µ��ַ������ر���ȡ�Ĳ��֡�
            // location.search:����·������Ĳ�������ӡ��֪��
        var search=location.search.slice(1);
        // ʹ��&���ŵõ�ÿһ��key=val
            //split����һ���ַ����ָ���ַ������顣
        var searchArr=search.split('&');
        var tempArr=null;
        var searchObj={};
        // ���������е�ÿһ��key=val�ַ�����ʹ��=�ŷָ��
        // Ȼ����keyΪ����valΪֵ��ӵ�searchObj�����С�
        for( var i =0, len = searchArr.length; i < len; i++) {
            tempArr = searchArr[i].split('=');
            searchObj[ tempArr[0] ] = tempArr[1];
        }

        // �в�������ָ��ֵ��û�в�������ȫ��ֵ
        return arguments.length? searchObj[key]: searchObj;
    },
    extend:function(){

    }
})
