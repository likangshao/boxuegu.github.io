/**
 * Created by likangshao on 2017/3/1.
 */

define([],{
    //获取指定的查询字符串
    getQueryString:function(key){
        // 去掉字符串首字母?号
            // slice：方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。
            // location.search:返回路径请求的参数，打印可知道
        var search=location.search.slice(1);
        // 使用&符号得到每一个key=val
            //split：把一个字符串分割成字符串数组。
        var searchArr=search.split('&');
        var tempArr=null;
        var searchObj={};
        // 遍历数组中的每一个key=val字符串，使用=号分割开，
        // 然后以key为名，val为值添加到searchObj对象中。
        for( var i =0, len = searchArr.length; i < len; i++) {
            tempArr = searchArr[i].split('=');
            searchObj[ tempArr[0] ] = tempArr[1];
        }

        // 有参数返回指定值，没有参数返回全部值
        return arguments.length? searchObj[key]: searchObj;
    },
    extend:function(){

    }
})
