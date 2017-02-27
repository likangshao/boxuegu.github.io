define(['jquery','jqueryCookie'], function($,undefined) {
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
				tc_name:$('#form-login input:first').val(),
				tc_pass:$('#form-login input:last').val()
			},*/
			success: function(data) {
				if(data.code===200){
					$.cookie('userInfo',JSON.stringify(data.result),{paths:'/'})
					location.href='/';
				}
			}
		});
		return false;
	})
});
