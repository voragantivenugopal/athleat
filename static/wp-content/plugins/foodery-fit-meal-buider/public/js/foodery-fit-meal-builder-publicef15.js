
(function( $ ) {


$(document).on('click','#mStartBtn',function(e){
    console.log('start here button');
    $('#tab1').removeClass('active');
    $('#tab2').addClass('active');
});
$(document).on('click','#mChooseMealPlanBtn',function(e){
    console.log('start here button');
    $('#tab2').removeClass('active');
    $('#tab3').addClass('active');
});
$(document).on('click','#mGenderBtn',function(e){
    console.log('start here button');
    $('#tab3').removeClass('active');
    $('#tab4').addClass('active');
});
$(document).on('click','#mHowManyWeeksBtn',function(e){
    console.log('start here button');
    $('#tab4').removeClass('active');
    $('#tab5').addClass('active');
});
$(document).on('click','#mMealsPerDayBtn',function(e){
    console.log('start here button');
    $('#tab5').removeClass('active');
    $('#tab6').addClass('active');
});


})( jQuery );
