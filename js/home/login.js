define(['jquery','jqueryCookie'], function($,undefined) {

	//用户退出登录时，把历史登录的头像获取到登录界面
	var userInfo=null;
	try{
		userInfo=JSON.parse($.cookie('userInfo'));
	}catch(e){
		userInfo={};
	}
	$('.login .avatar img').attr('src',userInfo.tc_avatar ? userInfo.tc_avatar : '/img/default.png');

	/*
	 * 1、先监听form表单的提交事件，
	 * 2、事件回调中return false阻止默认的提交
	 * 3、事件回调中通过ajax的方式发送表单数据
	 * 4、如果返回结果中的code为200，证明登陆成功，跳转到首页
	 * */
	$('#form-login').on('submit',function(){
		$.ajax({
			url: '/v6/login',
			type: 'post',
			//将数据序列化
			data: $(this).serialize(),
			/*data: {
				tc_name:$('#form-login input').first().val(),
				tc_pass:$('#form-login input').last().val()
			},*/
			success: function(data) {
				if(data.code===200){
					$.cookie('userInfo',JSON.stringify(data.result),{path:'/'});
					location.href='/';
				}
			}
		});
		return false;
	})
});
