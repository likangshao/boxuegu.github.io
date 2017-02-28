define(['jquery','jqueryCookie'], function($,undefined) {

	//�û��˳���¼ʱ������ʷ��¼��ͷ���ȡ����¼����
	var userInfo=null;
	try{
		userInfo=JSON.parse($.cookie('userInfo'));
	}catch(e){
		userInfo={};
	}
	$('.login .avatar img').attr('src',userInfo.tc_avatar ? userInfo.tc_avatar : '/img/default.png');

	/*
	 * 1���ȼ���form�����ύ�¼���
	 * 2���¼��ص���return false��ֹĬ�ϵ��ύ
	 * 3���¼��ص���ͨ��ajax�ķ�ʽ���ͱ�����
	 * 4��������ؽ���е�codeΪ200��֤����½�ɹ�����ת����ҳ
	 * */
	$('#form-login').on('submit',function(){
		$.ajax({
			url: '/v6/login',
			type: 'post',
			//���������л�
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
