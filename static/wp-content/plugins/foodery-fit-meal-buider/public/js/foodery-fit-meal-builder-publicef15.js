
(function( $ ) {

var m_curr_choose_plan = '';
var p_curr_choose_plan = '';

// Start Button 
$(document).on('click','#mStartBtn',function(e){
    console.log('start here button');
    $('#tab1').removeClass('active');
    $('#tab2').addClass('active');
    $('[data-target="#step1"]').removeClass('active');
    $('[data-target="#step2"]').addClass('active');
});
$(document).on('click','.mChooseMealPlanBtn',function(e){
    $('#tab2').removeClass('active');
    $('#tab3').addClass('active');
    $('[data-target="#step2"]').removeClass('active');
    $('[data-target="#step3"]').addClass('active');
    var m_curr_choose_plan = $(this).attr('data-mChoosePlan');
    console.log('m_curr_choose_plan',m_curr_choose_plan);
    if(m_curr_choose_plan==='Athleat'){
        $('#mPlanTitle').text('Athleat/Fat Loss');
    }
    else if(m_curr_choose_plan==='Customized'){
        $('#mPlanTitle').text('Customized');
    }
    else{
        $('#mPlanTitle').text('Choose Your Meal Plan');   
    }
});

$(document).on('click','#mGenderBtn',function(e){
    $('#tab3').removeClass('active');
    $('#tab4').addClass('active');
    $('[data-target="#step3"]').removeClass('active');
    $('[data-target="#step4"]').addClass('active');
});

$(document).on('click','#mHowManyWeeksBtn',function(e){
    $('#tab4').removeClass('active');
    $('#tab5').addClass('active');
    $('[data-target="#step4"]').removeClass('active');
    $('[data-target="#step5"]').addClass('active');
});

$(document).on('click','#mMealsPerDayBtn',function(e){
    $('#tab5').removeClass('active');
    $('#tab6').addClass('active');
    $('[data-target="#step5"]').removeClass('active');
    $('[data-target="#step6"]').addClass('active');
});

})( jQuery );
