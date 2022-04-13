$(document).ready(function() {
	var modal_status = 0; //默认隐藏
	$('#modal-video').on('hidden.bs.modal', function(e) {
		modal_status = 0;
		$('#open1-video').trigger('pause');
	})
	$('#modal-video').on('show.bs.modal', function(e) {
		modal_status = 1;
		$('#open1-video').trigger('play');
	})
});
var modal_status2 = 0; //默认隐藏
	$('#modal-video-2').on('hidden.bs.modal', function(e) {
		modal_status2 = 0;
		$('#open2-video').trigger('pause');
	})
	$('#modal-video-2').on('show.bs.modal', function(e) {
		modal_status2 = 1;
		$('#open2-video').trigger('play');
	})