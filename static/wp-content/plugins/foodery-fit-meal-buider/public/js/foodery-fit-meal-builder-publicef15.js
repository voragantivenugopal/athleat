
(function( $ ) {

var m_curr_choose_plan = '';
var m_curr_gender = '';
var m_curr_how_many_weeks = '';
var m_curr_meals_per_day = '';
var p_curr_choose_plan = '';
var m_curr_dis_likes = '';

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
    Cookies.set('m_curr_choose_plan', m_curr_choose_plan);
    console.log(Cookies,'####Cookies',m_curr_choose_plan)
    if(m_curr_choose_plan === 'Athleat'){
        $('#mPlanTitle').text('Athleat/Fat Loss');
    }
    else if(m_curr_choose_plan === 'Customized'){
        $('#mPlanTitle').text('Customized');
    }
    else{
        $('#mPlanTitle').text('Choose Your Meal Plan');   
    }
    
});

$(document).on('click','.mGenderBtn',function(e){
    console.log('m_curr_choose_plan',m_curr_choose_plan);
    $('#tab3').removeClass('active');
    $('#tab4').addClass('active');
    $('[data-target="#step3"]').removeClass('active');
    $('[data-target="#step4"]').addClass('active');
    var m_curr_gender = $(this).attr('data-mGender');
    console.log('m_curr_gender',m_curr_gender);
    if(m_curr_gender === 'Male'){
        $('#mGenderTitle').text('Male');
    }
    else if(m_curr_gender === 'Female'){
        $('#mGenderTitle').text('Female');
    }
    else{
        $('#mGenderTitle').text('Gender');   
    }
});
$(document).on('click','.mHowManyWeeksBtn',function(e){
    $('#tab4').removeClass('active');
    $('#tab5').addClass('active');
    $('[data-target="#step4"]').removeClass('active');
    $('[data-target="#step5"]').addClass('active');
    var m_curr_how_many_weeks = $(this).attr('data-mHowManyWeeks');
    console.log('m_curr_how_many_weeks',m_curr_how_many_weeks);    
    if(m_curr_how_many_weeks === '4'){
        $('#mWeeksTitle').text('4');
    }
    else if(m_curr_how_many_weeks === '8'){
        $('#mWeeksTitle').text('8');
    }
    else if(m_curr_how_many_weeks === '12'){
        $('#mWeeksTitle').text('12');
    }
    else{
        $('#mWeeksTitle').text('How Many Weeks');   
    }
});

$(document).on('click','.mMealsPerDayBtn',function(e){
    $('#tab5').removeClass('active');
    $('#tab6').addClass('active');
    $('[data-target="#step5"]').removeClass('active');
    $('[data-target="#step6"]').addClass('active');
    var m_curr_meals_per_day = $(this).attr('data-mMealsPerDay');
    console.log('m_curr_meals_per_day',m_curr_meals_per_day);
    if(m_curr_meals_per_day === '2'){
        $('#mMealsperDayTitle').text('2');
    }
    else if(m_curr_meals_per_day === '3'){
        $('#mMealsperDayTitle').text('3');
    }
    else if(m_curr_meals_per_day === '4'){
        $('#mMealsperDayTitle').text('4');
    }
    else{
        $('#mMealsperDayTitle').text('How Many Weeks');   
    }
});


getCookieInfo();

function getCookieInfo(){
    m_curr_choose_plan = Cookies.get('m_curr_choose_plan');
    console.log(m_curr_choose_plan,'m_curr_choose_plan--getCookieInfo')
    if(m_curr_choose_plan!=undefined){
        if(m_curr_choose_plan === 'Athleat'){
        $('#mPlanTitle').text('Athleat/Fat Loss');
	    }
	    else if(m_curr_choose_plan === 'Customized'){
	        $('#mPlanTitle').text('Customized');
	    }
	    else{
	        $('#mPlanTitle').text('Choose Your Meal Plan');   
	    }
	    }
};

$(document).on('click','.btnClearChoices',function(){
    clearEverything();
});


function clearEverything(){
	var m_curr_choose_plan = $(this).attr('data-mChoosePlan');
    
    clearCookies();    
    m_curr_choose_plan ='Choose Your Meal Plan';
}
function clearCookies(){
	console.log(m_curr_choose_plan,'m_curr_choose_plan--BeforeclearCookies')
	Cookies.remove('m_curr_choose_plan');
	m_curr_choose_plan ='Choose Your Meal Plan';
	console.log(m_curr_choose_plan,'m_curr_choose_plan--AfterclearCookies111')	
}

if(m_curr_choose_plan==='Athleat'){
    console.log('tettttt');
        $('#mPlanTitle').text('Athleat/Fat Loss');
    }
    else if(m_curr_choose_plan==='Customized'){
        $('#mPlanTitle').text('Customized');
    }
    else{
        $('#mPlanTitle').text('Choose Your Meal Plan');   
    }
})( jQuery );
