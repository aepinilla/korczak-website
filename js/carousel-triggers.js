$(document).ready(function() {
	$("#conferencistas-carousel").owlCarousel({
    	items : 4,
        lazyLoad : true,
        navigation : true,
        autoplay : 1000
    });
});

$(document).ready(function() {
  $("#panel-carousel").owlCarousel({
    navigation      : true,
    slideSpeed      : 300,
    paginationSpeed : 400,
    singleItem      : true,
    autoplay        : 1000 

  });
});

$(document).ready(function() {
  $("#conf-mobile").owlCarousel({
    items : 4,
    lazyLoad : true,
    navigation : true,
    autoplay : 1000
  });
});