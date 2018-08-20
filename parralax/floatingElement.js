$(window).scroll( function(){
	// tells how far the scroll is from the top
	let wScroll = $(this).scrollTop();

  if(wScroll> $('.blog-posts').ofset().top - $(window).height() ){

    // largest it can be is 0
    let offset = Math.min(wScroll - $('.blog-posts').offset().top + $(window).height() - 350);
    $('.post-1').css({
      'transform': `translate(${offset}px,  20px)`
    });

    $('.post-3').css({
      'transform': `translate(${offset}px,  ${Math.abs(offset*.2)}px)`
    });
  }

}
