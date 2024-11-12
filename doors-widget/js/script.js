/* script.js */

//jquery code
$(document).ready(function(){ // begin document.ready block

	$(".doorframe").delay(10000).animate({"opacity":"1"}, 1000)

	//jquery code here
	$(".doorframe").click(function(){
		$(this).addClass("door-grow")
		$(".opening-text").delay(1000).fadeOut(1000)
		$(".doorframe").delay(2000).fadeOut(1000)
		$(".opening-text-container").delay(5000).fadeOut(1000)
	})

}); //end document.ready block
