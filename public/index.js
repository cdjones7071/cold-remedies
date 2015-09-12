
var remedyList = function(callback){
	
	$.ajax({
		url: "/remedy",
		method:"GET",
		success: function(data){
		callback(data)
		}

	})

}

 var strength = function(i){
 	if (i === 3){
 		return "Probably effective"
 	}
 	
 	if (i === 2){
 		return "Possibly effective"
 	}

 	if (i === 1){
		return "Unlikely to be effective"
	}

	if (i === 0){
		return "Ineffective"
	}

 }


var remedyStuff= function(data){

	_.each(data.remedies, function(remedy){

		var newRemedy = {
			name: remedy.name,
			prevention: strength(remedy.prevention),
			treatment: strength(remedy.treatment),
			description: remedy.description,
			reaction: remedy.reaction
		}


		var htmlLeft = templateLeft(newRemedy)
			$("#cold-rem").append(htmlLeft)
		})	

		$(".remedy").on("click", function(){
			$(this).find(".description").toggleClass("active")

			console.log(this)
		})




}


	$(document).on("ready", function(){
		templateLeft = Handlebars.compile( $("#coldRemediesTemplate").html() );


		remedyList(remedyStuff)


	})