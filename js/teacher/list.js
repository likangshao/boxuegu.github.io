define(['jquery', 'common', 'nprogress','template'], function($, undefined, nprogress,template) {

	// 该页所有的js加载完毕，进度条结束。
	nprogress.done();

	//渲染讲师列表
	$.get('/v6/teacher',function(data){
		if(data.code==200){
			var html=template('teacher-list-tpl',{list:data.result});
			$('#teacher-list-tbody').html(html);
		}
	});

	//通过事件委托的方式给动态生成的a标签绑定点击事件，
	//然后获取讲师的详细信息并展示
	$('#teacher-list-tbody').on('click','.teacher-view',function(){
		console.log('获取前');
		$.get('/v6/teacher/view',{
			tc_id:$(this).parent().attr('data-id')
		},function(data){
			console.log('获取后');
			if(data.code==200){
				var html=template('teacher-view-tpl',data.result);
				$('#teacherModal').html(html);
				console.log('展示');
			}
		})
	})

});