


(function( $ ) {
var mealidsw1d1obj = {};
var mealidsw2d1obj = {};
var mealidsw3d1obj = {};
var mealidsw4d1obj = {};
var mealidsw5d1obj = {};
var mealidsw6d1obj = {};
var mealidsw7d1obj = {};
var mealidsw8d1obj = {};
var mealidsw9d1obj = {};
var mealidsw10d1obj = {};
var mealidsw11d1obj = {};
var mealidsw12d1obj = {};

var mealidsw1d2obj = {};
var mealidsw2d2obj = {};
var mealidsw3d2obj = {};
var mealidsw4d2obj = {};
var mealidsw5d2obj = {};
var mealidsw6d2obj = {};
var mealidsw7d2obj = {};
var mealidsw8d2obj = {};
var mealidsw9d2obj = {};
var mealidsw10d2obj = {};
var mealidsw11d2obj = {};
var mealidsw12d2obj = {};

var mealidsw1d3obj = {};
var mealidsw2d3obj = {};
var mealidsw3d3obj = {};
var mealidsw4d3obj = {};
var mealidsw5d3obj = {};
var mealidsw6d3obj = {};
var mealidsw7d3obj = {};
var mealidsw8d3obj = {};
var mealidsw9d3obj = {};
var mealidsw10d3obj = {};
var mealidsw11d3obj = {};
var mealidsw12d3obj = {};

var mealidsw1d4obj = {};
var mealidsw2d4obj = {};
var mealidsw3d4obj = {};
var mealidsw4d4obj = {};
var mealidsw5d4obj = {};
var mealidsw6d4obj = {};
var mealidsw7d4obj = {};
var mealidsw8d4obj = {};
var mealidsw9d4obj = {};
var mealidsw10d4obj = {};
var mealidsw11d4obj = {};
var mealidsw12d4obj = {};

var mealidsw1d5obj = {};
var mealidsw2d5obj = {};
var mealidsw3d5obj = {};
var mealidsw4d5obj = {};
var mealidsw5d5obj = {};
var mealidsw6d5obj = {};
var mealidsw7d5obj = {};
var mealidsw8d5obj = {};
var mealidsw9d5obj = {};
var mealidsw10d5obj = {};
var mealidsw11d5obj = {};
var mealidsw12d5obj = {};

var meal_data = [];
var week1_obj = {};
var meal_ids = [];
var week = '';
var day = '';
var day_data = {}

var mealIds = [];
var dayvalue = [];
var dayssingledata= [];
var mSingleMealPrice = 0;
var mSingleMealFat = 0;
var mSingleMealCarb = 0;
var mSingleMealProtein = 0;

var mTotalPrice = 0;
var mTotalFat = 0;
var mTotalCarb = 0;
var mTotalProtein = 0;

var mMealActiveID ='';
var meal_data_copy = {};
var mMealActiveIDs = {};
var mMealActiveIDsArry = [];
var testPrice = 0;
var meal_data_obj = {}            

getCookieInfo()
var dynamicVariablesDaylist = []
var dynamicVariablesWeeklist = []
var mytotal = 0


var m_curr_choose_plan = '';
// var m_curr_gender = '';
var m_curr_how_many_weeks = '';
var m_curr_meals_per_day = '';
var p_curr_choose_plan = '';
var m_curr_dis_likes = '';
var m_dislikes = [];

var msummeryobj = {};
getCookieInfo();
function getCookieInfo(){
    m_curr_choose_plan = Cookies.get('m_curr_choose_plan');
    // m_curr_gender = Cookies.get('m_curr_gender');
    m_curr_how_many_weeks = Cookies.get('m_curr_how_many_weeks');
    m_curr_meals_per_day = Cookies.get('m_curr_meals_per_day');
    m_meals_closest_date = Cookies.get('m_meals_closest_date');
    m_selected_dislikes_value = Cookies.get('m_selected_dislikes_value');
    m_selected_addons_value = Cookies.get('m_selected_addons_value');
    m_closest_date = Cookies.get('m_closest_date');
    meal_data = Cookies.get('meal_data');
    mPriceTotal = Cookies.get('mPriceTotal');
    mFatTotal = Cookies.get('mFatTotal');    
    mCarbTotal = Cookies.get('mCarbTotal');
    mProteinTotal = Cookies.get('mProteinTotal');
    mAthleatFinalPrice = Cookies.get('mAthleatFinalPrice')
    msummeryobj = Cookies.get('msummeryobj')
};

$(document).on('click','.btnClearChoices',function(){
    clearCookies();
});

// Start Button 
$(document).on('click','#mStartBtn',function(e){
    console.log('start here button');
    $('#tab1').removeClass('active');
    $('#tab2').addClass('active');
    $('[data-target="#step1"]').removeClass('active');
    $('[data-target="#step2"]').addClass('active');
    $('.bootstrapWizard  li:lt(2)').css('pointer-events','all');

});
$(document).on('click','.mChooseMealPlanBtn-A',function(e){
    $('#mChooseMealPlanBtn-A').show();
        $(this).addClass('btn-success');
    $('.mChooseMealPlanBtn').removeClass('btn-success');

        m_curr_choose_plan = $(this).attr('data-mChoosePlan');
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

$(document).on('click','.mChooseMealPlanBtn-L',function(e){
    $('#tab2').removeClass('active');
    // $('#tab3').addClass('active');
    $('#tab4').addClass('active');
    $('[data-target="#step2"]').removeClass('active');
    // $('[data-target="#step3"]').addClass('active');
    $('.mChooseMealPlanBtn-H').removeClass('btn-success');

    $('[data-target="#step4"]').addClass('active');
    $('.mChooseMealPlanBtn').removeClass('btn-success');
    m_curr_choose_plan = $(this).attr('data-mChoosePlan');
    Cookies.set('m_curr_choose_plan', m_curr_choose_plan);
    if(m_curr_choose_plan === 'Athleat-l'){
        $('#mPlanTitle').text('Athleat Low Carb');
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
    $('.bootstrapWizard  li:lt(3)').css('pointer-events','all');

});
$(document).on('click','.mChooseMealPlanBtn-H',function(e){
    $('#tab2').removeClass('active');
    // $('#tab3').addClass('active');
    $('#tab4').addClass('active');
    $('[data-target="#step2"]').removeClass('active');
    // $('[data-target="#step3"]').addClass('active');
    $('[data-target="#step4"]').addClass('active');
    $('.mChooseMealPlanBtn-L').removeClass('btn-success');
     m_curr_choose_plan = $(this).attr('data-mChoosePlan');
    Cookies.set('m_curr_choose_plan', m_curr_choose_plan);

    if(m_curr_choose_plan === 'Athleat-h'){
        $('#mPlanTitle').text('Athleat High Carb');
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
    $('.bootstrapWizard  li:lt(3)').css('pointer-events','all');

});
$(document).on('click','.mChooseMealPlanBtn',function(e){
    $('#tab2').removeClass('active');
    // $('#tab3').addClass('active');
    $('#mChooseMealPlanBtn-A').hide();
    $('.mChooseMealPlanBtn-A').removeClass('btn-success');

    $('#tab4').addClass('active');
    $('[data-target="#step2"]').removeClass('active');
    // $('[data-target="#step3"]').addClass('active');
    $('[data-target="#step4"]').addClass('active');
    $('.mChooseMealPlanBtn').removeClass('btn-success');
    $('.mChooseMealPlanBtn-L').removeClass('btn-success');
    $('.mChooseMealPlanBtn-H').removeClass('btn-success');
    $('.mChooseMealPlanBtn-A').removeClass('btn-success');
    m_curr_choose_plan = $(this).attr('data-mChoosePlan');
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
    $('.bootstrapWizard  li:lt(3)').css('pointer-events','all');

});

$(document).on('click','#mMealsWeeksNext',function(e){
    $('#tab4').removeClass('active');
    $('#tab5').addClass('active');
    $('[data-target="#step4"]').removeClass('active');
    $('[data-target="#step5"]').addClass('active');
});
$(document).on('click','#mMealsPerDayNext',function(e){
    $('#tab5').removeClass('active');
    $('#tab6').addClass('active');
    $('[data-target="#step5"]').removeClass('active');
    $('[data-target="#step6"]').addClass('active');
});
$(document).on('click','#mClosestStartDateNext',function(e){
    $('#tab7-1').removeClass('active');
    $('#tab8').addClass('active');
    $('[data-target="#step7-1"]').removeClass('active');
    $('[data-target="#step8"]').addClass('active');
});
$(document).on('click','#mAddonsNext',function(e){
    $('#tab7').removeClass('active');
    $('#tab8').addClass('active');
    $('[data-target="#step7"]').removeClass('active');
    $('[data-target="#step8"]').addClass('active');
});
$(document).on('click','#mDislikesNext',function(e){
    $('#tab6').removeClass('active');
    $('#tab7').addClass('active');
    $('[data-target="#step6"]').removeClass('active');
    $('[data-target="#step7"]').addClass('active');
});
$(document).on('click','#mChooseMealPlanNext',function(e){
    getCookieInfo();
    //console.log(meal_data_obj,'#################',meal_data_obj.m_curr_how_many_weeks,meal_data_obj.m_curr_how_many_weeks == 4,(meal_data_obj.week1.day1 && meal_data_obj.week1.day2),meal_data_obj.week1.day1)
    if(m_curr_how_many_weeks == 4 && (Object.keys(meal_data_obj.week1.day1 && meal_data_obj.week1.day2 && meal_data_obj.week1.day3 && meal_data_obj.week1.day4 && meal_data_obj.week1.day5 &&
        meal_data_obj.week2.day1 && meal_data_obj.week2.day2 && meal_data_obj.week2.day3 && meal_data_obj.week2.day4 && meal_data_obj.week2.day5 &&
        meal_data_obj.week3.day1 && meal_data_obj.week3.day2 && meal_data_obj.week3.day3 && meal_data_obj.week3.day4 && meal_data_obj.week3.day5 &&
        meal_data_obj.week4.day1 && meal_data_obj.week4.day2 && meal_data_obj.week4.day3 && meal_data_obj.week4.day4 && meal_data_obj.week4.day5
        ).length == 0)){

        swal('Please select all meals')        
    }
    else if(m_curr_how_many_weeks == 8 && (Object.keys(meal_data_obj.week1.day1 && meal_data_obj.week1.day2 && meal_data_obj.week1.day3 && meal_data_obj.week1.day4 && meal_data_obj.week1.day5 &&
            meal_data_obj.week2.day1 && meal_data_obj.week2.day2 && meal_data_obj.week2.day3 && meal_data_obj.week2.day4 && meal_data_obj.week2.day5 &&
            meal_data_obj.week3.day1 && meal_data_obj.week3.day2 && meal_data_obj.week3.day3 && meal_data_obj.week3.day4 && meal_data_obj.week3.day5 &&
            meal_data_obj.week4.day1 && meal_data_obj.week4.day2 && meal_data_obj.week4.day3 && meal_data_obj.week4.day4 && meal_data_obj.week4.day5 &&
            meal_data_obj.week5.day1 && meal_data_obj.week5.day2 && meal_data_obj.week5.day3 && meal_data_obj.week5.day4 && meal_data_obj.week5.day5 &&
            meal_data_obj.week6.day1 && meal_data_obj.week6.day2 && meal_data_obj.week6.day3 && meal_data_obj.week6.day4 && meal_data_obj.week6.day5 &&
            meal_data_obj.week7.day1 && meal_data_obj.week7.day2 && meal_data_obj.week7.day3 && meal_data_obj.week7.day4 && meal_data_obj.week7.day5 &&
            meal_data_obj.week8.day1 && meal_data_obj.week8.day2 && meal_data_obj.week8.day3 && meal_data_obj.week8.day4 && meal_data_obj.week8.day5
            ).length == 0)){

            swal('Please select all meals')        
    }
    else if(m_curr_how_many_weeks == 12 && (Object.keys(meal_data_obj.week1.day1 && meal_data_obj.week1.day2 && meal_data_obj.week1.day3 && meal_data_obj.week1.day4 && meal_data_obj.week1.day5 &&
        meal_data_obj.week2.day1 && meal_data_obj.week2.day2 && meal_data_obj.week2.day3 && meal_data_obj.week2.day4 && meal_data_obj.week2.day5 &&
        meal_data_obj.week3.day1 && meal_data_obj.week3.day2 && meal_data_obj.week3.day3 && meal_data_obj.week3.day4 && meal_data_obj.week3.day5 &&
        meal_data_obj.week4.day1 && meal_data_obj.week4.day2 && meal_data_obj.week4.day3 && meal_data_obj.week4.day4 && meal_data_obj.week4.day5 &&
        meal_data_obj.week5.day1 && meal_data_obj.week5.day2 && meal_data_obj.week5.day3 && meal_data_obj.week5.day4 && meal_data_obj.week5.day5 &&
        meal_data_obj.week6.day1 && meal_data_obj.week6.day2 && meal_data_obj.week6.day3 && meal_data_obj.week6.day4 && meal_data_obj.week6.day5 &&
        meal_data_obj.week7.day1 && meal_data_obj.week7.day2 && meal_data_obj.week7.day3 && meal_data_obj.week7.day4 && meal_data_obj.week7.day5 &&
        meal_data_obj.week8.day1 && meal_data_obj.week8.day2 && meal_data_obj.week8.day3 && meal_data_obj.week8.day4 && meal_data_obj.week8.day5 &&
        meal_data_obj.week9.day1 && meal_data_obj.week9.day2 && meal_data_obj.week9.day3 && meal_data_obj.week9.day4 && meal_data_obj.week9.day5 &&
        meal_data_obj.week10.day1 && meal_data_obj.week10.day2 && meal_data_obj.week10.day3 && meal_data_obj.week10.day4 && meal_data_obj.week10.day5 &&
        meal_data_obj.week11.day1 && meal_data_obj.week11.day2 && meal_data_obj.week11.day3 && meal_data_obj.week11.day4 && meal_data_obj.week11.day5 &&
        meal_data_obj.week12.day1 && meal_data_obj.week12.day2 && meal_data_obj.week12.day3 && meal_data_obj.week12.day4 && meal_data_obj.week12.day5
        ).length == 0)){

          swal('Please select all meals');                 
        }
    else{
       $('#tab6-1').removeClass('active');
       $('#tab7-1').addClass('active');
       $('[data-target="#step6-1"]').removeClass('active');
       $('[data-target="#step7-1"]').addClass('active');
    }
});



$(document).on('click','.mHowManyWeeksBtn',function(e){
    $('.mAthleatPrice').hide();
    clearPriceCookies();
    $('#tab4').removeClass('active');
    $('#tab5').addClass('active');
    $('[data-target="#step4"]').removeClass('active');
    $('[data-target="#step5"]').addClass('active');
    getCookieInfo();
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
    $('.bootstrapWizard  li:lt(4)').css('pointer-events','all');

});

var mAthleatFinalPrice = '';
$(document).on('click','.mMealsPerDayBtn',function(e){
    $('.mMealsPerDayBtn').removeClass('btn-success');
    $('#mChooseMealPlanData').html('');
    clearPriceCookies();
    getCookieInfo();
    mPriceTotal = 0;
    mFatTotal = 0;
    mProteinTotal = 0;
    mCarbTotal = 0;
    Cookies.set('mPriceTotal', mPriceTotal);
    Cookies.set('mFatTotal', mFatTotal);
    Cookies.set('mProteinTotal', mProteinTotal);
    Cookies.set('mCarbTotal', mCarbTotal);
    console.log('msummeryobj',msummeryobj);
    msummeryobj = '';
    clearPriceCookies();

    getCookieInfo();
    // console.log('mPriceTotal',mPriceTotal)

    
    // console.log('msummeryobj--',msummeryobj)
    if(m_curr_choose_plan == 'Athleat-l' || m_curr_choose_plan == 'Athleat-h'){    
        $('.dislikes').prop('checked', false); 
        console.log('unchecked')
        $('.addons').prop('checked', false); 
        clearPriceCookies()
        getCookieInfo();
        var m_curr_meals_per_day = $(this).attr('data-mMealsPerDay');        
        Cookies.set('m_curr_meals_per_day', m_curr_meals_per_day);                
        // console.log('m_curr_meals_per_day',m_curr_meals_per_day);
        if(m_curr_meals_per_day == '2'){
            $('#mMealsperDayTitle').text('2 Meals Per Day');
            $(this).addClass('btn-success');
            mAthleatFinalPrice = 400*m_curr_how_many_weeks;
            console.log('mFinalPrice',mAthleatFinalPrice)
        }
        else if(m_curr_meals_per_day === '3'){
            mAthleatFinalPrice = 575*m_curr_how_many_weeks;
            // console.log('mFinalPrice',mAthleatFinalPrice)
            $('#mMealsperDayTitle').text('3 Meals Per Day');
            $(this).addClass('btn-success');
        }
        else if(m_curr_meals_per_day === '4'){
            mAthleatFinalPrice = 700*m_curr_how_many_weeks;
            // console.log('mFinalPrice',mAthleatFinalPrice)
            $('#mMealsperDayTitle').text('4 Meals Per Day');
            $(this).addClass('btn-success');
        }
        else{
            $('#mMealsperDayTitle').text('How Many Meals Per Day?');   
        }
        $('.mAthleatPrice').show();
        Cookies.set('mAthleatFinalPrice',mAthleatFinalPrice)
        $('.mAthleatPriceDesc').text(mAthleatFinalPrice);
    }
    else if(m_curr_choose_plan == 'Customized'){
        $('[data-target="#step6-1"]').addClass('active');
        $('#tab6-1').addClass('active');
        var m_curr_meals_per_day = $(this).attr('data-mMealsPerDay');
        Cookies.set('m_curr_meals_per_day', m_curr_meals_per_day);
        getCookieInfo();
        if(m_curr_meals_per_day == '2'){
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
         $('[data-target="#step5"]').removeClass('active');
            $('#tab5').removeClass('active');
        mCreateChooseMealPlan();
    }
    var date = moment().endOf('week');
    var m_meals_closest_date = moment(date).format('DD-MM-YYYY');
    $('#mMealsNearestSaturdayDate').text(m_meals_closest_date);
    Cookies.set('m_meals_closest_date', m_meals_closest_date);
    
   

    function mCreateChooseMealPlan(){
        //getCookieInfo();
        for(var i=1; i<=m_curr_how_many_weeks; i++){
            str = '';
            str += '<div class="customizerSpacer1"></div>';
            str += '<div class="cWeekHeader">';
                str += '<div class="btnWeekCopyPaste hand tippyWeek cWeekTitle" data-week="'+i+'"><h3 style="line-height:50px !important;">Week '+i+'</h3></div>';
                // str += '<div class="" style="float:left; background-color:#ddd; height:50px; padding:8px 20px 0 0px; line-height:50px;"><img src="https://cdn3.iconfinder.com/data/icons/stroke/53/Copy-512.png" style="width:24px;"></div>';
                // str += '<div class="cWeekDate">'+ moment(Date.parse(curr_start_date)).add(i-1, 'week').format('MMM Do') +'</div>';

                str += '<div class="clear"></div>';
            str += '</div>';
            str += '<div class="cCustomizerWeek" data-week="'+i+'"></div>';
            $('#mChooseMealPlanData').append(str);
        }

        $('.cCustomizerWeek').each(function(i,item){

            str = '<div class="">';
            for(var d=1; d<=5; d++){
                var dayNumber = d;
                var weekNumber = i+1;

                str += '<div class="cCustomizerDay " data-week="'+weekNumber+'" data-day="'+dayNumber+'" data-date="" style="">';
                    str += '<div class="text-center btnDayCopyPaste hand tippyDay" title="tooltip" data-week="'+weekNumber+'" data-day="'+dayNumber+'" style="padding: 0px 0 0 0;"><h4>DAY '+dayNumber+'</h4></div>';
                    str += '<div class="cCustomizerDayMeals" data-week="'+weekNumber+'" data-day="'+dayNumber+'" data-date="" style=""></div>';
                    str += '<div class="cCustomizerDayNutrition hand" data-week="'+weekNumber+'" data-day="'+dayNumber+'" data-date="" style=""><div class="txtDayKCals" data-week="'+weekNumber+'"></div><div class="cDailyExtraValues" data-week="'+weekNumber+'"><div class="txtDayProtein"></div><div class="txtDayCarbs"></div><div class="txtDayFat"></div></div></div>';
                str += '</div>';
            }
            // str += '<div class="clear"></div>';
            str += '</div>';
            $('.cCustomizerWeek[data-week="'+(i+1)+'"]').html(str);
        });  

        $('.cCustomizerDayMeals').each(function(i,item){
            var temp = item;
            var weekNum = $(item).data('week');
            var dayNum = $(item).data('day');

            str = '<div class="">';
                for(var m=1; m<=m_curr_meals_per_day; m++){
                    str += '<div class="hand">';

                        str += '<div class="btnCustomizerMeal" id="'+weekNum+dayNum+m+'"  data-week="'+weekNum+'" data-day="'+dayNum+'" data-meal="'+m+'" data-type="" data-slug="" style="position:relative;">';
                            str += '<div class="btnCustomizerMealTitle">Meal '+m+'</div>';
                            str += '<div class="btnCustomizerMealDesc" style="color:red;">choose your meal</div>';
                            //str += '<div class="btnCustomizerMealPrice" style="color:red;">Price</div>';
                            // str += '<div class="btnCustomizerMealDesc"></div>';
                            str += '<div class="btnCustomizerMealDescBg "></div>';
                        str += '</div>';

                    str += '</div>';
                }

            str += '</div>';

            $(temp).html(str);
        });

      
    }
    $('.bootstrapWizard  li:lt(4)').css('pointer-events','all');

});

var data_week = 0;
var data_day = 0;
var data_meal = 0;
// var obbbj = {};
$(document).on('click','.btnCustomizerMeal',function(e){
data_week = $(this).attr('data-week');
data_day = $(this).attr('data-day');
data_meal = $(this).attr('data-meal');
    $('#myModal').modal('show');
});
          
            
getCookieInfo();

function dynamicVariables(day_data){
    var day_data = new Array(day_data);
    for (var i=0; i<day_data.length; i++) {
        var day_data = day_data[i];
        return day_data = {}
    }
}

function dynamicVariablesDay(week,day){
    var mealids = new Array(day);
    for (var i=0; i<mealids.length; i++) {
        var mealids = mealids[i];
        return mealids+week 
    }
}


$(document).on('click','#modal-add-meal-btn',function(e){

            console.log('before msummeryobj',msummeryobj);

        
        // var meal_item = $('.modal-left #nav-tabs-wrapper .active a').text();
        var meal_item = $('.modal-body .tab-pane.active .nav-tabs .active a').text();
        console.log('meal_item====',meal_item)
        var meal_item_id = $('.modal-body .tab-pane.active .nav-tabs .active a').attr('id');
        console.log('meal_item_id====',meal_item_id)

       

        // console.log('meal ID',meal_item_id);
            $('.btnCustomizerMeal[data-week="'+data_week+'"][data-day="'+data_day+'"][data-meal="'+data_meal+'"] .btnCustomizerMealDesc').css('color','#4B5EEB').html('<strong>'+meal_item+'</strong>');
            $('.btnCustomizerMeal[data-week="'+data_week+'"][data-day="'+data_day+'"][data-meal="'+data_meal+'"] .btnCustomizerMealPrice').css('color','#4B5EEB').html('<strong>'+mSingleMealPrice+'</strong>');
            mMealActiveID = $('.btnCustomizerMeal[data-week="'+data_week+'"][data-day="'+data_day+'"][data-meal="'+data_meal+'"]').attr('id');
            
            meal_data_copy = {
                'Meal Info': {
                    'id' : mMealActiveID,
                    'MealID':meal_item_id
                }
            }
            // console.log('mMealActiveID',mMealActiveID)
            $('#myModal').modal('hide');
            obj2 = {'Week':data_week,'Day':data_day,'Meal':data_meal,'Meal ID':meal_item_id};

            week = 'Week'+data_week;
            day = 'Day'+data_day;



            mSingleMealPrice = parseInt($('.modal-body .tab-pane.active .tab-content .tab-pane.active #dataPrice').text());
            mSingleMealFat = $('.modal-body .tab-pane.active .tab-content .tab-pane.active #dataFat').text();
            mSingleMealCarb = $('.modal-body .tab-pane.active .tab-content .tab-pane.active #dataCarb').text();
            mSingleMealProtein = $('.modal-body .tab-pane.active .tab-content .tab-pane.active #dataProtein').text();

            mMealActiveIDs[mMealActiveID] =   {
                'dayId':mMealActiveID,
                'Price': mSingleMealPrice,
                'MealId':meal_item_id,
                'Fat': mSingleMealFat,
                'Protein':mSingleMealProtein,
                'Carb':mSingleMealCarb

            }


            msummeryobj = mMealActiveIDsArry[0];

            var mPriceTotal = 0;
            var mFatTotal = 0;
            var mProteinTotal =0;
            var mCarbTotal =0;
            Cookies.set('msummeryobj', msummeryobj);
            console.log('msummeryobj',msummeryobj)
            
            Object.keys(msummeryobj).forEach(function(key) {
                mPriceTotal+= msummeryobj[key].Price;
                mFatTotal= parseFloat(mFatTotal) + parseFloat(msummeryobj[key].Fat);
                mProteinTotal = parseFloat(mProteinTotal) + parseFloat(msummeryobj[key].Protein);
                mCarbTotal = parseFloat(mCarbTotal) + parseFloat(msummeryobj[key].Carb);
                Cookies.set('mPriceTotal', mPriceTotal);
                Cookies.set('mFatTotal', mFatTotal);
                Cookies.set('mProteinTotal', mProteinTotal);
                Cookies.set('mCarbTotal', mCarbTotal);
                $('.mtxtStatsPricePerMeal').text(mPriceTotal);
                $('.mtxtDebugDailyFat').text(mFatTotal);
                $('.mtxtDebugDailyCarbs').text(mCarbTotal);
                $('.mtxtDebugDailyProtein').text(mProteinTotal);
            });

            // console.log('msummeryobj',msummeryobj)

            if(week == 'Week1' && day == 'Day1'){
                mealidsw1d1obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week1' && day == 'Day2'){
                mealidsw1d2obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week1' && day == 'Day3'){
                mealidsw1d3obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week1' && day == 'Day4'){
                mealidsw1d4obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week1' && day == 'Day5'){
                mealidsw1d5obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week2' && day == 'Day1'){
                mealidsw2d1obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
             if(week == 'Week2' && day == 'Day2'){
                mealidsw2d2obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week2' && day == 'Day3'){
                mealidsw2d3obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week2' && day == 'Day4'){
                mealidsw2d4obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week2' && day == 'Day5'){
                mealidsw2d5obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week3' && day == 'Day1'){
                mealidsw3d1obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
             if(week == 'Week3' && day == 'Day2'){
                mealidsw3d2obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week3' && day == 'Day3'){
                mealidsw3d3obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week3' && day == 'Day4'){
                mealidsw3d4obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week3' && day == 'Day5'){
                mealidsw3d5obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }

            if(week == 'Week4' && day == 'Day1'){
                mealidsw4d1obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
             if(week == 'Week4' && day == 'Day2'){
                mealidsw4d2obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week4' && day == 'Day3'){
                mealidsw4d3obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week4' && day == 'Day4'){
                mealidsw4d4obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week4' && day == 'Day5'){
                mealidsw4d5obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week5' && day == 'Day1'){
                mealidsw5d1obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
             if(week == 'Week5' && day == 'Day2'){
                mealidsw5d2obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week5' && day == 'Day3'){
                mealidsw5d3obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week5' && day == 'Day4'){
                mealidsw5d4obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week5' && day == 'Day5'){
                mealidsw5d5obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week6' && day == 'Day1'){
                mealidsw6d1obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
             if(week == 'Week6' && day == 'Day2'){
                mealidsw6d2obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week6' && day == 'Day3'){
                mealidsw6d3obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week6' && day == 'Day4'){
                mealidsw6d4obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week6' && day == 'Day5'){
                mealidsw6d5obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week7' && day == 'Day1'){
                mealidsw7d1obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
             if(week == 'Week7' && day == 'Day2'){
                mealidsw7d2obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week7' && day == 'Day3'){
                mealidsw7d3obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week7' && day == 'Day4'){
                mealidsw7d4obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week7' && day == 'Day5'){
                mealidsw7d5obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week8' && day == 'Day1'){
                mealidsw8d1obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
             if(week == 'Week8' && day == 'Day2'){
                mealidsw8d2obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week8' && day == 'Day3'){
                mealidsw8d3obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week8' && day == 'Day4'){
                mealidsw8d4obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week8' && day == 'Day5'){
                mealidsw8d5obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week9' && day == 'Day1'){
                mealidsw9d1obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
             if(week == 'Week9' && day == 'Day2'){
                mealidsw9d2obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week9' && day == 'Day3'){
                mealidsw9d3obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week9' && day == 'Day4'){
                mealidsw9d4obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week9' && day == 'Day5'){
                mealidsw9d5obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week10' && day == 'Day1'){
                mealidsw10d1obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
             if(week == 'Week10' && day == 'Day2'){
                mealidsw10d2obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week10' && day == 'Day3'){
                mealidsw10d3obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week10' && day == 'Day4'){
                mealidsw10d4obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week10' && day == 'Day5'){
                mealidsw10d5obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week11' && day == 'Day1'){
                mealidsw11d1obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
             if(week == 'Week11' && day == 'Day2'){
                mealidsw11d2obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week11' && day == 'Day3'){
                mealidsw11d3obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week11' && day == 'Day4'){
                mealidsw11d4obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week11' && day == 'Day5'){
                mealidsw11d5obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week12' && day == 'Day1'){
                mealidsw12d1obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
             if(week == 'Week12' && day == 'Day2'){
                mealidsw12d2obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week12' && day == 'Day3'){
                mealidsw12d3obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week12' && day == 'Day4'){
                mealidsw12d4obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }
            if(week == 'Week12' && day == 'Day5'){
                mealidsw12d5obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id
                }
            }

            meal_data_obj = {
                'week1'   : {'day1':mealidsw1d1obj,'day2':mealidsw1d2obj,'day3':mealidsw1d3obj,'day4':mealidsw1d4obj,'day5':mealidsw1d5obj},
                'week2'   : {'day1':mealidsw2d1obj,'day2':mealidsw2d2obj,'day3':mealidsw2d3obj,'day4':mealidsw2d4obj,'day5':mealidsw2d5obj},
                'week3'   : {'day1':mealidsw3d1obj,'day2':mealidsw3d2obj,'day3':mealidsw3d3obj,'day4':mealidsw3d4obj,'day5':mealidsw3d5obj},
                'week4'   : {'day1':mealidsw4d1obj,'day2':mealidsw4d2obj,'day3':mealidsw4d3obj,'day4':mealidsw4d4obj,'day5':mealidsw4d5obj},
                'week5'   : {'day1':mealidsw5d1obj,'day2':mealidsw5d2obj,'day3':mealidsw5d3obj,'day4':mealidsw5d4obj,'day5':mealidsw5d5obj},
                'week6'   : {'day1':mealidsw6d1obj,'day2':mealidsw6d2obj,'day3':mealidsw6d3obj,'day4':mealidsw6d4obj,'day5':mealidsw6d5obj},
                'week7'   : {'day1':mealidsw7d1obj,'day2':mealidsw7d2obj,'day3':mealidsw7d3obj,'day4':mealidsw7d4obj,'day5':mealidsw7d5obj},
                'week8'   : {'day1':mealidsw8d1obj,'day2':mealidsw8d2obj,'day3':mealidsw8d3obj,'day4':mealidsw8d4obj,'day5':mealidsw8d5obj},
                'week9'   : {'day1':mealidsw9d1obj,'day2':mealidsw9d2obj,'day3':mealidsw9d3obj,'day4':mealidsw9d4obj,'day5':mealidsw9d5obj},
                'week10'  : {'day1':mealidsw10d1obj,'day2':mealidsw10d2obj,'day3':mealidsw10d3obj,'day4':mealidsw10d4obj,'day5':mealidsw10d5obj},
                'week11'  : {'day1':mealidsw11d1obj,'day2':mealidsw11d2obj,'day3':mealidsw11d3obj,'day4':mealidsw11d4obj,'day5':mealidsw11d5obj},
                'week12'  : {'day1':mealidsw12d1obj,'day2':mealidsw12d2obj,'day3':mealidsw12d3obj,'day4':mealidsw12d4obj,'day5':mealidsw12d5obj},
            }

            
           
            // console.log("meal_data",meal_data_obj)
            Cookies.set('meal_data',meal_data_obj)
           
    });

mMealActiveIDsArry.push(mMealActiveIDs)


$(document).on('click','.dislikes',function(){
    dislikesSelection();
    $('.bootstrapWizard  li:lt(6)').css('pointer-events','all');

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
    console.log('m_selected_addons_value',m_selected_addons_value)
}

//Displaying nearest saturday
$(document).on('click','#tab6-1',function(){
    var date = moment().endOf('week');
    var m_closest_date = moment(date).format('DD-MM-YYYY');
    $('#mNearestSaturdayDate').text(m_closest_date);
    Cookies.set('m_closest_date', m_closest_date);
});

var obj = [];
$(document).on('click','#mSubmitBtn',function(){
    $('.bootstrapWizard  li').css('pointer-events','none');

   getCookieInfo();
   if(m_curr_choose_plan === 'Athleat-l' || m_curr_choose_plan === 'Athleat-h'){ 
            var obj = {'Meal Plan':m_curr_choose_plan,
            // 'Gender':m_curr_gender,
            'Weeks':m_curr_how_many_weeks,
            'Meals Per Day':m_curr_meals_per_day,
            'm_meals_closest_date':m_meals_closest_date,
            'mAthleatFinalPrice':mAthleatFinalPrice,
            'Dislikes':m_selected_dislikes_value,
            'Addons':m_selected_addons_value}
        $.ajax({
                      url: '/post-values/',
                      contentType: 'application/json',
                      data: JSON.stringify(obj),
                      type: 'POST',
                      success: postSuccess,
                });
        
    }
    
if(m_curr_choose_plan === 'Customized'){
    
    var obj2 = {
        'Meal Plan':m_curr_choose_plan,
        'Weeks':m_curr_how_many_weeks,
        'Meals Per Day':m_curr_meals_per_day,
        'm_closest_date':m_closest_date,
        'meal_data':meal_data_obj, 
        'mPriceTotal':mPriceTotal,
        'mFatTotal':mFatTotal,
        'mProteinTotal':mProteinTotal,
        'mCarbTotal':mCarbTotal
    } 
    
    $.ajax({
                      url: '/post-values/',
                      contentType: 'application/json',
                      data: JSON.stringify(obj2),
                      type: 'POST',
                      success: postSuccess,
    });        
   
}

    function postSuccess(data,textStatus,jqXHR)
    {
        // alert('Sit back and let us take care of the rest. We will be getting in touch with you very soon.');
          swal(
          'Good job!',
          'Sit back and let us take care of the rest. We will be getting in touch with you very soon.',
          'success'
        )
      window.location = "/menu";
      
    }

    clearCookies();
    clearPriceCookies();
    //location.reload();
    });
function clearPriceCookies(){

    Cookies.remove('mPriceTotal');
    Cookies.remove('mFatTotal');
    Cookies.remove('mProteinTotal');
    Cookies.remove('mCarbTotal');

}
function clearCookies(){
     $('.dislikes').prop('checked', false); 
     $('.addons').prop('checked', false); 
    clearPriceCookies();
    Cookies.remove('m_curr_choose_plan',null);
    // Cookies.remove('m_curr_gender');
    Cookies.remove('m_curr_how_many_weeks');
    Cookies.remove('m_curr_meals_per_day');
    Cookies.remove('m_meals_closest_date');
    Cookies.remove('m_selected_dislikes_value');
    Cookies.remove('m_selected_addons_value');
    Cookies.remove('m_closest_date');
    Cookies.remove('meal_data');
    Cookies.remove('mPriceTotal');
    Cookies.remove('mFatTotal');
    Cookies.remove('mProteinTotal');
    Cookies.remove('mCarbTotal');
    Cookies.remove('mAthleatFinalPrice');
    Cookies.remove('msummeryobj');
    
    getCookieInfo();

     if(m_curr_choose_plan == undefined){
        $('#mPlanTitle').text('Choose Your Meal Plan');
        $('.mChooseMealPlanBtn').removeClass('btn-success');
    }
   
    if(m_curr_how_many_weeks == undefined){
        $('#mWeeksTitle').text('How Many Weeks');
        $('.mHowManyWeeksBtn').removeClass('btn-success');
    }
    if(m_curr_meals_per_day == undefined){
        $('#mMealsperDayTitle').text('How Many Meals Per Day');
        $('.mMealsPerDayBtn').removeClass('btn-success');
    }
    $('.bootstrapWizard  li').css('pointer-events','none');

    // location.reload();

}


})( jQuery );