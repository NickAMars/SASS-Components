$(window).scroll( function(){
	// tells how far the scroll is from the top
	let wScroll = $(this).scrollTop();
	
	// movement of the logo 
	$('.logo').css({
		'transform': `translate(0px, -${wScroll/2}%)` //going down 
	});
	// blurd bird in the background
	$('.back-bird').css({
		'transform': `translate(0px, -${wScroll/4}%)` 
	});
	// bird that clear to see 
	$('.for-bird').css({
		'transform': `translate(0px, ${wScroll/50}%)` // going up
	});
	/*
		Topic: landing Elements
	*/
	
	// if the amount we are scroling to is greater than the top section of the cloths then
	if(wScroll > $('.clothes-pics').offset().top - ($(window).height() /1.2)){
		/*
		($(window).height() /1.2)
		makes the animation trigger earlier
		*/
		// goes throw all figure element
		$('.clothes-pics figure').forEach((elem, index) =>{
			//delays
			setTimeout((i)=>{
				//find the specific figure and add the class
				$('.clothes-plus figure').eq(i).addClass('is-showing');
			}150* (index+1), index);
			/*
				css 
				(figure)
				margin-bottom: 20px;
				position: relative;
				opacity: 0;
				transform: translateX(-20px);
				transition: all 0.3s ease-in-out;
				
				(is-showing)
				opacity: 1;
				transform: translateX(0px);
			
			*/
		});
	}
	
	
});