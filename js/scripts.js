$("#carouselButton").click(function(){
    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')){
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');                    
    }
});

$("#loginModalBtn").click(function(){
    $('#loginModal').modal('toggle');
});

$("#reserveModalBtn").click(function(){
    $('#reserveModal').modal('toggle');
});

$("#ReservemodalClose").click(function(){
    $('#reserveModal').modal('hide');
});

$("#ReservemodalClose1").click(function(){
    $('#reserveModal').modal('hide');
});

$("#loginModalClose").click(function(){
$('#loginModal').modal('hide');
});

$("#loginModalClose1").click(function(){
$('#loginModal').modal('hide');
});