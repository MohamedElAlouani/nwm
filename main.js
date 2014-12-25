$(document).ready(function() {	

	function colorWave(delay) {

		function firstWave(i) { 
			setTimeout(function() {
				var id = "#nwm" + i + "2";
				var percentage = i % 2 === 0 ? "100%" : "0%";	
				console.log(id, percentage);			
				$(id).css("height", percentage)
			}, (i - 1) * delay);
		}

		function secondWave(j) {
			setTimeout(function() {
				var id = "#nwm" + j + "2";
				var percentage = j % 2 === 0 ? "0%" : "100%";	
				console.log(id, percentage);			
				$(id).css("height", percentage)
			}, (10 + (10 - j)) * delay);
		}	

		for (var i = 1; i < 11; i++) {	
			console.log(i + "a")											
			firstWave(i);
		}

		for(var j = 10; j > 0; j--) {
			console.log(j + "b")
			secondWave(j);
		}
			
	}

	$(".button").mouseenter(function() {
		$("#left").css("width", "47%");	
		jQuery(".button2", this).css("height", "0%")
		jQuery(".buttonName", this).css("color", "white")
	})

	$(".button").mouseleave(function() {
		jQuery(".button2", this).css("height", "36%");
		$("#left").css("width", "50%");
		jQuery(".buttonName", this).css("color", "black");
	})

	$(".button").click(function() {
		var thisId = $(this).attr("id");
		["#home", "#aboutUs", "#positions", "#apply"].forEach(function(id) {

			if (id.slice(1,3) === thisId.slice(0,2)) {
				$(id).css("opacity", "1")
			}

			else {
				$(id).css("opacity", "0");	
			}
		
		});

		colorWave(500);
			
	})	


});