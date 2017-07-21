
(function( $ ) {

var m_curr_choose_plan = '';
var m_curr_gender = '';
var m_curr_how_many_weeks = '';
var m_curr_meals_per_day = '';
var p_curr_choose_plan = '';
var m_curr_dis_likes = '';
var m_dislikes = [];
function getCookieInfo(){
	// console.log(m_selected_dislikes_value,'before')
    m_curr_choose_plan = Cookies.get('m_curr_choose_plan');
    m_curr_gender = Cookies.get('m_curr_gender');
    m_curr_how_many_weeks = Cookies.get('m_curr_how_many_weeks');
    m_curr_meals_per_day = Cookies.get('m_curr_meals_per_day');
    m_selected_dislikes_value = Cookies.get('m_selected_dislikes_value');
    m_selected_addons_value = Cookies.get('m_selected_addons_value');
};
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
        $('[data-target="#step6-1"]').hide();
        $('[data-target="#step7-1"]').hide();
        $('[data-target="#step6"]').show();
        $('[data-target="#step7"]').show();
    }
    else if(m_curr_choose_plan === 'Customized'){
        $('[data-target="#step6-1"]').show();
        $('[data-target="#step7-1"]').show();
        $('[data-target="#step6"]').hide();
        $('[data-target="#step7"]').hide();
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
getCookieInfo();


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

getCookieInfo();

$(document).on('click','.mMealsPerDayBtn',function(e){
    $('#tab5').removeClass('active');
    $('[data-target="#step5"]').removeClass('active');
	getCookieInfo();
    if(m_curr_choose_plan === 'Athleat'){    
	    $('[data-target="#step6"]').addClass('active');
	    $('#tab6').addClass('active');
    }
    else if(m_curr_choose_plan === 'Customized'){
       	$('[data-target="#step6-1"]').addClass('active');
    	$('#tab6-1').addClass('active');
    }
    $('.mMealsPerDayBtn').removeClass('btn-success');
    var m_curr_meals_per_day = $(this).attr('data-mMealsPerDay');
    Cookies.set('m_curr_meals_per_day', m_curr_meals_per_day);
    if(m_curr_meals_per_day === '2'){
        $('#mMealsperDayTitle').text('2 Meals Per Day');
        $(this).addClass('btn-success');
    }
    else if(m_curr_meals_per_day === '3'){
        $('#mMealsperDayTitle').text('3 Meals Per Day');
        $(this).addClass('btn-success');
    }
    else if(m_curr_meals_per_day === '4'){
        $('#mMealsperDayTitle').text('4 Meals Per Day');
        $(this).addClass('btn-success');
    }
    else{
        $('#mMealsperDayTitle').text('How Many Meals Per Day?');   
    }
    mCreateChooseMealPlan();
    function mCreateChooseMealPlan(){
         console.log('----')
        mytable = $('<table></table>').attr({ id: "basicTable" });
        var mWeeks = new Number(m_curr_how_many_weeks);
        var mMealsPerDay = new Number(m_curr_meals_per_day);
        var mDays = 5;
        var tr = [];
        for (var i = 0; i < mWeeks; i++) {
            
            var row = $('<tr></tr>').attr({ class: ["class1", "class2", "class3"].join(' ') }).appendTo(mytable);
            for (var j = 0; j < mDays; j++) {
                $('<td></td>').text("text1").appendTo(row); 
            }
                     
        }
        console.log("TTTTT:"+mytable.html());
        mytable.appendTo("#mChooseMealPlanData");          
      
    }
});


$(document).on('click','.btnClearChoices',function(){
    clearCookies();
});

function clearCookies(){
    console.log('hello');
    Cookies.remove('m_curr_choose_plan');
    Cookies.remove('m_curr_gender');
    Cookies.remove('m_curr_how_many_weeks');
    Cookies.remove('m_curr_meals_per_day');
    Cookies.remove('m_selected_dislikes_value');
    Cookies.remove('m_selected_addons_value');
     if(m_curr_choose_plan ==undefined){
        console.log('hello');
	 	$('#mPlanTitle').text('Choose Your Meal Plan');
	 	$('.mChooseMealPlanBtn').removeClass('btn-success');
	}
	if(m_curr_gender === undefined){
	 	$('#mGenderTitle').text('Gender');
	 	$('.mGenderBtn').removeClass('btn-success');
	}
	if(m_curr_how_many_weeks == undefined){
	 	$('#mWeeksTitle').text('How Many Weeks');
	 	$('.mHowManyWeeksBtn').removeClass('btn-success');
	}
	if(m_curr_meals_per_day == undefined){
	 	$('#mMealsperDayTitle').text('How Many Meals Per Day');
	 	$('.mMealsPerDayBtn').removeClass('btn-success');
	}

}

$(document).on('click','.dislikes',function(){
    dislikesSelection();
});

function dislikesSelection(){
var m_selected_dislikes_value = []; // initialize empty array 
    $(".dislikes:checked").each(function(){
        m_selected_dislikes_value.push($(this).val());
        Cookies.set('m_selected_dislikes_value', m_selected_dislikes_value);
    });
}

$(document).on('click','.addons',function(){
    addonsSelection();
});

function addonsSelection(){
var m_selected_addons_value = []; // initialize empty array 
    $(".addons:checked").each(function(){
        m_selected_addons_value.push($(this).val());
        Cookies.set('m_selected_addons_value', m_selected_addons_value);
    });
}

$(document).on('click','#mSubmitBtn',function(e){
    // var obj = [];
   var obj = {'Meal Plan':m_curr_choose_plan,
            'Gender':m_curr_gender,
            'Weeks':m_curr_how_many_weeks,
            'Meals Per Day':m_curr_meals_per_day,
            'Dislikes':m_selected_dislikes_value,
            'Addons':m_selected_addons_value}
    console.log(obj);
    $.ajax({
                  url: '/post-values/',
                  contentType: 'application/json',
                  data: JSON.stringify(obj),
                  type: 'POST',
                  success: postSuccess,
            });

    function postSuccess(data,textStatus,jqXHR)
    {
        // alert('Sit back and let us take care of the rest. We will be getting in touch with you very soon.');
          swal(
          'Good job!',
          'Sit back and let us take care of the rest. We will be getting in touch with you very soon.',
          'success'
        )
      // window.location = "/menu";
      
    }
    });

})( jQuery );
