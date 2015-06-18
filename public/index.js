$(document).on("ready", function(){

	$(".name").on("click", function(){
     $(".name").toggle("active")
    // $(this).addClass("active")
     //$(this).highlight("active")
})

//$(".name").hover(function() {               
     // $(this).addClass('highlight');  
   //}, function() {  
   //   $(this).removeClass('highlight');  
 //})


//var templateremedy = Handlebars.compile($("#right-side").html() )
	
	//$.ajax({
	 // url: "/remedy",
	 // method: "GET",
	 // data: {
	  //},
	  //success: function(remedies) {
	  //	var htmlString = templateremedy(remedies)
	  //	$("#right").append( htmlString )
	 // }
      
	//})

    var templateleft = Handlebars.compile( $("#left-side").html() )
   
   	$.ajax({
	  url: "/remedy",
	  method: "GET",
	  data: {

	  },
	  success: function(data) { 
	  	_.each(data.remedies, function(data){
	  	console.log(data)
	  	var htmlString = templateleft(data)
	  		$("#left").append( htmlString )
	  	})

	  var $prev = $("#prevention").text()
      if ($prev = '0') {
    	$prev.text("not good")
    }
	  		
	 }
 
    })

$(".holder").hide();
$(".active").show();

$(".name").click(function(){
$(".holder").slideToggle(".hide");
 }) 

})





