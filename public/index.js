$(document).on("ready", function(){

	//$(".name").on("click", function(){
     //$(".name").removeClass("active")
     //$(this).addClass("active")
     //$(this).highlight("active")
//})

//$(".name").hover(function() {               
     // $(this).addClass('highlight');  
   //}, function() {  
   //   $(this).removeClass('highlight');  
 //})




	var templateremedy = Handlebars.compile($("#right-side").html() )
	
	$.ajax({
	  url: "/remedy",
	  method: "GET",
	  data: {
	  },
	  success: function(remedies) {
	  	var htmlString = templateremedy(remedies)
	  	$("#right").append( htmlString )
	  }
      
	})

    var templateleft = Handlebars.compile( $("#left-side").html() )
   
   	$.ajax({
	  url: "/remedy",
	  method: "GET",
	  data: {

	  },
	  success: function(data) { 
	  	_.each(data.remedies, function(data){
	  		var htmlString = templateleft(data)
		  	$("#left").append( htmlString )
	  	})
	  	
	  } 
    
    })

$(".hide").hide();
$(".name.active").show();

$(".name").click(function(){
$(".hide").slideToggle();
 }) 

})





