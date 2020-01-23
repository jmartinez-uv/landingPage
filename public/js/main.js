$(document).ready(function(){	
	$("#email").keyup(function(){
		if($('#email').val() != '' ) {
			$('#email-label').css('visibility','visible');
			if($('#email')[0].checkValidity() == false) {
	    		$('.invalid').css('display','list-item');
	    	} else {
	    		$('.invalid').css('display','none');
	    	}
		} else {
	    	$('.invalid').css('display','none');
	    	$('#email-label').css('visibility','hidden');
	    }  
	});
});