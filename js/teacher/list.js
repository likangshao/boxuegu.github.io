define(['jquery', 'common', 'nprogress','template'], function($, undefined, nprogress,template) {

	// ��ҳ���е�js������ϣ�������������
	nprogress.done();

	//��Ⱦ��ʦ�б�
	$.get('/v6/teacher',function(data){
		if(data.code==200){
			var html=template('teacher-list-tpl',{list:data.result});
			$('#teacher-list-tbody').html(html);
		}
	});

	//ͨ���¼�ί�еķ�ʽ����̬���ɵ�a��ǩ�󶨵���¼���
	//Ȼ���ȡ��ʦ����ϸ��Ϣ��չʾ
	$('#teacher-list-tbody').on('click','teacher-view',function(){
		$.get('/v6/teacher/view',{
			tc_id:$(this).parent().attr('data-id')
		},function(data){
			if(data.code==200){
				var html=template('teacher-list-tpl',data.result);
				$('#teacherModal').html(html);
			}
		})
	})

});