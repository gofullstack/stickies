$(document).ready(function () {
	console.log($('#domain-form'));
	
	
	$('#domain-form').submit(function(){
		
		$('#domain-form').validate();
		
		var data = dojo.formToJson('domain-form');
		jQuery.post(
			$('#domain-form').attr('action'),
			data
		);
		return false;
	});
});