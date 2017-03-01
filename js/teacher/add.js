define(['jquery', 'common', 'nprogress'], function($, undefined, nprogress) {

	// 该页所有的js加载完毕，进度条结束。
	nprogress.done();

	// 添加讲师
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