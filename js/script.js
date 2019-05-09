$(document).ready(function(){
	let colappse_btn=$(".collapse-menu-btn");
	collapse=false;
	colappse_btn.click(function(e){
		e.preventDefault();
		if(collapse){
			$(".author-panel").removeClass('colappse-menu');
			$(".collapse-menu-btn .glyphicon").removeClass('glyphicon-chevron-right');
			$(".collapse-menu-btn .glyphicon").addClass('glyphicon-chevron-left');
			collapse=false;
		}
		else{
			$(".author-panel").addClass('colappse-menu');
			$(".collapse-menu-btn .glyphicon").removeClass('glyphicon-chevron-left');
			$(".collapse-menu-btn .glyphicon").addClass('glyphicon-chevron-right');
			collapse=true;
		}
	})
})


$(window).scroll(function(){
	navi=$('#navigation');
	offset=240;
	if($(this).scrollTop()>offset){
		navi.addClass('navi-fixed');
		$('.content').css('margin-top','85px')
	}
	else{
		navi.removeClass('navi-fixed');
		$('.content').css('margin-top','20px')
	}
});