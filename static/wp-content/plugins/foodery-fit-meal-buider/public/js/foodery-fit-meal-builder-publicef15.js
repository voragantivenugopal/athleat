
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
    $('.mChooseMealPlanBtn').removeClass('btn-success');
    var m_curr_choose_plan = $(this).attr('data-mChoosePlan');
    Cookies.set('m_curr_choose_plan', m_curr_choose_plan);
    if(m_curr_choose_plan === 'Athleat'){
        $('#mPlanTitle').text('Athleat/Fat Loss');
        $(this).addClass('btn-success');
    }
    else if(m_curr_choose_plan === 'Customized'){
        $('#mPlanTitle').text('Customized');
        $(this).addClass('btn-success');
    }
    else{
        $('#mPlanTitle').text('Choose Your Meal Plan');   
    }
    
});

$(document).on('click','.mGenderBtn',function(e){
    $('#tab3').removeClass('active');
    $('#tab4').addClass('active');
    $('[data-target="#step3"]').removeClass('active');
    $('[data-target="#step4"]').addClass('active');
    $('.mGenderBtn').removeClass('btn-success');

    var m_curr_gender = $(this).attr('data-mGender');
    Cookies.set('m_curr_gender', m_curr_gender);
    if(m_curr_gender === 'Male'){
        $('#mGenderTitle').text('Male');
         $(this).addClass('btn-success');

    }
    else if(m_curr_gender === 'Female'){
        $('#mGenderTitle').text('Female');
         $(this).addClass('btn-success');
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
    $('.mHowManyWeeksBtn').removeClass('btn-success');
    var m_curr_how_many_weeks = $(this).attr('data-mHowManyWeeks');
    Cookies.set('m_curr_how_many_weeks', m_curr_how_many_weeks);    
    if(m_curr_how_many_weeks === '4'){
        $('#mWeeksTitle').text('4 Weeks');
        $(this).addClass('btn-success');
    }
    else if(m_curr_how_many_weeks === '8'){
        $('#mWeeksTitle').text('8 Weeks');
        $(this).addClass('btn-success');
    }
    else if(m_curr_how_many_weeks === '12'){
        $('#mWeeksTitle').text('12 Weeks');
        $(this).addClass('btn-success');
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
    $('.mMealsPerDayBtn').removeClass('btn-success');
    var m_curr_meals_per_day = $(this).attr('data-mMealsPerDay');
    Cookies.set('m_curr_meals_per_day', m_curr_meals_per_day);
    if(m_curr_meals_per_day === '2'){
        $('#mMealsperDayTitle').text('2');
        $(this).addClass('btn-success');
    }
    else if(m_curr_meals_per_day === '3'){
        $('#mMealsperDayTitle').text('3');
        $(this).addClass('btn-success');
    }
    else if(m_curr_meals_per_day === '4'){
        $('#mMealsperDayTitle').text('4');
        $(this).addClass('btn-success');
    }
    else{
        $('#mMealsperDayTitle').text('How Many Weeks');   
    }
});


getCookieInfo();

function getCookieInfo(){
    m_curr_choose_plan = Cookies.get('m_curr_choose_plan');
    m_curr_gender = Cookies.get('m_curr_gender');
    m_curr_how_many_weeks = Cookies.get('m_curr_how_many_weeks');
    m_curr_meals_per_day = Cookies.get('m_curr_meals_per_day');
   
};

$(document).on('click','.btnClearChoices',function(){
    clearCookies();
});

function clearCookies(){
	Cookies.remove('m_curr_choose_plan');
	Cookies.remove('m_curr_gender');
	Cookies.remove('m_curr_how_many_weeks');
	Cookies.remove('m_curr_meals_per_day');
	 if(m_curr_choose_plan === undefined){
	 	$('#mPlanTitle').text('Choose Your Meal Plan');
	 	$('.mChooseMealPlanBtn').removeClass('btn-success');
	}
	if(m_curr_gender === undefined){
	 	$('#mGenderTitle').text('Gender');
	 	$('.mGenderBtn').removeClass('btn-success');
	}
	if(m_curr_how_many_weeks === undefined){
	 	$('#mWeeksTitle').text('How Many Weeks');
	 	$('.mHowManyWeeksBtn').removeClass('btn-success');
	}
	if(m_curr_meals_per_day === undefined){
	 	$('#mMealsperDayTitle').text('How Many Meals Per Day');
	 	$('.mMealsPerDayBtn').removeClass('btn-success');
	}

}

$(document).on('click','#checkbox2',function(){
    updateSelection();
});

function updateSelection(){
var selected_value = []; // initialize empty array 
    $(".styled:checked").each(function(){
        selected_value.push($(this).val());
    });
    console.log('Dislikes',selected_value);
}

})( jQuery );
