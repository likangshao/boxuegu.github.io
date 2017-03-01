define(['jquery', 'common', 'nprogress'], function($, undefined, nprogress) {

	// ��ҳ���е�js������ϣ�������������
	nprogress.done();

	// ��ӽ�ʦ
	$('#teacher-add-form').on('submit',function(){
		$.ajax({
			url:'/v6/teacher/add',
			type:'post',
			data:$(this).serialize(),
			success:function(data){
				if(data.code==200){
					location.href='/html/teacher/list.html';
				}
			}
		})
		return false;
	});
});