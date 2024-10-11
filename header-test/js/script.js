/* script.js */

//jquery code
$(document).ready(function(){ // begin document.ready block

	//get random photo filenames
	var random_photo1
	var random_photo2
	var random_photo3
	var random_photo4
	var random_photo5
	var random_photo6
	var random_photo7
	var random_photo8

	// random_photo1 = Math.floor(Math.random() * ((Filenames.length-1) - 0) + 0)
	// random_photo2 = Math.floor(Math.random() * ((Filenames.length-1) - 0) + 0)
	// random_photo3 = Math.floor(Math.random() * ((Filenames.length-1) - 0) + 0)
	// random_photo4 = Math.floor(Math.random() * ((Filenames.length-1) - 0) + 0)
	// random_photo5 = Math.floor(Math.random() * ((Filenames.length-1) - 0) + 0)
	// random_photo6 = Math.floor(Math.random() * ((Filenames.length-1) - 0) + 0)
	// random_photo7 = Math.floor(Math.random() * ((Filenames.length-1) - 0) + 0)
	// random_photo8 = Math.floor(Math.random() * ((Filenames.length-1) - 0) + 0)
	// random_photo9 = Math.floor(Math.random() * ((Filenames.length-1) - 0) + 0)
	// random_photo10 = Math.floor(Math.random() * ((Filenames.length-1) - 0) + 0)
	

	// console.log(random_photo1, random_photo2, random_photo3, random_photo4, random_photo5, random_photo6, random_photo7, random_photo8)

	var photo_file1
	var photo_file2
	var photo_file3
	var photo_file4
	var photo_file5
	var photo_file6
	var photo_file7
	var photo_file8

	console.log(Filenames.length)
	for(i = 0; i < Filenames.length; i++) {
		// console.log(Filenames[i])
		// photo_file1 = Filenames[random_photo1]
		// photo_file2 = Filenames[random_photo2]
		// photo_file3 = Filenames[random_photo3]
		// photo_file4 = Filenames[random_photo4]
		// photo_file5 = Filenames[random_photo5]
		// photo_file6 = Filenames[random_photo6]
		// photo_file7 = Filenames[random_photo7]
		// photo_file8 = Filenames[random_photo8]
		// photo_file9 = Filenames[random_photo9]
		// photo_file10 = Filenames[random_photo10]
		// console.log(photo_file1, photo_file2, photo_file3, photo_file4, photo_file5, photo_file5, photo_file6, photo_file7, photo_file8)
	}



//____________________________HTML STUFF__________________________

	//time interval for pic 1
	var v = setInterval(function() {
		// console.log("LETS DO IT!")
		random_photo1 = Math.floor(Math.random() * ((Filenames.length-1) - 0) + 0)

		for(i = 0; i < Filenames.length; i++) {photo_file1 = Filenames[random_photo1]}

		setTimeout(function() {
			// the code in here will run some time in the future

			$(".photo-animation-1 .pic1 img").attr('src', 'https://cbs-news-data.github.io/empty-rooms-assets/Resized/'+photo_file1)

			$(".photo-animation-1 .pic1").css({
				'top': (Math.floor(Math.random() * (10 - 0) + 0)) + '%',
				'left': (Math.floor(Math.random() * (10 - 0) + 0)) + '%',
				'height': (Math.floor(Math.random() * (30 - 15) + 15)) + 'vh',
				'transform':'rotate('+ (Math.floor(Math.random() * (10 + 10) - 10)) +'deg)'
			})
		}, 500);
		
	}, 12000);

	//time interval for pic 2
	var v = setInterval(function() {
		// console.log("LETS DO IT!")
		random_photo2 = Math.floor(Math.random() * ((Filenames.length-1) - 0) + 0)

		for(i = 0; i < Filenames.length; i++) {photo_file2 = Filenames[random_photo2]}

		setTimeout(function() {
			// the code in here will run some time in the future
			$(".photo-animation-1 .pic2 img").attr('src', 'https://cbs-news-data.github.io/empty-rooms-assets/Resized/'+photo_file2)

			$(".photo-animation-1 .pic2").css({
				'top': (Math.floor(Math.random() * (10 - 0) + 0)) + '%',
				'right': (Math.floor(Math.random() * (10 - 0) + 0)) + '%',
				'height': (Math.floor(Math.random() * (30 - 15) + 15)) + 'vh',
				'transform':'rotate('+ (Math.floor(Math.random() * (10 + 10) - 10)) +'deg)'
				})
		}, 1500);

		
		
	}, 12000);


	//time interval for pic 3
	var v = setInterval(function() {
		// console.log("LETS DO IT!")
		random_photo3 = Math.floor(Math.random() * ((Filenames.length-1) - 0) + 0)

		for(i = 0; i < Filenames.length; i++) {photo_file3 = Filenames[random_photo3]}

		setTimeout(function() {
			// the code in here will run some time in the future

			$(".photo-animation-1 .pic3 img").attr('src', 'https://cbs-news-data.github.io/empty-rooms-assets/Resized/'+photo_file3)

			$(".photo-animation-1 .pic3").css({
				'bottom': (Math.floor(Math.random() * (10 - 0) + 0)) + '%',
				'left': (Math.floor(Math.random() * (10 - 0) + 0)) + '%',
				'height': (Math.floor(Math.random() * (30 - 15) + 15)) + 'vh',
				'transform':'rotate('+ (Math.floor(Math.random() * (10 + 10) - 10)) +'deg)'
			})

		}, 2500);	
		
	}, 12000);

	//time interval for pic 4
	var v = setInterval(function() {
		// console.log("LETS DO IT!")
		random_photo4 = Math.floor(Math.random() * ((Filenames.length-1) - 0) + 0)

		for(i = 0; i < Filenames.length; i++) {photo_file4 = Filenames[random_photo4]}

		setTimeout(function() {
			// the code in here will run some time in the future

			$(".photo-animation-1 .pic4 img").attr('src', 'https://cbs-news-data.github.io/empty-rooms-assets/Resized/'+photo_file4)

			$(".photo-animation-1 .pic4").css({
				'bottom': (Math.floor(Math.random() * (10 - 0) + 0)) + '%',
				'right': (Math.floor(Math.random() * (10 - 0) + 0)) + '%',
				'height': (Math.floor(Math.random() * (30 - 15) + 15)) + 'vh',
				'transform':'rotate('+ (Math.floor(Math.random() * (10 + 10) - 10)) +'deg)'
			})

		}, 3500);	
		
	}, 12000);

	//time interval for pic 5
	var v = setInterval(function() {
		// console.log("LETS DO IT!")
		random_photo5 = Math.floor(Math.random() * ((Filenames.length-1) - 0) + 0)

		for(i = 0; i < Filenames.length; i++) {photo_file5 = Filenames[random_photo5]}

		setTimeout(function() {
			// the code in here will run some time in the future

			$(".photo-animation-2 .pic1 img").attr('src', 'https://cbs-news-data.github.io/empty-rooms-assets/Resized/'+photo_file5)

			$(".photo-animation-2 .pic1").css({
				'top': (Math.floor(Math.random() * (10 - 1) + 1)) + '%',
				'left': (Math.floor(Math.random() * (40 - 20) + 20)) + '%',
				'height': (Math.floor(Math.random() * (30 - 15) + 15)) + 'vh',
				'transform':'rotate('+ (Math.floor(Math.random() * (10 + 10) - 10)) +'deg)'
			})

		}, 2000);	
		
	}, 12000);

	//time interval for pic 6
	var v = setInterval(function() {
		// console.log("LETS DO IT!")
		random_photo6 = Math.floor(Math.random() * ((Filenames.length-1) - 0) + 0)

		for(i = 0; i < Filenames.length; i++) {photo_file6 = Filenames[random_photo6]}

		setTimeout(function() {
			// the code in here will run some time in the future

			$(".photo-animation-2 .pic2 img").attr('src', 'https://cbs-news-data.github.io/empty-rooms-assets/Resized/'+photo_file6)

			$(".photo-animation-2 .pic2").css({
				'top': (Math.floor(Math.random() * (25 - 15) + 15)) + '%',
				'right': (Math.floor(Math.random() * (25 - 15) + 15)) + '%',
				'height': (Math.floor(Math.random() * (30 - 15) + 15)) + 'vh',
				'transform':'rotate('+ (Math.floor(Math.random() * (10 + 10) - 10)) +'deg)'
			})

		}, 2500);	
		
	}, 12000);

	//time interval for pic 7
	var v = setInterval(function() {
		// console.log("LETS DO IT!")
		random_photo7 = Math.floor(Math.random() * ((Filenames.length-1) - 0) + 0)

		for(i = 0; i < Filenames.length; i++) {photo_file7 = Filenames[random_photo7]}

		setTimeout(function() {
			// the code in here will run some time in the future

			$(".photo-animation-2 .pic3 img").attr('src', 'https://cbs-news-data.github.io/empty-rooms-assets/Resized/'+photo_file7)

			$(".photo-animation-2 .pic3").css({
				'bottom': (Math.floor(Math.random() * (10 - 0) + 0)) + '%',
				'left': (Math.floor(Math.random() * (40 - 20) + 15)) + '%',
				'height': (Math.floor(Math.random() * (30 - 15) + 15)) + 'vh',
				'transform':'rotate('+ (Math.floor(Math.random() * (10 + 10) - 10)) +'deg)'
			})

		}, 3000);	
		
	}, 12000);

	//time interval for pic 8
	var v = setInterval(function() {
		// console.log("LETS DO IT!")
		random_photo8 = Math.floor(Math.random() * ((Filenames.length-1) - 0) + 0)

		for(i = 0; i < Filenames.length; i++) {photo_file8 = Filenames[random_photo8]}

		setTimeout(function() {
			// the code in here will run some time in the future

			$(".photo-animation-2 .pic4 img").attr('src', 'https://cbs-news-data.github.io/empty-rooms-assets/Resized/'+photo_file8)

			$(".photo-animation-2 .pic4").css({
				'bottom': (Math.floor(Math.random() * (25 - 15) + 15)) + '%',
				'right': (Math.floor(Math.random() * (25 - 15) + 15)) + '%',
				'height': (Math.floor(Math.random() * (30 - 15) + 15)) + 'vh',
				'transform':'rotate('+ (Math.floor(Math.random() * (10 + 10) - 10)) +'deg)'
			})

		}, 4500);	
		
	}, 12000);

	//time interval for pic 9
	var v = setInterval(function() {
		// console.log("LETS DO IT!")
		random_photo9 = Math.floor(Math.random() * ((Filenames.length-1) - 0) + 0)

		for(i = 0; i < Filenames.length; i++) {photo_file9 = Filenames[random_photo9]}

		setTimeout(function() {
			// the code in here will run some time in the future

			$(".photo-animation-1 .pic5 img").attr('src', 'https://cbs-news-data.github.io/empty-rooms-assets/Resized/'+photo_file9)

			$(".photo-animation-1 .pic5").css({
				'top': (Math.floor(Math.random() * (45 - 30) + 30)) + '%',
				'left': (Math.floor(Math.random() * (5 - 0) + 0)) + '%',
				'height': (Math.floor(Math.random() * (30 - 15) + 15)) + '%',
				'transform':'rotate('+ (Math.floor(Math.random() * (10 + 10) - 10)) +'deg)'
			})

		}, 500);	
		
	}, 12000);

	//time interval for pic 10
	var v = setInterval(function() {
		// console.log("LETS DO IT!")
		random_photo10 = Math.floor(Math.random() * ((Filenames.length-1) - 0) + 0)

		for(i = 0; i < Filenames.length; i++) {photo_file10 = Filenames[random_photo10]}

		setTimeout(function() {
			// the code in here will run some time in the future

			$(".photo-animation-2 .pic5 img").attr('src', 'https://cbs-news-data.github.io/empty-rooms-assets/Resized/'+photo_file10)

			$(".photo-animation-2 .pic5").css({
				'top': (Math.floor(Math.random() * (45 - 30) + 30)) + '%',
				'right': (Math.floor(Math.random() * (5 - 0) + 0)) + '%',
				'height': (Math.floor(Math.random() * (30 - 15) + 15)) + '%',
				'transform':'rotate('+ (Math.floor(Math.random() * (10 + 10) - 10)) +'deg)'
			})

		}, 1000);	
		
	}, 12000);

	//put new filenames into html
	// $(".photo-animation-1 .pic1 img").attr('src', 'https://cbs-news-data.github.io/empty-rooms-assets/Resized/'+photo_file1)

	// $(".photo-animation-1 .pic2 img").attr('src', 'https://cbs-news-data.github.io/empty-rooms-assets/Resized/'+photo_file2)

	// $(".photo-animation-1 .pic3 img").attr('src', 'https://cbs-news-data.github.io/empty-rooms-assets/Resized/'+photo_file3)

	// $(".photo-animation-1 .pic4 img").attr('src', 'https://cbs-news-data.github.io/empty-rooms-assets/Resized/'+photo_file4)

	// $(".photo-animation-1 .pic5 img").attr('src', 'https://cbs-news-data.github.io/empty-rooms-assets/Resized/'+photo_file9)

	// $(".photo-animation-2 .pic1 img").attr('src', 'https://cbs-news-data.github.io/empty-rooms-assets/Resized/'+photo_file5)

	// $(".photo-animation-2 .pic2 img").attr('src', 'https://cbs-news-data.github.io/empty-rooms-assets/Resized/'+photo_file6)

	// $(".photo-animation-2 .pic3 img").attr('src', 'https://cbs-news-data.github.io/empty-rooms-assets/Resized/'+photo_file7)

	// $(".photo-animation-2 .pic4 img").attr('src', 'https://cbs-news-data.github.io/empty-rooms-assets/Resized/'+photo_file8)

	// $(".photo-animation-2 .pic5 img").attr('src', 'https://cbs-news-data.github.io/empty-rooms-assets/Resized/'+photo_file10)


	//fade in/out first set of photos	
	$(".photo-animation-1").fadeIn(1000)

	$(".photo-animation-1 .pic1").addClass("fadeInAndOut1") //1 second delay
	$(".photo-animation-1 .pic2").addClass("fadeInAndOut2") //2 second delay
	$(".photo-animation-1 .pic3").addClass("fadeInAndOut3") //3 second delay
	$(".photo-animation-1 .pic4").addClass("fadeInAndOut4") //4 second delay
	$(".photo-animation-1 .pic5").addClass("fadeInAndOut5") //1 second delay

	//fade in/out second set of photos
	$(".photo-animation-2").delay(1000).fadeIn(1000)

	$(".photo-animation-2 .pic1").addClass("fadeInAndOut1") //1 second delay
	$(".photo-animation-2 .pic2").addClass("fadeInAndOut2") //2 second delay
	$(".photo-animation-2 .pic3").addClass("fadeInAndOut3") //3 second delay
	$(".photo-animation-2 .pic4").addClass("fadeInAndOut4") //4 second delay
	$(".photo-animation-2 .pic5").addClass("fadeInAndOut5") //1 second delay



//____________________________CSS STUFF: get random numbers for positions and sizes_____________________
	
	//sizes 25% to 35%
	var num25to35 = Math.floor(Math.random() * (35 - 25) + 25);
	console.log(num25to35)

	//animation 1: top, right, bottom, left -- 0% to 20%
	var num0to20 = Math.floor(Math.random() * (20 - 0) + 0);

	//animation 2: top, right, bottom, left -- 25% to 50%
	var num25to50 = Math.floor(Math.random() * (50 - 25) + 25);
	console.log(num0to20)
	console.log(num25to50)

	//pic1: top left
	// $(".photo-animation-1 .pic1").css({
	// 	'top': (Math.floor(Math.random() * (10 - 0) + 0)) + '%',
	// 	'left': (Math.floor(Math.random() * (10 - 0) + 0)) + '%',
	// 	'width': (Math.floor(Math.random() * (35 - 25) + 25)) + '%',
	// 	'transform':'rotate('+ (Math.floor(Math.random() * (10 + 10) - 10)) +'deg)'
	// })
	// $(".photo-animation-2 .pic1").css({
	// 	'top': (Math.floor(Math.random() * (25 - 15) + 15)) + '%',
	// 	'left': (Math.floor(Math.random() * (25 - 15) + 15)) + '%',
	// 	'width': (Math.floor(Math.random() * (35 - 25) + 25)) + '%',
	// 	'transform':'rotate('+ (Math.floor(Math.random() * (10 + 10) - 10)) +'deg)'
	// })
	//pic2: top right
	// $(".photo-animation-1 .pic2").css({
	// 	'top': (Math.floor(Math.random() * (10 - 0) + 0)) + '%',
	// 	'right': (Math.floor(Math.random() * (10 - 0) + 0)) + '%',
	// 	'width': (Math.floor(Math.random() * (35 - 25) + 25)) + '%',
	// 	'transform':'rotate('+ (Math.floor(Math.random() * (10 + 10) - 10)) +'deg)'
	// })
	// $(".photo-animation-2 .pic2").css({
	// 	'top': (Math.floor(Math.random() * (25 - 15) + 15)) + '%',
	// 	'right': (Math.floor(Math.random() * (25 - 15) + 15)) + '%',
	// 	'width': (Math.floor(Math.random() * (35 - 25) + 25)) + '%',
	// 	'transform':'rotate('+ (Math.floor(Math.random() * (10 + 10) - 10)) +'deg)'
	// })
	//pic3: bottom left
	// $(".photo-animation-1 .pic3").css({
	// 	'bottom': (Math.floor(Math.random() * (10 - 0) + 0)) + '%',
	// 	'left': (Math.floor(Math.random() * (10 - 0) + 0)) + '%',
	// 	'width': (Math.floor(Math.random() * (35 - 25) + 25)) + '%',
	// 	'transform':'rotate('+ (Math.floor(Math.random() * (10 + 10) - 10)) +'deg)'
	// })
	// $(".photo-animation-2 .pic3").css({
	// 	'bottom': (Math.floor(Math.random() * (25 - 15) + 15)) + '%',
	// 	'left': (Math.floor(Math.random() * (25 - 15) + 15)) + '%',
	// 	'width': (Math.floor(Math.random() * (35 - 25) + 25)) + '%',
	// 	'transform':'rotate('+ (Math.floor(Math.random() * (10 + 10) - 10)) +'deg)'
	// })
	//pic4: bottom right
	// $(".photo-animation-1 .pic4").css({
	// 	'bottom': (Math.floor(Math.random() * (10 - 0) + 0)) + '%',
	// 	'right': (Math.floor(Math.random() * (10 - 0) + 0)) + '%',
	// 	'width': (Math.floor(Math.random() * (35 - 25) + 25)) + '%',
	// 	'transform':'rotate('+ (Math.floor(Math.random() * (10 + 10) - 10)) +'deg)'
	// })
	// $(".photo-animation-2 .pic4").css({
	// 	'bottom': (Math.floor(Math.random() * (25 - 15) + 15)) + '%',
	// 	'right': (Math.floor(Math.random() * (25 - 15) + 15)) + '%',
	// 	'width': (Math.floor(Math.random() * (35 - 25) + 25)) + '%',
	// 	'transform':'rotate('+ (Math.floor(Math.random() * (10 + 10) - 10)) +'deg)'
	// })
	//pic5: outside middle
	// $(".photo-animation-1 .pic5").css({
	// 	'top': (Math.floor(Math.random() * (45 - 30) + 30)) + '%',
	// 	'left': (Math.floor(Math.random() * (5 - 0) + 0)) + '%',
	// 	'width': (Math.floor(Math.random() * (35 - 25) + 25)) + '%',
	// 	'transform':'rotate('+ (Math.floor(Math.random() * (10 + 10) - 10)) +'deg)'
	// })
	// $(".photo-animation-2 .pic5").css({
	// 	'top': (Math.floor(Math.random() * (45 - 30) + 30)) + '%',
	// 	'right': (Math.floor(Math.random() * (5 - 0) + 0)) + '%',
	// 	'width': (Math.floor(Math.random() * (35 - 25) + 25)) + '%',
	// 	'transform':'rotate('+ (Math.floor(Math.random() * (10 + 10) - 10)) +'deg)'
	// })





}); //end document.ready block


Filenames = ["Alyssa_001.jpg","Alyssa_002.jpg","Alyssa_003.jpg","Alyssa_004.jpg","Alyssa_005.jpg","Alyssa_006.jpg","Alyssa_007.jpg","Alyssa_008.jpg","Alyssa_009.jpg","Alyssa_010.jpg","Alyssa_011.jpg","Alyssa_012.jpg","Alyssa_013.jpg","Alyssa_014.jpg","Alyssa_015.jpg","Alyssa_016.jpg","Alyssa_017.jpg","Alyssa_018.jpg","Alyssa_019.jpg","Alyssa_020.jpg","Alyssa_021.jpg","Alyssa_022.jpg","Alyssa_023.jpg","Alyssa_024.jpg","Alyssa_025.jpg","Alyssa_026.jpg","Alyssa_027.jpg","Alyssa_028.jpg","Alyssa_029.jpg","Alyssa_030.jpg","Alyssa_031.jpg","Alyssa_032.jpg","Alyssa_033.jpg","Alyssa_034.jpg","Alyssa_035.jpg","Alyssa_036.jpg","Alyssa_037.jpg","Alyssa_038.jpg","Alyssa_039.jpg","Alyssa_040.jpg","Alyssa_041.jpg","Alyssa_042.jpg","Alyssa_043.jpg","Alyssa_044.jpg","Alyssa_045.jpg","Alyssa_046.jpg","Alyssa_047.jpg","Alyssa_048.jpg","Alyssa_049.jpg","Alyssa_050.jpg","Alyssa_051.jpg","Alyssa_052.jpg","Carmen_001.jpg","Carmen_002.jpg","Carmen_003.jpg","Carmen_004.jpg","Carmen_005.jpg","Carmen_006.jpg","Carmen_007.jpg","Carmen_008.jpg","Carmen_009.jpg","Carmen_010.jpg","Carmen_011.jpg","Carmen_012.jpg","Carmen_013.jpg","Carmen_014.jpg","Carmen_015.jpg","Carmen_016.jpg","Carmen_017.jpg","Carmen_018.jpg","Carmen_019.jpg","Carmen_020.jpg","Carmen_021.jpg","Carmen_022.jpg","Carmen_023.jpg","Carmen_024.jpg","Carmen_025.jpg","Carmen_026.jpg","Carmen_027.jpg","Carmen_028.jpg","Carmen_029.jpg","Carmen_030.jpg","Carmen_031.jpg","Carmen_032.jpg","Carmen_033.jpg","Carmen_034.jpg","Carmen_035.jpg","Carmen_036.jpg","Carmen_037.jpg","Carmen_038.jpg","Carmen_039.jpg","Carmen_040.jpg","Carmen_041.jpg","Carmen_042.jpg","Carmen_043.jpg","Carmen_044.jpg","Carmen_045.jpg","Carmen_046.jpg","Carmen_047.jpg","Carmen_048.jpg","Carmen_049.jpg","Carmen_050.jpg","Carmen_051.jpg","Carmen_052.jpg","Charlotte_001.jpg","Charlotte_002.jpg","Charlotte_003.jpg","Charlotte_004.jpg","Charlotte_005.jpg","Charlotte_006.jpg","Charlotte_007.jpg","Charlotte_008.jpg","Charlotte_009.jpg","Charlotte_010.jpg","Charlotte_011.jpg","Charlotte_012.jpg","Charlotte_013.jpg","Charlotte_014.jpg","Charlotte_015.jpg","Charlotte_016.jpg","Charlotte_017.jpg","Charlotte_018.jpg","Charlotte_019.jpg","Charlotte_020.jpg","Charlotte_021.jpg","Charlotte_022.jpg","Charlotte_023.jpg","Charlotte_024.jpg","Charlotte_025.jpg","Charlotte_026.jpg","Charlotte_027.jpg","Charlotte_028.jpg","Charlotte_029.jpg","Charlotte_030.jpg","Charlotte_031.jpg","Charlotte_032.jpg","Charlotte_033.jpg","Charlotte_034.jpg","Charlotte_035.jpg","Charlotte_036.jpg","Charlotte_037.jpg","Charlotte_038.jpg","Charlotte_039.jpg","Charlotte_040.jpg","Charlotte_041.jpg","Charlotte_042.jpg","Charlotte_043.jpg","Charlotte_044.jpg","Charlotte_045.jpg","Charlotte_046.jpg","Charlotte_047.jpg","Charlotte_048.jpg","Charlotte_049.jpg","Charlotte_050.jpg","Charlotte_051.jpg","Charlotte_052.jpg","Charlotte_053.jpg","Charlotte_054.jpg","Charlotte_055.jpg","Charlotte_056.jpg","Charlotte_057.jpg","Charlotte_058.jpg","Charlotte_059.jpg","Charlotte_060.jpg","Charlotte_061.jpg","Charlotte_062.jpg","Dominic_001.jpeg","Dominic_002.jpeg","Dominic_003.jpeg","Dominic_004.jpeg","Dominic_005.jpeg","Dominic_006.jpeg","Dominic_007.jpeg","Dominic_008.jpeg","Dominic_009.jpeg","Dominic_010.jpeg","Dominic_011.jpeg","Dominic_012.jpeg","Dominic_013.jpeg","Dominic_014.jpeg","Dominic_015.jpeg","Dominic_016.jpeg","Dominic_017.jpeg","Dominic_018.jpeg","Dominic_019.jpeg","Dominic_020.jpeg","Dominic_021.jpeg","Dominic_022.jpeg","Dominic_023.jpeg","Dominic_024.jpeg","Dominic_025.jpeg","Dominic_026.jpeg","Dominic_027.jpeg","Dominic_028.jpeg","Dominic_029.jpeg","Dominic_030.jpeg","Dominic_031.jpeg","Dominic_032.jpeg","Dominic_033.jpeg","Dominic_034.jpeg","Dominic_035.jpeg","Dominic_036.jpeg","Dominic_037.jpeg","Dominic_038.jpeg","Dominic_039.jpeg","Dominic_040.jpeg","Dominic_041.jpeg","Dominic_042.jpeg","Dominic_043.jpeg","Dominic_044.jpeg","Dominic_045.jpeg","Dominic_046.jpeg","Dominic_047.jpeg","Dominic_048.jpeg","Dominic_049.jpeg","Dominic_050.jpeg","Dominic_051.jpeg","Dominic_052.jpeg","Dominic_053.jpeg","Dominic_054.jpeg","Dominic_055.jpeg","Dominic_056.jpeg","Dominic_057.jpeg","Dominic_058.jpeg","Dominic_059.jpeg","Dominic_060.jpeg","Dominic_061.jpeg","Dominic_062.jpeg","Dominic_063.jpeg","Dominic_064.jpeg","Dominic_065.jpeg","Dominic_066.jpeg","Dominic_067.jpeg","Dominic_068.jpeg","Dominic_069.jpeg","Dominic_070.jpeg","Dominic_071.jpeg","Dominic_072.jpeg","Dominic_073.jpeg","Dominic_074.jpeg","Dominic_075.jpeg","Dominic_076.jpeg","Dominic_077.jpeg","Dominic_078.jpeg","Dominic_079.jpeg","Dominic_080.jpeg","Dominic_081.jpeg","Dominic_082.jpeg","Dominic_083.jpeg","Dominic_084.jpeg","Dominic_085.jpeg","Dominic_086.jpeg","Dominic_087.jpeg","Dominic_088.jpeg","Dominic_089.jpeg","Dominic_090.jpeg","Dominic_091.jpeg","Dominic_092.jpeg","Dominic_093.jpeg","Dominic_094.jpeg","Dominic_095.jpeg","Dominic_096.jpeg","Dominic_097.jpeg","Dominic_098.jpeg","Dominic_099.jpeg","Dominic_100.jpeg","Dominic_101.jpeg","Dominic_102.jpeg","Dominic_103.jpeg","Dominic_104.jpeg","Dominic_105.jpeg","Dominic_106.jpeg","Dominic_107.jpeg","Dominic_108.jpeg","Dominic_109.jpeg","Dominic_110.jpeg","Dominic_111.jpeg","Dominic_112.jpeg","Dominic_113.jpeg","Dominic_114.jpeg","Dominic_115.jpeg","Dominic_116.jpeg","Dominic_117.jpeg","Dominic_118.jpeg","Dominic_119.jpeg","Dominic_120.jpeg","Dominic_121.jpeg","Dominic_122.jpeg","Dominic_123.jpeg","Dominic_124.jpeg","Dominic_125.jpeg","Dominic_126.jpeg","Dominic_127.jpeg","Dominic_128.jpeg","Gracie_001.jpeg","Gracie_002.jpeg","Gracie_003.jpeg","Gracie_004.jpeg","Gracie_005.jpeg","Gracie_006.jpeg","Gracie_007.jpeg","Gracie_008.jpeg","Gracie_009.jpeg","Gracie_010.jpeg","Gracie_011.jpeg","Gracie_012.jpeg","Gracie_013.jpeg","Gracie_014.jpeg","Gracie_015.jpeg","Gracie_016.jpeg","Gracie_017.jpeg","Gracie_018.jpeg","Gracie_019.jpeg","Gracie_020.jpeg","Gracie_021.jpeg","Gracie_022.jpeg","Gracie_023.jpeg","Gracie_024.jpeg","Gracie_025.jpeg","Gracie_026.jpeg","Gracie_027.jpeg","Gracie_028.jpeg","Gracie_029.jpeg","Gracie_030.jpeg","Gracie_031.jpeg","Gracie_032.jpeg","Gracie_033.jpeg","Gracie_034.jpeg","Gracie_035.jpeg","Gracie_036.jpeg","Gracie_037.jpeg","Gracie_038.jpeg","Gracie_039.jpeg","Gracie_040.jpeg","Gracie_041.jpeg","Gracie_042.jpeg","Gracie_043.jpeg","Gracie_044.jpeg","Gracie_045.jpeg","Gracie_046.jpeg","Gracie_047.jpeg","Gracie_048.jpeg","Gracie_049.jpeg","Gracie_050.jpeg","Gracie_051.jpeg","Gracie_052.jpeg","Gracie_053.jpeg","Gracie_054.jpeg","Gracie_055.jpeg","Gracie_056.jpeg","Gracie_057.jpeg","Gracie_058.jpeg","Gracie_059.jpeg","Gracie_060.jpeg","Gracie_061.jpeg","Gracie_062.jpeg","Gracie_063.jpeg","Gracie_064.jpeg","Gracie_065.jpeg","Gracie_066.jpeg","Gracie_067.jpeg","Gracie_068.jpeg","Gracie_069.jpeg","Gracie_070.jpeg","Gracie_071.jpeg","Gracie_072.jpeg","Gracie_073.jpeg","Gracie_074.jpeg","Gracie_075.jpeg","Gracie_076.jpeg","Gracie_077.jpeg","Gracie_078.jpeg","Gracie_079.jpeg","Gracie_080.jpeg","Gracie_081.jpeg","Gracie_082.jpeg","Gracie_083.jpeg","Gracie_084.jpeg","Gracie_085.jpeg","Gracie_086.jpeg","Gracie_087.jpeg","Gracie_088.jpeg","Gracie_089.jpeg","Gracie_090.jpeg","Gracie_091.jpeg","Gracie_092.jpeg","Gracie_093.jpeg","Gracie_094.jpeg","Gracie_095.jpeg","Gracie_096.jpeg","Gracie_097.jpeg","Gracie_098.jpeg","Gracie_099.jpeg","Gracie_100.jpeg","Gracie_101.jpeg","Gracie_102.jpeg","Gracie_103.jpeg","Gracie_104.jpeg","Gracie_105.jpeg","Gracie_106.jpeg","Gracie_107.jpeg","Gracie_108.jpeg","Gracie_109.jpeg","Gracie_110.jpeg","Gracie_111.jpeg","Gracie_112.jpeg","Gracie_113.jpeg","Gracie_114.jpeg","Gracie_115.jpeg","Gracie_116.jpeg","Gracie_117.jpeg","Gracie_118.jpeg","Gracie_119.jpeg","Gracie_120.jpeg","Gracie_121.jpeg","Gracie_122.jpeg","Gracie_123.jpeg","Gracie_124.jpeg","Gracie_125.jpeg","Gracie_126.jpeg","Gracie_127.jpeg","Gracie_128.jpeg","Gracie_129.jpeg","Gracie_130.jpeg","Gracie_131.jpeg","Gracie_132.jpeg","Gracie_133.jpeg","Gracie_134.jpeg","Gracie_135.jpeg","Gracie_136.jpeg","Gracie_137.jpeg","Gracie_138.jpeg","Gracie_139.jpeg","Gracie_140.jpeg","Gracie_141.jpeg","Gracie_142.jpeg","Gracie_143.jpeg","Gracie_144.jpeg","Gracie_145.jpeg","Gracie_146.jpeg","Gracie_147.jpeg","Gracie_148.jpeg","Gracie_149.jpeg","Gracie_150.jpeg","Gracie_151.jpeg","Gracie_152.jpeg","Gracie_153.jpeg","Gracie_154.jpeg","Gracie_155.jpeg","Gracie_156.jpeg","Gracie_157.jpeg","Gracie_158.jpeg","Gracie_159.jpeg","Gracie_160.jpeg","Gracie_161.jpeg","Gracie_162.jpeg","Gracie_163.jpeg","Gracie_164.jpeg","Gracie_165.jpeg","Gracie_166.jpeg","Gracie_167.jpeg","Hallie_001.jpg","Hallie_002.jpg","Hallie_003.jpg","Hallie_004.jpg","Hallie_005.jpg","Hallie_006.jpg","Hallie_007.jpg","Hallie_008.jpg","Hallie_009.jpg","Hallie_010.jpg","Hallie_011.jpg","Hallie_012.jpg","Hallie_013.jpg","Hallie_014.jpg","Hallie_015.jpg","Hallie_016.jpg","Hallie_017.jpg","Hallie_018.jpg","Hallie_019.jpg","Hallie_020.jpg","Hallie_021.jpg","Hallie_022.jpg","Hallie_023.jpg","Hallie_024.jpg","Hallie_025.jpg","Hallie_026.jpg","Hallie_027.jpg","Hallie_028.jpg","Hallie_029.jpg","Hallie_030.jpg","Hallie_031.jpg","Hallie_032.jpg","Hallie_033.jpg","Hallie_034.jpg","Hallie_035.jpg","Hallie_036.jpg","Hallie_037.jpg","Hallie_038.jpg","Hallie_039.jpg","Hallie_040.jpg","Hallie_041.jpg","Hallie_042.jpg","Hallie_043.jpg","Hallie_044.jpg","Hallie_045.jpg","Hallie_046.jpg","Hallie_047.jpg","Hallie_048.jpg","Hallie_049.jpg","Hallie_050.jpg","Hallie_051.jpg","Hallie_052.jpg","Hallie_053.jpg","Hallie_054.jpg","Hallie_055.jpg","Hallie_056.jpg","Hallie_057.jpg","Hallie_058.jpg","Hallie_059.jpg","Hallie_060.jpg","Hallie_061.jpg","Hallie_062.jpg","Hallie_063.jpg","Hallie_064.jpg","Hallie_065.jpg","Hallie_066.jpg","Hallie_067.jpg","Hallie_068.jpg","Hallie_069.jpg","Hallie_070.jpg","Hallie_071.jpg","Hallie_072.jpg","Hallie_073.jpg","Hallie_074.jpg","Hallie_075.jpg","Hallie_076.jpg","Hallie_077.jpg","Hallie_078.jpg","Hallie_079.jpg","Hallie_080.jpg","Hallie_081.jpg","Hallie_082.jpg","Hallie_083.jpg","Hallie_084.jpg","Hallie_085.jpg","Hallie_086.jpg","Hallie_087.jpg","Hallie_088.jpg","Hallie_089.jpg","Hallie_090.jpg","Hallie_091.jpg","Hallie_092.jpg","Hallie_093.jpg","Hallie_094.jpg","Hallie_095.jpg","Hallie_096.jpg","Hallie_097.jpg","Hallie_098.jpg","Hallie_099.jpg","Hallie_100.jpg","Hallie_101.jpg","Hallie_102.jpg","Hallie_103.jpg","Hallie_104.jpg","Hallie_105.jpg","Hallie_106.jpg","Hallie_107.jpg","Hallie_108.jpg","Hallie_109.jpg","Jackie_001.jpg","Jackie_002.jpg","Jackie_003.jpg","Jackie_004.jpg","Jackie_005.jpg","Jackie_006.jpg","Jackie_007.jpg","Jackie_008.jpg","Jackie_009.jpg","Jackie_010.jpg","Jackie_011.jpg","Jackie_012.jpg","Jackie_013.jpg","Jackie_014.jpg","Jackie_015.jpg","Jackie_016.jpg","Jackie_017.jpg","Jackie_018.jpg","Jackie_019.jpg","Jackie_020.jpg","Jackie_021.jpg","Jackie_022.jpg","Jackie_023.jpg","Jackie_024.jpg","Jackie_025.jpg","Jackie_026.jpg","Jackie_027.jpg","Jackie_028.jpg","Jackie_029.jpg","Jackie_030.jpg","Jackie_031.jpg","Jackie_032.jpg","Jackie_033.jpg","Jackie_034.jpg","Jackie_035.jpg","Jackie_036.jpg","Jackie_037.jpg","Jackie_038.jpg","Jackie_039.jpg","Jackie_040.jpg","Jackie_041.jpg","Jackie_042.jpg","Jackie_043.jpg","Jackie_044.jpg","Jackie_045.jpg","Jackie_046.jpg","Jackie_047.jpg","Jackie_048.jpg","Jackie_049.jpg","Jackie_050.jpg","Jackie_051.jpg","Jackie_052.jpg","Jackie_053.jpg","Jackie_054.jpg","Jackie_055.jpg","Jackie_056.jpg","Jackie_057.jpg","Jackie_058.jpg","Jackie_059.jpg","Jackie_060.jpg","Jackie_061.jpg","Jackie_062.jpg","Jackie_063.jpg","Jackie_064.jpg","Jackie_065.jpg","Jackie_066.jpg","Jackie_067.jpg","Jackie_068.jpg","Jackie_069.jpg","Jackie_070.jpg","Jackie_071.jpg","Jackie_072.jpg","Jackie_073.jpg","Jackie_074.jpg","Jackie_075.jpg","Jackie_076.jpg","Jackie_077.jpg","Jackie_078.jpg","Jackie_079.jpg","Jackie_080.jpg","Luke_001.jpg","Luke_002.jpg","Luke_003.jpg","Luke_004.jpg","Luke_005.jpg","Luke_006.jpg","Luke_007.jpg","Luke_008.jpg","Luke_009.jpg","Luke_010.jpg","Luke_011.jpg","Luke_012.jpg","Luke_013.jpg","Luke_014.jpg","Luke_015.jpg","Luke_016.jpg","Luke_017.jpg","Luke_018.jpg","Luke_019.jpg","Luke_020.jpg","Luke_021.jpg","Luke_022.jpg","Luke_023.jpg","Luke_024.jpg","Luke_025.jpg","Luke_026.jpg","Luke_027.jpg","Luke_028.jpg","Luke_029.jpg","Luke_030.jpg","Luke_031.jpg","Luke_032.jpg","Luke_033.jpg","Luke_034.jpg","Luke_035.jpg","Luke_036.jpg","Luke_037.jpg","Luke_038.jpg","Luke_039.jpg","Luke_040.jpg","Luke_041.jpg","Luke_042.jpg","Luke_043.jpg","Luke_044.jpg","Luke_045.jpg","Luke_046.jpg","Luke_047.jpg"]