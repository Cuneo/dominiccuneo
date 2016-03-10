$(document).ready(function(){

	// jQuery Form Processor
	$('#emailform').submit(function(e){
		// grab the form. Use the form id
		var form = $('#emailform');

		// send form data to mailer.php
		$.ajax({
			type: 'POST',
			url: form.attr('action'),
			data: form.serialize(),
			success: function(ajaxOutput) {
				// clear the output area's formatting
				$("#output-area").css("display", "");

				// write the server's reply to the output area
				$("#output-area").html(ajaxOutput);

				// reset the form if it was successful
				if($(".alert-success").length >= 1) {
					$("#emailform")[0].reset();
				}
			}
		});
		e.preventDefault();
	});// end jQuery Form Processor

});/*end document.ready()*/