$(document).ready(function(){
	 $('.icon').click(function() {
  	$('.icon').toggleClass('Actv');
  });
$('.Badge').click(function(){
    $(this).toggleClass('Opened').toggleClass('Closed').next().slideToggle();
    if($(this).hasClass('Opened')) {
        $(this).html('&#8212;');
    }
    else {
        $(this).html('&#9547;');
    }
});
$('.Search').click(function(){
	if($(".Search_menu").is(":hidden")){
  		$(".Search_menu").fadeIn(400,'swing').css('display', 'flex')
}
else
{
	$(".Search_menu").css('display', 'none')
}
});
var Comments = [];
i = 1;
Comments[1] = "<h4><i>@circles</i> Because we know you don’t want to be in both portrait AND landscape! We care about limited format ...<i> by Quill</i></h4><span><i>about 5 minutes ago<i></span>";
Comments[2] = "<h4><i>@circles</i> We care about limited format ...<i> by Quill</i></h4><span><i>about 15 minutes ago<i></span>";
Comments[3] = "<h4><i>@circles</i> Because we know you don’t want to be in both portrait AND landscape!<i> by Quill</i></h4><span><i>about 30 minutes ago<i></span>";
$('.Next_btn').on('click', function() {
	var len = Comments.length;
	i+=1;
	if(i > 3){
		i = 1;
		$(".Comment_twit").html(Comments[i]);
	}
	$(".Comment_twit").html(Comments[i]);
});
$('.Prev_btn').on('click', function() {
	var len = Comments.length;
	i-=1;
	if(i < 1){
		i = 3;
		$(".Comment_twit").html(Comments[i]);
	}
	$(".Comment_twit").html(Comments[i]);
});
  $(".owl-carousel").owlCarousel({
  	items: 4,
  	loop: true,
  	autoplay: true,
  	autoplayTimeout: 3000,
  	smartSpeed: 1000,
  	responsiveClass:true,
  	responsive:{
  		1600:{
  			items: 4
  		},
  		1500:{
  			items: 4
  		},
  		1400:{
  			items: 4
  		},
  		1300:{
  			items: 4
  		},
  		1200:{
  			items: 4
  		},
  		1100:{
  			items: 4
  		},
  		1000:{
  			items: 4
  		},
  		900:{
  			items: 4
  		},
  		800:{
  			items: 4
  		},
  		700:{
  			items:3
  		},
  		600:{
  			items: 3
  		},
  		500:{
  			items: 2
  		},
  		400:{
  			items: 2
  		},
  		300:{
  			items: 1
  		},
  		200:{
  			items:1
  		}
  	}
  });
  $('.Menu a[href^="#"]').click(function () {
  	var offset = $('header').innerHeight();
  	var target = $(this).attr("href"); 
  	$("html,body").animate({
  		scrollTop: $(target).offset().top - offset+2
  	}, 800);
  	$('.Menu a[href^="#"]').removeClass('active');
  	$(this).addClass('active');
  	return false;
  });
});

