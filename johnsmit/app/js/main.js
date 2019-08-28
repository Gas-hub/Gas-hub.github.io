$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items: 1,
  	loop:true,
  });

  $(window).scroll(function(){
    if($(this).scrollTop() > $(this).height()){
      $('.top').addClass('active');
    }else{
      $('.top').removeClass('active');
    }
  });

  $('.top').click(function(){
    $('html, body').stop().animate({scrollTop: 0},'slow','swing');
  });


  

  $('.portfolio-inner .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.portfolio-inner').find('.tab-item').removeClass('active-tab').hide();
            $('.portfolio-inner .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            if(id == 1){
            	$('.tab-item').addClass('active-tab').fadeIn();
            }else{
            	$('#'+id).addClass('active-tab').fadeIn();
            }
        });
});

$(window).on('load',function(){
  $('.preloader').delay(1000).fadeOut('slow');
})