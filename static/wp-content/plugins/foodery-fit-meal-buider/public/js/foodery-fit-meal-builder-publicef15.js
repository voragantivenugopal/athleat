
(function( $ ) {

var m_curr_choose_plan = '';
// var m_curr_gender = '';
var m_curr_how_many_weeks = '';
var m_curr_meals_per_day = '';
var p_curr_choose_plan = '';
var m_curr_dis_likes = '';
var m_dislikes = [];
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
    mTotalPrice = Cookies.get('mTotalPrice');
    mTotalFat = Cookies.get('mTotalFat');    
    mTotalCarb = Cookies.get('mTotalCarb');
    mTotalProtein = Cookies.get('mTotalProtein');
    mAthleatFinalPrice = Cookies.get('mAthleatFinalPrice')
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
    $('.bootstrapWizard  li:lt(2) a').css('pointer-events','all');

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
    $('.bootstrapWizard  li:lt(3) a').css('pointer-events','all');

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
    $('.bootstrapWizard  li:lt(3) a').css('pointer-events','all');

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
    $('.bootstrapWizard  li:lt(3) a').css('pointer-events','all');

});

// $(document).on('click','.mGenderBtn',function(e){
//     $('#tab3').removeClass('active');
//     $('#tab4').addClass('active');
//     $('[data-target="#step3"]').removeClass('active');
//     $('[data-target="#step4"]').addClass('active');
//     $('.mGenderBtn').removeClass('btn-success');
//     var m_curr_gender = $(this).attr('data-mGender');
//     Cookies.set('m_curr_gender', m_curr_gender);
//     if(m_curr_gender === 'Male'){
//         $('#mGenderTitle').text('Male');
//          $(this).addClass('btn-success');

//     }
//     else if(m_curr_gender === 'Female'){
//         $('#mGenderTitle').text('Female');
//          $(this).addClass('btn-success');
//     }
//     else{
//         $('#mGenderTitle').text('Gender');   
//     }
//     $('.bootstrapWizard  li:lt(4) a').css('pointer-events','all');

// });
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
    $('#tab6-1').removeClass('active');
    $('#tab7-1').addClass('active');
    $('[data-target="#step6-1"]').removeClass('active');
    $('[data-target="#step7-1"]').addClass('active');
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
    clearPriceCookies()
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
    $('.bootstrapWizard  li:lt(5) a').css('pointer-events','all');

});

var mAthleatFinalPrice = '';
$(document).on('click','.mMealsPerDayBtn',function(e){
    $('.mMealsPerDayBtn').removeClass('btn-success');
    $('#mChooseMealPlanData').html('');
    // $('#tab5').removeClass('active');


    // $('[data-target="#step5"]').removeClass('active');
    getCookieInfo();
    
    // $('.mAthleatPriceDesc').text()
    if(m_curr_choose_plan == 'Athleat-l' || m_curr_choose_plan == 'Athleat-h'){    
        clearPriceCookies()
        getCookieInfo();
        var m_curr_meals_per_day = $(this).attr('data-mMealsPerDay');        
        Cookies.set('m_curr_meals_per_day', m_curr_meals_per_day);                
        console.log('m_curr_meals_per_day',m_curr_meals_per_day);
        if(m_curr_meals_per_day == '2'){
            $('#mMealsperDayTitle').text('2 Meals Per Day');
            $(this).addClass('btn-success');
            mAthleatFinalPrice = 400*m_curr_how_many_weeks;
            console.log('mFinalPrice',mAthleatFinalPrice)
        }
        else if(m_curr_meals_per_day === '3'){
            mAthleatFinalPrice = 575*m_curr_how_many_weeks;
            console.log('mFinalPrice',mAthleatFinalPrice)
            $('#mMealsperDayTitle').text('3 Meals Per Day');
            $(this).addClass('btn-success');
        }
        else if(m_curr_meals_per_day === '4'){
            mAthleatFinalPrice = 700*m_curr_how_many_weeks;
            console.log('mFinalPrice',mAthleatFinalPrice)
            $('#mMealsperDayTitle').text('4 Meals Per Day');
            $(this).addClass('btn-success');
        }
        else{
            $('#mMealsperDayTitle').text('How Many Meals Per Day?');   
        }
        $('.mAthleatPrice').show();
        Cookies.set('mAthleatFinalPrice',mAthleatFinalPrice)
        $('.mAthleatPriceDesc').text(mAthleatFinalPrice);
        


        // $('[data-target="#step6"]').addClass('active');
        // $('#tab6').addClass('active');
        
    }
    else if(m_curr_choose_plan == 'Customized'){
        clearPriceCookies();
        $('[data-target="#step6-1"]').addClass('active');
        $('#tab6-1').addClass('active');
        var m_curr_meals_per_day = $(this).attr('data-mMealsPerDay');
        Cookies.set('m_curr_meals_per_day', m_curr_meals_per_day);
        getCookieInfo();
        console.log('m_curr_meals_per_day',m_curr_meals_per_day);
        if(m_curr_meals_per_day == '2'){
            $('#mMealsperDayTitle').text('2 Meals Per Day');
            $(this).addClass('btn-success');
            // mAthleatFinalPrice = 400*m_curr_how_many_weeks;
            // console.log('mFinalPrice',mAthleatFinalPrice)
        }
        else if(m_curr_meals_per_day === '3'){
            // mAthleatFinalPrice = 575*m_curr_how_many_weeks;
            // console.log('mFinalPrice',mAthleatFinalPrice)
            $('#mMealsperDayTitle').text('3 Meals Per Day');
            $(this).addClass('btn-success');
        }
        else if(m_curr_meals_per_day === '4'){
            // mAthleatFinalPrice = 700*m_curr_how_many_weeks;
            // console.log('mFinalPrice',mAthleatFinalPrice)
            $('#mMealsperDayTitle').text('4 Meals Per Day');
            $(this).addClass('btn-success');
        }
        else{
            $('#mMealsperDayTitle').text('How Many Meals Per Day?');   
        }
         $('[data-target="#step5"]').removeClass('active');
            $('#tab5').removeClass('active');
        // $('.mAthleatPriceDesc').text(mAthleatFinalPrice);
        mCreateChooseMealPlan();
    }
    var date = moment().endOf('week');
    var m_meals_closest_date = moment(date).format('DD-MM-YYYY');
    $('#mMealsNearestSaturdayDate').text(m_meals_closest_date);
    Cookies.set('m_meals_closest_date', m_meals_closest_date);
    
    // $('.mAthleatPriceDesc').text(mAthleatFinalPrice);
    //Cookies.set('mAthleatFinalPrice',mAthleatFinalPrice)

    // mCreateChooseMealPlan();

    function mCreateChooseMealPlan(){
        getCookieInfo();
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

                        str += '<div class="btnCustomizerMeal" data-week="'+weekNum+'" data-day="'+dayNum+'" data-meal="'+m+'" data-type="" data-slug="" style="position:relative;">';
                            str += '<div class="btnCustomizerMealTitle">Meal '+m+'</div>';
                            str += '<div class="btnCustomizerMealDesc" style="color:red;">choose your meal</div>';
                            // str += '<div class="btnCustomizerMealDesc"></div>';
                            str += '<div class="btnCustomizerMealDescBg "></div>';
                        str += '</div>';

                    str += '</div>';
                }

            str += '</div>';

            $(temp).html(str);
        });

      
    }
    $('.bootstrapWizard  li:lt(9) a').css('pointer-events','all');

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
            var mealidsw1d1 = '';
            getCookieInfo()
$(document).on('click','#modal-add-meal-btn',function(e){

        
        var meal_item = $('.modal-left #nav-tabs-wrapper .active a').text();
        var meal_item_id = $('.modal-left #nav-tabs-wrapper .active a').attr('id');

        mSingleMealPrice = $('.model-right .active #dataPrice').text();
        if(mTotalPrice == undefined){
            mTotalPrice = 0;
        }
        mTotalPrice = parseInt(mTotalPrice) + parseInt(mSingleMealPrice);        
        $('.mtxtStatsPricePerMeal').text(mTotalPrice);        
        Cookies.set('mTotalPrice', mTotalPrice);

        if(mTotalFat == undefined){
            mTotalFat =0;
        }
        mSingleMealFat = $('.model-right .active #dataFat').text();
        mTotalFat = parseInt(mTotalFat) + parseInt(mSingleMealFat);
        Cookies.set('mTotalFat', mTotalFat);
        $('.mtxtDebugDailyFat').text(mTotalFat);

        if(mTotalCarb == undefined){
            mTotalCarb =0;
        }
        mSingleMealCarb = $('.model-right .active #dataCarb').text();
        mTotalCarb = parseInt(mTotalCarb) + parseInt(mSingleMealCarb);
        Cookies.set('mTotalCarb', mTotalCarb);
        $('.mtxtDebugDailyCarbs').text(mTotalCarb);

        if(mTotalProtein == undefined){
            mTotalProtein =0;
        }
        mSingleMealProtein = $('.model-right .active #dataProtein').text();
        mTotalProtein = parseInt(mTotalProtein) + parseInt(mSingleMealProtein);
        Cookies.set('mTotalProtein', mTotalProtein);
        $('.mtxtDebugDailyProtein').text(mTotalProtein);

        console.log('meal ID',meal_item_id);
            $('.btnCustomizerMeal[data-week="'+data_week+'"][data-day="'+data_day+'"][data-meal="'+data_meal+'"] .btnCustomizerMealDesc').css('color','#4B5EEB').html('<strong>'+meal_item+'</strong>');
            $('#myModal').modal('hide');
            obj2 = {'Week':data_week,'Day':data_day,'Meal':data_meal,'Meal ID':meal_item_id};
            

            week = 'Week'+data_week;
            day = 'Day'+data_day;



            // dayssingledata = ['mealids'+data_week+data_day+data_meal]
            // console.log(dayssingledata) 
            // console.log(dayssingledata) 
            // dayssingledata.push(meal_item_id);
            // day_data[day] =  dayssingledata;
            // meal_data[week] = day_data;
            // dayssingledata.push(meal_item_id);
            // Week1 Data
            if(week == 'Week1' && day == 'Day1'){
                 dayssingledata = 'mealids'+week+day
                 // dayssingledata = JSON.parse("[" + dayssingledata + "]");

                console.log('dayssingledata',dayssingledata);
                // dayssingledata.push(meal_item_id);
                day_data[week+day] = mealidsw1d1;
                meal_data[week] = day_data
            }
            // if(week == 'Week1' && day == 'Day1'){
            //     console.log('week 1 Day 1');
            //     mealidsw1d1.push(meal_item_id);
            //     day_data[week+day] = mealidsw1d1;
            //     meal_data[week] = day_data
            // }
            

            console.log('meal_data',meal_data)

           
    });



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

//Displaying nearest saturday
$(document).on('click','#tab6-1',function(){
    var date = moment().endOf('week');
    var m_closest_date = moment(date).format('DD-MM-YYYY');
    $('#mNearestSaturdayDate').text(m_closest_date);
    Cookies.set('m_closest_date', m_closest_date);
});

var obj = [];
$(document).on('click','#mSubmitBtn',function(){
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
        console.log(obj);

        $.ajax({
                      url: '/post-values/',
                      contentType: 'application/json',
                      data: JSON.stringify(obj),
                      type: 'POST',
                      success: postSuccess,
                });
        
        }
        else if(m_curr_choose_plan === 'Customized'){
                var obj = {'Meal Plan':m_curr_choose_plan,
                // 'Gender':m_curr_gender,
                'Weeks':m_curr_how_many_weeks,
                'Meals Per Day':m_curr_meals_per_day,
                'm_closest_date':m_closest_date,
                'meal_data':meal_data                
            }
            console.log(obj);

            var obj = {'mTotalPrice':mTotalPrice,
                'mTotalFat':mTotalFat,
                'mTotalProtein':mTotalProtein,
                'mTotalCarb':mTotalCarb
            }
            console.log(obj);
            
            // $.ajax({
            //               url: '/post-values/',
            //               contentType: 'application/json',
            //               data: JSON.stringify(obj),
            //               type: 'POST',
            //               success: postSuccess,
            //         });
           
        }

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
function clearPriceCookies(){
    Cookies.remove('mTotalPrice');
    Cookies.remove('mTotalFat');
    Cookies.remove('mTotalProtein');
    Cookies.remove('mTotalCarb');
}
function clearCookies(){
    Cookies.remove('m_curr_choose_plan',null);
    // Cookies.remove('m_curr_gender');
    Cookies.remove('m_curr_how_many_weeks');
    Cookies.remove('m_curr_meals_per_day');
    Cookies.remove('m_meals_closest_date');
    Cookies.remove('m_selected_dislikes_value');
    Cookies.remove('m_selected_addons_value');
    Cookies.remove('m_closest_date');
    Cookies.remove('meal_data');
    Cookies.remove('mTotalPrice');
    Cookies.remove('mTotalFat');
    Cookies.remove('mTotalProtein');
    Cookies.remove('mTotalCarb');
    Cookies.remove('mAthleatFinalPrice')
    
    getCookieInfo();

     if(m_curr_choose_plan == undefined){
        $('#mPlanTitle').text('Choose Your Meal Plan');
        $('.mChooseMealPlanBtn').removeClass('btn-success');
    }
    // if(m_curr_gender == undefined){
    //     $('#mGenderTitle').text('Gender');
    //     $('.mGenderBtn').removeClass('btn-success');
    // }
    if(m_curr_how_many_weeks == undefined){
        $('#mWeeksTitle').text('How Many Weeks');
        $('.mHowManyWeeksBtn').removeClass('btn-success');
    }
    if(m_curr_meals_per_day == undefined){
        $('#mMealsperDayTitle').text('How Many Meals Per Day');
        $('.mMealsPerDayBtn').removeClass('btn-success');
    }

    // location.reload();

}
})( jQuery );