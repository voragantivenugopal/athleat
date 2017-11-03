(function( $ ) {

var mealidsw1d1obj = {};
var mealidsw1d2obj = {};
var mealidsw1d3obj = {};
var mealidsw1d4obj = {};
var mealidsw1d5obj = {};

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
// var testPrice = 0;
var meal_data_obj = {}            



var m_curr_choose_plan = '';
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
    $('#tab1').removeClass('active');
    $('#tab2').addClass('active');
    $('[data-target="#step1"]').removeClass('active');
    $('[data-target="#step2"]').addClass('active');
    $('.bootstrapWizard  li:lt(2)').css({"pointer-events": "all", "cursor": "pointer"});

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
    $('.bootstrapWizard  li:lt(3)').css({"pointer-events": "all", "cursor": "pointer"});

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
    $('.bootstrapWizard  li:lt(3)').css({"pointer-events": "all", "cursor": "pointer"});

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
    $('.bootstrapWizard  li:lt(3)').css({"pointer-events": "all", "cursor": "pointer"});

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

    // console.log('meal_data_obj',meal_data_obj.week1.day1[111])

    if(m_curr_meals_per_day == 2 && 
        (mMealActiveIDs[111].dayId == 0 || mMealActiveIDs[112].dayId == 0 ||
         mMealActiveIDs[121].dayId == 0 || mMealActiveIDs[122].dayId == 0 ||
         mMealActiveIDs[131].dayId == 0 || mMealActiveIDs[132].dayId == 0 ||
         mMealActiveIDs[141].dayId == 0 || mMealActiveIDs[142].dayId == 0 ||
         mMealActiveIDs[151].dayId == 0 || mMealActiveIDs[152].dayId == 0 )){

        swal({
                text  : 'Please Select All Meals',
                type : 'warning'
            })     
    }

    else if(m_curr_meals_per_day == 3 && 
        (mMealActiveIDs[111].dayId == 0 || mMealActiveIDs[112].dayId == 0 || mMealActiveIDs[113].dayId == 0 ||
         mMealActiveIDs[121].dayId == 0 || mMealActiveIDs[122].dayId == 0 || mMealActiveIDs[123].dayId == 0 ||
         mMealActiveIDs[131].dayId == 0 || mMealActiveIDs[132].dayId == 0 || mMealActiveIDs[133].dayId == 0 ||
         mMealActiveIDs[141].dayId == 0 || mMealActiveIDs[142].dayId == 0 || mMealActiveIDs[143].dayId == 0 ||
         mMealActiveIDs[151].dayId == 0 || mMealActiveIDs[152].dayId == 0 || mMealActiveIDs[153].dayId == 0 )){

        swal({
                text  : 'Please Select All Meals',
                type : 'warning'
            })      
    } 
 
    else if(m_curr_meals_per_day == 4 &&  
        (mMealActiveIDs[111].dayId == 0 || mMealActiveIDs[112].dayId == 0 || mMealActiveIDs[113].dayId == 0 || mMealActiveIDs[114].dayId == 0 ||
         mMealActiveIDs[121].dayId == 0 || mMealActiveIDs[122].dayId == 0 || mMealActiveIDs[123].dayId == 0 || mMealActiveIDs[124].dayId == 0 ||
         mMealActiveIDs[131].dayId == 0 || mMealActiveIDs[132].dayId == 0 || mMealActiveIDs[133].dayId == 0 || mMealActiveIDs[134].dayId == 0 ||
         mMealActiveIDs[141].dayId == 0 || mMealActiveIDs[142].dayId == 0 || mMealActiveIDs[143].dayId == 0 || mMealActiveIDs[144].dayId == 0 ||
         mMealActiveIDs[151].dayId == 0 || mMealActiveIDs[152].dayId == 0 || mMealActiveIDs[153].dayId == 0 || mMealActiveIDs[154].dayId == 0)){

        swal({
                text  : 'Please Select All Meals',
                type : 'warning'
            })      
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
    $('.bootstrapWizard  li:lt(4)').css({"pointer-events": "all", "cursor": "pointer"});

});

var mAthleatFinalPrice = '';
$(document).on('click','.mMealsPerDayBtn',function(e){
mealidsw1d1obj = {};
mealidsw1d2obj = {};
mealidsw1d3obj = {};
mealidsw1d4obj = {};
mealidsw1d5obj = {};

var meal_data = [];
var week1_obj = {};
var meal_ids = [];
var week = '';
var day = '';
var day_data = {}

 console.log('mMealActiveIDs',mMealActiveIDs);
mMealActiveIDs[111] =mMealActiveIDs[112]=mMealActiveIDs[113]=mMealActiveIDs[114]=
mMealActiveIDs[121]=mMealActiveIDs[122]=mMealActiveIDs[123]=mMealActiveIDs[124]=
mMealActiveIDs[131]=mMealActiveIDs[132]=mMealActiveIDs[133]=mMealActiveIDs[134]=
mMealActiveIDs[141]=mMealActiveIDs[142]=mMealActiveIDs[143]=mMealActiveIDs[144]=
mMealActiveIDs[151]=mMealActiveIDs[152]=mMealActiveIDs[153]=mMealActiveIDs[154]=
  {'dayId':0,
    'Price': 0,
    'MealId':0,
    'Fat': 0,
    'Protein':0,
    'Carb':0}

// mMealActiveIDs.remove();
//console.log('mMealActiveIDs',mMealActiveIDs);
            
    // mMealActiveIDsArry = [];
    $('.mMealsPerDayBtn').removeClass('btn-success');
    $('#mChooseMealPlanData').html('');
    // clearPriceCookies();
    // getCookieInfo();
    mPriceTotal = 0;
    mFatTotal = 0;
    mProteinTotal = 0;
    mCarbTotal = 0;
    $('.mtxtStatsPricePerMeal').text(mPriceTotal);
    $('.mtxtDebugDailyFat').text(mFatTotal);
    $('.mtxtDebugDailyCarbs').text(mCarbTotal);
    $('.mtxtDebugDailyProtein').text(mProteinTotal);
    Cookies.set('mPriceTotal', mPriceTotal);
    Cookies.set('mFatTotal', mFatTotal);
    Cookies.set('mProteinTotal', mProteinTotal);
    Cookies.set('mCarbTotal', mCarbTotal);
    Cookies.set('msummeryobj', msummeryobj);

    if(m_curr_choose_plan == 'Athleat-l' || m_curr_choose_plan == 'Athleat-h'){    
        $('.dislikes').prop('checked', false); 
        $('.addons').prop('checked', false); 
        // clearPriceCookies()
        getCookieInfo();
        var m_curr_meals_per_day = $(this).attr('data-mMealsPerDay');        
        Cookies.set('m_curr_meals_per_day', m_curr_meals_per_day);                
        if(m_curr_meals_per_day == '2'){
            $('#mMealsperDayTitle').text('2 Meals Per Day');
            $(this).addClass('btn-success');
            mAthleatFinalPrice = 400*m_curr_how_many_weeks;
        }
        else if(m_curr_meals_per_day === '3'){
            mAthleatFinalPrice = 575*m_curr_how_many_weeks;
            $('#mMealsperDayTitle').text('3 Meals Per Day');
            $(this).addClass('btn-success');
        }
        else if(m_curr_meals_per_day === '4'){
            mAthleatFinalPrice = 700*m_curr_how_many_weeks;
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
        getCookieInfo();
        for(var i=1; i<=1; i++){
        // for(var i=1; i<=m_curr_how_many_weeks; i++){
            str = '';
            str += '<div class="customizerSpacer1"></div>';
            str += '<div class="cWeekHeader">';
                str += '<div class="btnWeekCopyPaste hand tippyWeek cWeekTitle" data-week="'+i+'"><h3 style="line-height:50px !important;">Week '+i+'</h3></div>';

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
                            str += '<div class="btnCustomizerMealDescBg "></div>';
                        str += '</div>';

                    str += '</div>';
                }

            str += '</div>';

            $(temp).html(str);
        });

      
    }
    $('.bootstrapWizard  li:lt(4)').css({"pointer-events": "all", "cursor": "pointer"});

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

            getCookieInfo();
        console.log('mMealActiveIDs',mMealActiveIDs);

        var meal_item = $('.modal-body .tab-pane.active .nav-tabs .active a').text();
        var meal_item_id = $('.modal-body .tab-pane.active .nav-tabs .active a').attr('id');
        var homeID = $( "#home" ).hasClass( "active" );
        var ProfileID = $( "#profile" ).hasClass( "active" );
        if (homeID){
        var myour_own_meal_grms = $('.modal-body .tab-pane.active .tab-content .tab-pane.active #dataGrams1').text();

            console.log('home')
        }
        else if ( ProfileID){
        var myour_own_meal_grms = $('.modal-body .tab-pane.active .tab-content .tab-pane.active .dataGrams').val();
            console.log('profile')

        }
            $('.btnCustomizerMeal[data-week="'+data_week+'"][data-day="'+data_day+'"][data-meal="'+data_meal+'"] .btnCustomizerMealDesc').css('color','#4B5EEB').html('<strong>'+meal_item+'</strong>');
            $('.btnCustomizerMeal[data-week="'+data_week+'"][data-day="'+data_day+'"][data-meal="'+data_meal+'"] .btnCustomizerMealPrice').css('color','#4B5EEB').html('<strong>'+mSingleMealPrice+'</strong>');
            mMealActiveID = $('.btnCustomizerMeal[data-week="'+data_week+'"][data-day="'+data_day+'"][data-meal="'+data_meal+'"]').attr('id');
            
            meal_data_copy = {
                'Meal Info': {
                    'id' : mMealActiveID,
                    'MealID':meal_item_id
                }
            }
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
                'Carb':mSingleMealCarb,
                'Grams':myour_own_meal_grms

            }


            msummeryobj = mMealActiveIDsArry[0];

            var mPriceTotal = 0;
            var mFatTotal = 0;
            var mProteinTotal =0;
            var mCarbTotal =0;
            Cookies.set('msummeryobj', msummeryobj);
            
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


            if(week == 'Week1' && day == 'Day1'){
                mealidsw1d1obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id,
                   'Grams':myour_own_meal_grms,
                   'Fat': mSingleMealFat,
                    'Protein':mSingleMealProtein,
                    'Carb':mSingleMealCarb,
                    'Price': mSingleMealPrice,
                }
            }
            if(week == 'Week1' && day == 'Day2'){
                mealidsw1d2obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id,
                   'Grams':myour_own_meal_grms,
                    'Fat': mSingleMealFat,
                    'Protein':mSingleMealProtein,
                    'Carb':mSingleMealCarb,
                    'Price': mSingleMealPrice,
                }
            }
            if(week == 'Week1' && day == 'Day3'){
                mealidsw1d3obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id,
                   'Grams':myour_own_meal_grms,
                    'Fat': mSingleMealFat,
                    'Protein':mSingleMealProtein,
                    'Carb':mSingleMealCarb,
                    'Price': mSingleMealPrice,
                }
            }
            if(week == 'Week1' && day == 'Day4'){
                mealidsw1d4obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id,
                   'Grams':myour_own_meal_grms,
                    'Fat': mSingleMealFat,
                    'Protein':mSingleMealProtein,
                    'Carb':mSingleMealCarb,
                    'Price': mSingleMealPrice,
                }
            }
            if(week == 'Week1' && day == 'Day5'){
                mealidsw1d5obj[mMealActiveID] = {
                   'Meal ID' : meal_item_id,
                   'Grams':myour_own_meal_grms,
                    'Fat': mSingleMealFat,
                    'Protein':mSingleMealProtein,
                    'Carb':mSingleMealCarb,
                    'Price': mSingleMealPrice,
                }
            }
            

            meal_data_obj = {
                'week1'   : {'day1':mealidsw1d1obj,'day2':mealidsw1d2obj,'day3':mealidsw1d3obj,'day4':mealidsw1d4obj,'day5':mealidsw1d5obj},
                
            }

            Cookies.set('meal_data',meal_data_obj)
    });

mMealActiveIDsArry.push(mMealActiveIDs)



$(document).on('click','.dislikes',function(){
    dislikesSelection();
    $('.bootstrapWizard  li:lt(6)').css({"pointer-events": "all", "cursor": "pointer"});

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
            console.log(obj,'Athleat data');

            if(m_curr_choose_plan == '' || undefined){
                swal('Please select Choose Meal Plan')
            }
            else if(m_curr_how_many_weeks == '' || undefined){
                swal('Please select Number of Weeks')
            }
            else if(m_curr_meals_per_day == '' || undefined){
                swal('Please select Meals per day')
            }
            else if(m_meals_closest_date == '' || undefined){
                swal('Please select meal closest Date')
            }
            else if(mAthleatFinalPrice == '' || undefined){
                swal('Please select Athleat Final Price')
            }
            else{
                $.ajax({
                      url: '/post-values/',
                      contentType: 'application/json',
                      data: JSON.stringify(obj),
                      type: 'POST',
                      success: postSuccess,
                      error : postFailure
                });
            }
        // function postFailure(){
        // getCookieInfo();
        // if(m_curr_how_many_weeks == '' || m_curr_meals_per_day == '' || m_meals_closest_date ==''|| mAthleatFinalPrice == ''){
        //  swal(
        //       'Please Choose all options',
        //     )
        // }else{
        //      swal(
        //           'Something is missing, Please try again',
        //         )
        // }
        // }
    }
    
if(m_curr_choose_plan === 'Customized'){
    
    var obj2 = {
        'Meal Plan':m_curr_choose_plan,
        'Weeks':m_curr_how_many_weeks,
        'Meals Per Day':m_curr_meals_per_day,
        'm_closest_date':m_closest_date,
        'meal_data':meal_data_obj, 
        'meal_data_new':mMealActiveIDs, 
        'mPriceTotal':mPriceTotal,
        'mFatTotal':mFatTotal,
        'mProteinTotal':mProteinTotal,
        'mCarbTotal':mCarbTotal
    } 
    console.log(obj2,'Customized Data');

    if(m_curr_choose_plan == '' || undefined){
        swal('Please select Choose Meal Plan')
    }
    else if(m_curr_how_many_weeks == '' || undefined){
        swal('Please select Number of Weeks')
    }
    else if(m_curr_meals_per_day == '' || undefined){
        swal('Please select Meals per day')
    }
    else if(m_closest_date == '' || undefined){
        swal('Please select meal closest Date')
    }
    // else if(mPriceTotal == 0 || (meal_data == '' || undefined)){
    //     swal('Please select Meal Data')
    // }
    else{
        $.ajax({
                  url: '/post-values/',
                  contentType: 'application/json',
                  data: JSON.stringify(obj2),
                  type: 'POST',
                  success: postSuccess
                  // error: postcustomaizedFailure
        });
    }      
   
}

    function postSuccess(data,textStatus,jqXHR)
    {
        // alert('Sit back and let us take care of the rest. We will be getting in touch with you very soon.');
         swal(
                        {   
                            title: "Good Job!",
                            text: 'Sit back and let us take care of the rest. We will be getting in touch with you very soon.',   
                            type: "success",   
                            confirmButtonColor: "#DD6B55",   
                            confirmButtonText: "Ok",   
                                                      
                        }).then(function(){   
                                                console.log('----')
                                                window.location = "/menu";            
                                       
                                
                        })

                    
      
    }
    function postFailure(data,textStatus,jqXHR){
        // alert('Sit back and let us take care of the rest. We will be getting in touch with you very soon.');
         swal(
                        {   
                            // title: "Good Job!",
                            text: 'Please Try Again',   
                            type: "error",   
                            confirmButtonColor: "#DD6B55",   
                            confirmButtonText: "Ok",   
                                                      
                        }).then(function(){   
                                                console.log('----')
                                                window.location = "/menu";            
                                       
                                
                        })

    }

    // function postcustomaizedFailure(data,textStatus,jqXHR)
    // {   
    //     getCookieInfo();
    //     if(m_curr_how_many_week == '' || m_curr_meals_per_day == '' || m_closest_date == ''|| meal_data == '' || mPriceTotal == 0 || mFatTotal == 0 || mProteinTotal == 0 || mCarbTotal == 0){
    //      swal(
    //           'Please Choose all options',
    //         )
    //     }else{
    //          swal(
    //               'Something is missing, Please try again',
    //             )
    //     }
    // }

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
}


})( jQuery );