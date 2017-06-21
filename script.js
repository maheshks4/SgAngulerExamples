$(document).ready(function(){
	alert('Welcome to StarSearch!');
});

$(document).ready(function(){
	alert($('#bodycontent tr').length + ' elements!');
	var fontsize=$('#celebs tbody tr:first').css('fontSize');
	console.log(fontsize);
	console.log($('#bodycontent'));
});


$(document).ready(function(){
	$('#toggleButton').click(function(){
		if ($('#disclaimer').is(':visible'))
		{
			$('#disclaimer').hide();
			$('#toggleButton').val('Show');
		}
		else
		{
			$('#disclaimer').show();
			$('#toggleButton').val('Hide');
		}
		});
		
		$('#toggleSlideButton').click(function(){
			$('#disclaimer').slideToggle('slow');
		
		});
		
		
	
	$("#txtcomments").keyup(function(){
		
		var len = $(this).val().length;
		var str = $(this).val();
				
		 if (len > 20) {
			 $('#txtcomments').val(str.substring(0, 20));
			  $(this).css("background-color","Red");
			 
        } else {
          $("#count").text("Characters left: " + (20 - $(this).val().length));
		  	  $(this).css("background-color","green");
        }
  
	});

		
});

$(document).ready(function(){
  $.getJSON('http://feeds.delicious.com/v2/json/tag/celebs?callback=?', 
    function(data) {
      alert('Fetched ' + data.length + ' items!');
	  console.log(data) ;
    });
});
      
	  
$(document).ready(function(){

  $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?tags=paris&tagmode=any&format=json&jsoncallback=?",
        function(data){
          $.each(data.items, function(i,item){
            $("<img/>")
			.attr("src", item.media.m)
			.appendTo("#images")
			.fadeIn();
    
          });
        });
});