
$(document).ready(function() {
    // load last written entry on default
    $.ajax({
        url : "week11.html",
        dataType: "text",
        success : function (data) {
            $(".text").html(data);
        }
    });
	$('.menubutton').click(function() {
		var id = $(this).attr('id');
	    $.ajax({
	        url : id,
	        dataType: "text",
	        success : function (data) {
	            $(".text").html(data);
	        }
	    });
	});
}); 
