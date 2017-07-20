
(function( $ ) {

// possibilidade de alterar datas - tipo pausas para férias
// customizar meals

var currHash = '';
var h = '';
var auto_jump = true;
var auto_jump_customize = false;

var curr_go = "";
var curr_choose_plan = "";
var curr_gender = "";
var curr_days = 0;
var curr_meals = 0;
var curr_weeks = 0;
var curr_start_date;
var curr_total_meals = 0;
var curr_total_meals_week = 0;

var percent_done;

var curr_meal_price = 0;
var curr_week_price = 0;
var curr_week_discount = 0;
var curr_total_price = 0;
var curr_total_discount = 0;

var curr_customized_meals = 0;

var curr_week;
var curr_day;
var curr_meal;
var curr_type;


var curr_meal_original = '';
var curr_protein = '';
var curr_carbs = '';
var curr_vegs = '';

var curr_total_energy_kj = 0;
var curr_total_energy_kcal = 0;
var curr_total_fat = 0;
var curr_total_saturates = 0;
var curr_total_carbs = 0;
var curr_total_sugar = 0;
var curr_total_protein = 0;
var curr_total_salt = 0;
var curr_total_portion = 0;

var meal_total_energy_kj = 0;
var meal_total_energy_kcal = 0;
var meal_total_fat = 0;
var meal_total_saturates = 0;
var meal_total_carbs = 0;
var meal_total_sugar = 0;
var meal_total_protein = 0;
var meal_total_salt = 0;
var meal_total_portion = 0;

var curr_meal_energy_kj = 0;
var curr_meal_energy_kcal = 0;
var curr_meal_fat = 0;
var curr_meal_saturates = 0;
var curr_meal_carbs = 0;
var curr_meal_sugar = 0;
var curr_meal_protein = 0;
var curr_meal_salt = 0;
var curr_meal_portion = 0;
var curr_meal_notes = '';

var curr_protein_energy_kj = 0;
var curr_protein_energy_kcal = 0;
var curr_protein_fat = 0;
var curr_protein_saturates = 0;
var curr_protein_carbs = 0;
var curr_protein_sugar = 0;
var curr_protein_protein = 0;
var curr_protein_salt = 0;
var curr_protein_portion = 0;
var curr_protein_notes = '';

var curr_carbs_energy_kj = 0;
var curr_carbs_energy_kcal = 0;
var curr_carbs_fat = 0;
var curr_carbs_saturates = 0;
var curr_carbs_carbs = 0;
var curr_carbs_sugar = 0;
var curr_carbs_protein = 0;
var curr_carbs_salt = 0;
var curr_carbs_portion = 0;
var curr_carbs_notes = '';

var curr_vegs_energy_kj = 0;
var curr_vegs_energy_kcal = 0;
var curr_vegs_fat = 0;
var curr_vegs_saturates = 0;
var curr_vegs_carbs = 0;
var curr_vegs_sugar = 0;
var curr_vegs_protein = 0;
var curr_vegs_salt = 0;
var curr_vegs_portion = 0;
var curr_vegs_notes = '';

var mem_allWeek = false;

var copyPasteWeek;
var copyPasteDay;



var num_meals_total=0;

var delivery_week_day = 5 // friday

var customizerCurrentTab = 'originals';

var tippyWeek;
var tippyDay;
var tippyNavStart;
var tippyNavChooseYourMealPlan
var tippyNavGender;
var tippyNavDays;
var tippyNavMeals;
var tippyNavWeeks;
var tippyNavDateStart;
var tippyNavCustomize;

var popperNavStart;
var popperNavChooseYourMealPlan
var popperNavGender;
var popperNavDays;
var popperNavMeals;
var popperNavWeeks;
var popperNavDateStart;
var popperNavCustomize;

var allBgClasses = [];

var customizerList = [
];

var listDayStats = {};


var copyMeal = {};
var copyDay = [];
var copyWeek = [];

$(window).on('hashchange', function()
{
	processHash();
});

function go(slug){

    curr_go = slug;
	window.location.hash = slug;
}

function processHash()
{
	currHash = window.location.hash;
	h = currHash.substring(1);

	// log
	// console.log('hash:'+h);

	switch(h){
		case 'start':
			start();
			break;
        case 'chooseYourMealPlan':
            chooseYourMealPlan();
            break;
		case 'gender':
			gender();
			break;
		case 'weekdays':
			weekdays();
			break;
		case 'meals':
			meals();
			break;
		case 'weeks':
			weeks();
			break;
		case 'datestart':
			datestart();
			break;
		case 'customize':
			customizeMeals();
			break;

        // case 'w1d5m2':
        //     setFromHash(1,5,2);
        //     start();
        //     break;
        // case 'w1d5m3':
        //     setFromHash(1,5,3);
        //     start();
        //     break;
        // case 'w1d5m4':
        //     setFromHash(1,5,4);
        //     start();
        //     break;
        // case 'w1d5m5':
        //     setFromHash(1,5,5);
        //     start();
        //     break;

        case 'w1d5m2':
        	setFromHash(1,5,2);
        	start();
        	break;
        case 'w1d6m2':
        	setFromHash(1,6,2);
        	start();
        	break;
        case 'w1d7m2':
        	setFromHash(1,7,2);
        	start();
        	break;
        case 'w1d5m3':
        	setFromHash(1,5,3);
        	start();
        	break;
        case 'w1d6m3':
        	setFromHash(1,6,3);
        	start();
        	break;
        case 'w1d7m3':
        	setFromHash(1,7,3);
        	start();
        	break;
        case 'w1d5m4':
        	setFromHash(1,5,4);
        	start();
        	break;
        case 'w1d6m4':
        	setFromHash(1,6,4);
        	start();
        	break;
        case 'w1d7m4':
        	setFromHash(1,7,4);
        	start();
        	break;
        case 'w1d5m5':
        	setFromHash(1,5,5);
        	start();
        	break;
        case 'w1d6m5':
        	setFromHash(1,6,5);
        	start();
        	break;
        case 'w1d7m5':
        	setFromHash(1,7,5);
        	start();
        	break;
        case 'w1d5m6':
        	setFromHash(1,5,6);
        	start();
        	break;
        case 'w1d6m6':
        	setFromHash(1,6,6);
        	start();
        	break;
        case 'w1d7m6':
        	setFromHash(1,7,6);
        	start();
        	break;



        case 'w4d5m2':
            setFromHash(4,5,2);
            start();
            break;
        case 'w4d5m3':
            setFromHash(4,5,3);
            start();
            break;
        case 'w4d5m4':
            setFromHash(4,5,4);
            start();
            break;
        case 'w4d5m5':
            setFromHash(4,5,5);
            start();
            break;

        case 'w52d5m2':
            setFromHash(52,5,2);
            start();
            break;
        case 'w52d5m3':
            setFromHash(52,5,3);
            start();
            break;
        case 'w52d5m4':
            setFromHash(52,5,4);
            start();
            break;
        case 'w52d5m5':
            setFromHash(52,5,5);
            start();
            break;


		default:
			start();
			break;

	}

}

$(document).ready(function(){

	$("body").data("hhun","0");
	$("body").attr("data-hhun","0");

	$('.main-content').css({'max-width':'100%','padding':'0'});

	// $('.matchHeight1').matchHeight();

	// $(".sticky_header").sticky({topSpacing:0});
	// $("#sticky_stats").sticky({topSpacing:180});

    // $("#sticky_stats").stick_in_parent({
    //   offset_top:220,
    //   recalc_every:1,
    //   parent: $('#colDir')
    // });

    // $(".sticky_header").stick_in_parent({

    // });

	// allBgClasses
	$(list_base_meals).each(function(i,item){
		allBgClasses.push('bgMeal_'+list_base_meals[i]["slug"]);
	});

	getCookieInfo();

	if(localStorage["customizerList"]!=undefined && localStorage["customizerList"]!=""){
		customizerList = JSON.parse(localStorage["customizerList"]);
	};

    // clear list if weeks got decreased
    var ii = customizerList.length;
    while (ii--) {
        if(customizerList[ii]['w']>curr_weeks){
            customizerList.splice(ii,1);
        }
    }
	

	setActiveTooltip(curr_go);

	processHash();

	setActives();

	calculateTotalMeals();
});

function setFromHash(w,d,m){
    curr_days = d;
    curr_meals = m;
    curr_weeks = w;
}


function getCookieInfo(){
    curr_choose_plan = Cookies.get('curr_choose_plan');
	curr_gender = Cookies.get('curr_gender');
	curr_days = Cookies.get('curr_days');
	curr_meals = Cookies.get('curr_meals');
	curr_weeks = Cookies.get('curr_weeks');
	// curr_start_date = Cookies.get('curr_start_date');

    if(curr_choose_plan!=undefined){
        if(curr_choose_plan=="Athleat"){
            $('.txtDebugChoosePlan').html(" Athleat/Fat loss");
        }else if(curr_choose_plan=="Customized"){
            $('.txtDebugChoosePlan').html("Customized");
        }else{
            $('.txtDebugChoosePlan').html("Choose your meal plan?");
        }
    }

	if(curr_gender!=undefined){
		if(curr_gender=="m"){
			$('.txtDebugGender').html("Male");
		}else if(curr_gender=="f"){
			$('.txtDebugGender').html("Female");
		}else{
            $('.txtDebugGender').html("Gender");
        }
	}
	if(curr_days!=undefined){
		$('.txtDebugNumDays').html(curr_days);
	}
	if(curr_meals!=undefined){
		$('.txtDebugNumMeals').html(curr_meals);
	}
	if(curr_weeks!=undefined){
		$('.txtDebugNumWeeks').html(curr_weeks);
	}
	if(curr_start_date!=undefined){
        // var date_now = moment().format('YYYY-MM-DD');
        // var date_cookie = moment(Date.parse(curr_start_date)).format('YYYY-MM-DD');

        // if(moment(date_cookie).isBefore(moment(date_now)) ){
        //     console.log('BEFORE');
        // }else{
        //     console.log('NOT BEFORE');
        // }

        // console.log('now',date_now);
        // console.log('cookie',date_cookie);
		$('.txtDebugDateStart').html(moment(Date.parse(curr_start_date)).format('MMM Do'));
	}


};

function clearCookies(){
    Cookies.remove('curr_choose_plan');
	Cookies.remove('curr_gender');
	Cookies.remove('curr_days');
	Cookies.remove('curr_meals');
	Cookies.remove('curr_weeks');
	Cookies.remove('curr_start_date');
}

function setActives(){
    $('.btnChoosePlan[data-choose-plan="'+curr_choose_plan+'"]').addClass('btn-success');
	$('.btnGender[data-gender="'+curr_gender+'"]').addClass('btn-success');
	$('.btnDaysPerWeek[data-num="'+curr_days+'"]').addClass('btn-success');
	$('.btnMealNumber[data-num="'+curr_meals+'"]').addClass('btn-success');
	$('.btnWeekNumber[data-num="'+curr_weeks+'"]').addClass('btn-success');
}


function clearActiveTooltip(){

    popperNavStart = tippyNavStart.getPopperElement(document.querySelector('.tooltip_foodery_fit_start'));
    tippyNavStart.hide(popperNavStart);

    popperNavChooseYourMealPlan = tippyNavChooseYourMealPlan.getPopperElement(document.querySelector('.tooltip_foodery_fit_choose_your_meal_plan'));
    tippyNavChooseYourMealPlan.hide(popperNavChooseYourMealPlan);

    popperNavGender = tippyNavGender.getPopperElement(document.querySelector('.tooltip_foodery_fit_gender'));
    tippyNavGender.hide(popperNavGender);

    popperNavDays = tippyNavDays.getPopperElement(document.querySelector('.tooltip_foodery_fit_days'));
    tippyNavDays.hide(popperNavDays);

    popperNavMeals = tippyNavMeals.getPopperElement(document.querySelector('.tooltip_foodery_fit_meals'));
    tippyNavMeals.hide(popperNavMeals);

    popperNavWeeks = tippyNavWeeks.getPopperElement(document.querySelector('.tooltip_foodery_fit_weeks'));
    tippyNavWeeks.hide(popperNavWeeks);

    popperNavDateStart = tippyNavDateStart.getPopperElement(document.querySelector('.tooltip_foodery_fit_datestart'));
    tippyNavDateStart.hide(popperNavDateStart);

    popperNavCustomize = tippyNavCustomize.getPopperElement(document.querySelector('.tooltip_foodery_fit_customize'));
    tippyNavCustomize.hide(popperNavCustomize);

}

function setActiveTooltip(slug){

    var wait = 500;
    setTimeout(function(){
        tippyNavStart = new Tippy('.tooltip_foodery_fit_start',{
            interactive:true,
            html: '#tooltip_foodery_fit_start',
            arrow: true,
            position: 'top',
            theme: 'foodery',
            hideOnClick: false,
        });

        tippyNavChooseYourMealPlan = new Tippy('.tooltip_foodery_fit_choose_your_meal_plan',{
            interactive:true,
            html: '#tooltip_foodery_fit_choose_your_meal_plan',
            arrow: true,
            position: 'top',
            theme: 'foodery',
            hideOnClick: false,
        });

        tippyNavGender = new Tippy('.tooltip_foodery_fit_gender',{
            interactive:true,
            html: '#tooltip_foodery_fit_gender',
            arrow: true,
            position: 'top',
            theme: 'foodery',
            hideOnClick: false,
        });

        tippyNavDays = new Tippy('.tooltip_foodery_fit_days',{
            interactive:true,
            html: '#tooltip_foodery_fit_days',
            arrow: true,
            position: 'top',
            theme: 'foodery',
            hideOnClick: false,
        });

        tippyNavMeals = new Tippy('.tooltip_foodery_fit_meals',{
            interactive:true,
            html: '#tooltip_foodery_fit_meals',
            arrow: true,
            position: 'top',
            theme: 'foodery',
            hideOnClick: false,
        });

        tippyNavWeeks = new Tippy('.tooltip_foodery_fit_weeks',{
            interactive:true,
            html: '#tooltip_foodery_fit_weeks',
            arrow: true,
            position: 'top',
            theme: 'foodery',
            hideOnClick: false,
        });

        tippyNavDateStart = new Tippy('.tooltip_foodery_fit_datestart',{
            interactive:true,
            html: '#tooltip_foodery_fit_datestart',
            arrow: true,
            position: 'top',
            theme: 'foodery',
            hideOnClick: false,
        });

        tippyNavCustomize = new Tippy('.tooltip_foodery_fit_customize',{
            interactive:true,
            html: '#tooltip_foodery_fit_customize',
            arrow: true,
            position: 'top',
            theme: 'foodery',
            hideOnClick: false,
        });

        clearActiveTooltip();

        switch(slug){
            case "start":
                popperNavStart = tippyNavStart.getPopperElement(document.querySelector('.tooltip_foodery_fit_start'));
                tippyNavStart.show(popperNavStart);
                break;
            case "chooseyourmealplan":
                popperNavGender = tippyNavGender.getPopperElement(document.querySelector('.tooltip_foodery_fit_gender'));
                tippyNavGender.show(popperNavGender);
                break;
            case "gender":
                popperNavGender = tippyNavGender.getPopperElement(document.querySelector('.tooltip_foodery_fit_gender'));
                tippyNavGender.show(popperNavGender);
                break;
            case "weekdays":
                popperNavDays = tippyNavDays.getPopperElement(document.querySelector('.tooltip_foodery_fit_days'));
                tippyNavDays.show(popperNavDays);
                break;
            case "meals":
                popperNavMeals = tippyNavMeals.getPopperElement(document.querySelector('.tooltip_foodery_fit_meals'));
                tippyNavMeals.show(popperNavMeals);
                break;
            case "weeks":
                popperNavWeeks = tippyNavWeeks.getPopperElement(document.querySelector('.tooltip_foodery_fit_weeks'));
                tippyNavWeeks.show(popperNavWeeks);
                break;
            case "datestart":
                popperNavDateStart = tippyNavDateStart.getPopperElement(document.querySelector('.tooltip_foodery_fit_datestart'));
                tippyNavDateStart.show(popperNavDateStart);
                break;
            case "customize":
                popperNavCustomize = tippyNavCustomize.getPopperElement(document.querySelector('.tooltip_foodery_fit_customize'));
                tippyNavCustomize.show(popperNavCustomize);
                break;
            default:
                // popperNavStart = tippyNavStart.getPopperElement(document.querySelector('.tooltip_foodery_fit_start'));
                // tippyNavStart.show(popperNavStart);
                break;
        }

    },wait);
}


function index(){
	$('.cScreen').hide();
	$('#cChooseFlow').fadeIn();

	$('.txtStep').removeClass('stepActive');
	$('.txtStepStart').addClass('stepActive');
}

function start(){
	$('.cScreen').hide();
	$('#cChooseFlow').fadeIn();

    setActiveTooltip("start");

	TweenMax.to('.foodery_fit_meal_timeline_ball_on',0.3,{delay:0.0, alpha:0});
	TweenMax.to('.foodery_fit_meal_timeline_ball1_on',0.3,{delay:0.0, alpha:1});
}





function do_auto_jump_customize(){
    if(curr_choose_plan==''){
        go('chooseYourMealPlan');
        return;
    }
	if(curr_gender==''){
		go('gender');
		return;
	}
	if(curr_days==''){
		go('weekdays');
		return;
	}
	if(curr_meals==''){
		go('meals');
		return;
	}
	if(curr_weeks==''){
		go('weeks');
		return;
	}
	if(curr_start_date==''){
		go('start_date');
		return;
	}

	go('customize');
}

$(document).on('click','#btnStart1',function(e){
    // console.log('#btnStart1');
    go('chooseYourMealPlan');
});
function chooseYourMealPlan(){
    $('.cScreen').hide();
    $('#cChoosePlan').fadeIn();
$(document).on('click','.btnChooseYourMealPlan',function(e){
    // console.log('#btnStart1');
    go('gender');
    var curr_choose_plan = $(this).attr('data-chooseyourmealplan');
    console.log('kkkk.',curr_choose_plan);
    Cookies.set('curr_choose_plan', curr_choose_plan);

    $('.txtDebugChoosePlan').html(curr_choose_plan);
     TweenMax.to('.foodery_fit_meal_timeline_ball_on',0.3,{delay:0.0, alpha:0});
    TweenMax.to('.foodery_fit_meal_timeline_ball2_on',0.3,{delay:0.0, alpha:1});


});
}
// function chooseYourMealPlan(){
//     $('.cScreen').hide();
//     $('#cChoosePlan').fadeIn();

//     setActiveTooltip("choose your plan");

//     // var str = '';
//     // str += '<span href="javascript:;" class="btn btn-default btnChoosePlan '+(curr_choose_plan=="Athleat/Fat loss"?' btn-success ':'')+'" data-choose-plan="Athleat/Fat loss">Athleat/Fat loss</span>';
//     // str += '<span href="javascript:;" class="btn btn-default btnChoosePlan '+(curr_choose_plan=="Customized"?' btn-success ':'')+'" data-choose-plan="Customized">Customized</span>';
//     // $('#cBtnsChoosePlan').html(str);

//     TweenMax.to('.foodery_fit_meal_timeline_ball_on',0.3,{delay:0.0, alpha:0});
//     TweenMax.to('.foodery_fit_meal_timeline_ball2_on',0.3,{delay:0.0, alpha:1});
// }

// $(document).on('click','.btnChoosePlan',function(e){
//     curr_choose_plan = $(this).data('chooseyourmealplan');
//     Cookies.set('curr_choose_plan', curr_choose_plan);
//     $('.txtDebugChoosePlan').html(curr_choose_plan);

//     $('.btnChoosePlan').removeClass('btn-success');
//     $(this).addClass('btn-success');

//     calculateTotalMeals();

//     if(auto_jump==true){
//         if(auto_jump_customize){
//             do_auto_jump_customize();
//         }else{
//             go('gender');
//         }
//     }
// });
// $(document).on('click','#btnStart1',function(e){
// 	// console.log('#btnStart1');
// 	go('gender');
// });

function gender(){
	$('.cScreen').hide();
	$('#cChooseGender').fadeIn();

    setActiveTooltip("gender");

	var str = '';
	str += '<span href="javascript:;" class="btn btn-default btnGender '+(curr_gender=="m"?' btn-success ':'')+'" data-gender="m">Male</span>';
	str += '<span href="javascript:;" class="btn btn-default btnGender '+(curr_gender=="f"?' btn-success ':'')+'" data-gender="f">Female</span>';
	$('#cBtnsGender').html(str);

	TweenMax.to('.foodery_fit_meal_timeline_ball_on',0.3,{delay:0.0, alpha:0});
	TweenMax.to('.foodery_fit_meal_timeline_ball3_on',0.3,{delay:0.0, alpha:1});
}

$(document).on('click','.btnGender',function(e){
	curr_gender = $(this).data('gender');
	Cookies.set('curr_gender', curr_gender);
	// $('.txtDebugGender').html(curr_gender);

	$('.btnGender').removeClass('btn-success');
	$(this).addClass('btn-success');

	calculateTotalMeals();

	if(auto_jump==true){
		if(auto_jump_customize){
			do_auto_jump_customize();
		}else{
			go('weekdays');
		}
	}
});

function weekdays(){
	$('.cScreen').hide();
	$('#cChooseDays').fadeIn();

    setActiveTooltip("weekdays");

	$('#cBtnsNumDays').html('');
	for(var i=min_days;i<=max_days;i++){
		var str = '';
		str = '<span href="javascript:;" class="btn btn-default btnDaysPerWeek '+(curr_days==i?' btn-success ':'')+'" data-num="'+i+'">'+i+'</span>';
		$('#cBtnsNumDays').append(str);
	}

    TweenMax.to('.foodery_fit_meal_timeline_ball_on',0.3,{delay:0.0, alpha:0});
	TweenMax.to('.foodery_fit_meal_timeline_ok_on',0.3,{delay:0.0, alpha:0});
	
    if(curr_days==''){
        TweenMax.to('.foodery_fit_meal_timeline_ball4_on',0.3,{delay:0.0, alpha:1});
    }else{
        TweenMax.to('.foodery_fit_meal_timeline_ok4_on',0.3,{delay:0.0, alpha:1});
    }
    
}

$(document).on('click','.btnDaysPerWeek',function(e){
	num_days = $(this).data('num');
	curr_days = num_days;
	Cookies.set('curr_days', curr_days);
	$('.txtDebugNumDays').html(curr_days);

	$('.btnDaysPerWeek').removeClass('btn-success');
	$(this).addClass('btn-success');

	calculateTotalMeals();
	if(auto_jump==true){
		if(auto_jump_customize){
			do_auto_jump_customize();
		}else{
			go('meals');
		}
	}
});




function meals(){
	$('.cScreen').hide();
	$('#cChooseMeals').fadeIn();

    setActiveTooltip("meals");

	$('#cBtnsNumMeals').html('');
	for(var i=min_meals;i<=max_meals;i++){
		var str = '';
		str = '<span href="javascript:;" class="btn btn-default btnMealNumber '+(curr_meals==i?' btn-success ':'')+'" data-num="'+i+'">'+i+'</span>';
		$('#cBtnsNumMeals').append(str);
	}

	TweenMax.to('.foodery_fit_meal_timeline_ball_on',0.3,{delay:0.0, alpha:0});
	TweenMax.to('.foodery_fit_meal_timeline_ball5_on',0.3,{delay:0.0, alpha:1});
}

$(document).on('click','.btnMealNumber',function(e){
	num_meals = $(this).data('num');
	curr_meals = num_meals;
	Cookies.set('curr_meals', curr_meals);
	$('.txtDebugNumMeals').html(num_meals);

	$('.btnMealNumber').removeClass('btn-success');
	$(this).addClass('btn-success');

	calculateTotalMeals();
	if(auto_jump==true){
		if(auto_jump_customize){
			do_auto_jump_customize();
		}else{
			go('weeks');
		}
	}
});



function weeks(){
	$('#cBtnsNumWeeks').html('');

    setActiveTooltip("weeks");

	var perline = 13;
	var counter = 0;
	for(i=min_weeks;i<=max_weeks;i++){
		str = '<span href="javascript:;" class="btn btn-default btnWeekNumber '+(curr_weeks==i?' btn-success ':' ')+'" data-num="'+i+'" style="">'+i+'</span>';
		counter ++;
		if(counter==perline){
			counter=0;
			str += '<br>';
		}
		$('#cBtnsNumWeeks').append(str);
	}

	$('.cScreen').hide();
	$('#cChooseWeeks').fadeIn();

	TweenMax.to('.foodery_fit_meal_timeline_ball_on',0.3,{delay:0.0, alpha:0});
	TweenMax.to('.foodery_fit_meal_timeline_ball6_on',0.3,{delay:0.0, alpha:1});
}


$(document).on('click','.btnWeekNumber',function(e){

	var num_weeks = $(this).data('num');
	curr_weeks = num_weeks;
	Cookies.set('curr_weeks', curr_weeks);

	$('.txtDebugNumWeeks').html(curr_weeks);

	$('.btnWeekNumber').removeClass('btn-success');
	$(this).addClass('btn-success');

    // clear meals from weeks higher than this, if already exist
    var ii = customizerList.length;
    while (ii--) {
        if(customizerList[ii]['w']>curr_weeks){
            customizerList.splice(ii,1);
        }
    }

	calculateTotalMeals();
	if(auto_jump==true){
		if(auto_jump_customize){
			do_auto_jump_customize();
		}else{
			go('datestart');
		}
	}
});






function datestart(){

	$('.cScreen').hide();
	$('#cChooseCalendarStarting').fadeIn();

    setActiveTooltip("datestart");

	TweenMax.to('.foodery_fit_meal_timeline_ball_on',0.3,{delay:0.0, alpha:0});
	TweenMax.to('.foodery_fit_meal_timeline_ball7_on',0.3,{delay:0.0, alpha:1});

	renderStartingDate();
}


function renderStartingDate(){

    // timemachine.config({
    //     dateString: '30. May 2017, 23:01 GMT'
    // });
    // console.log(new Date());

    var today = moment();
	var today2 = moment();
	var currMonthName = today.format('MMMM');
	var currMonthDays = today.daysInMonth();
	var diasemana = today.day();
	var nextPossibleDay;

	var month1StartDate = moment([today.year(), today.month()]);
	var month1StartDateWeekday = month1StartDate.day();

	var objNextMonth = today2.add(1, 'month');
	var nextMonthName = objNextMonth.format('MMMM');
	var nextMonthDays = objNextMonth.daysInMonth();

	var month2StartDate = moment([today2.year(), today2.month()]);
	var month2StartDateWeekday = month2StartDate.day();

	$('.txtMonth1Title').html(currMonthName);
	$('.txtMonth2Title').html(nextMonthName);

	$('.cMonth1Days').html('');
	$('.cMonth2Days').html('');

	var strTit = '';

    var weekCounter = 2;    

    //console.log('today',today.toString());

    // console.log('today',today.toString());

	// MONTH 1
	strTit += '<div class="cStartDateDayTitle">Sun</div>';
	strTit += '<div class="cStartDateDayTitle">Mon</div>';
	strTit += '<div class="cStartDateDayTitle">Tue</div>';
	strTit += '<div class="cStartDateDayTitle">Wed</div>';
	strTit += '<div class="cStartDateDayTitle">Thu</div>';
	strTit += '<div class="cStartDateDayTitle">Fri</div>';
	strTit += '<div class="cStartDateDayTitle">Sat</div>';

	$('.cMonth1Days').append(strTit);
	$('.cMonth1Days').append('<div style="clear:both;"></div>');

	var counter7 = 1;

	for(var i=1;i<=parseInt(month1StartDateWeekday);i++){
		var strDay = '<div class="cStartDateDayEmpty"></div>';
		$('.cMonth1Days').append(strDay);
		counter7++;
		if(counter7>7){
			$('.cMonth1Days').append('<div style="clear:both;"></div>');
			counter7 = 1;
		}
	}


	todayPossible = moment();
	switch(diasemana){
		case 0: 	// sun
					nextPossibleDay = todayPossible.add(2, 'd');
					break;
		case 1: 	// mon
					nextPossibleDay = todayPossible.add(2, 'd');
					break;
		case 2: 	// tue
					nextPossibleDay = todayPossible.add(2, 'd');
					break;
		case 3: 	// wed
					nextPossibleDay = todayPossible.add(2, 'd');
					break;
		case 4: 	// thu
					nextPossibleDay = todayPossible.add(4, 'd');
					break;
		case 5: 	// fri
					nextPossibleDay = todayPossible.add(3, 'd');
					break;
		case 6: 	// sunday
					nextPossibleDay = todayPossible.add(2, 'd');
					break;

		default: 	nextPossibleDay = todayPossible.add(2, 'd');
					break;
	}

    
	for(var i=1;i<=parseInt(currMonthDays);i++){
		var strDay = '';

		if( moment([today.year(), today.month(), i]).isBefore(new Date(), "day") ){
			// days before today
            strDay += '<div class="cStartDateDayBefore"><span style="color:red;text-decoration:line-through; "><span style="color:#999999;">&nbsp;'+i+'&nbsp;</span></span></div>';
		}else if( moment([today.year(), today.month(), i]).isSame(new Date(), "day") ){
			// today
            strDay += '<div class="cStartDateDayToday">'+i+'</div>';
        }else if( moment([today.year(), today.month(), i]).isBefore(nextPossibleDay) ){
            // cut-off days
            strDay += '<div class="cStartDateDayPossibleCant">'+i+'</div>';

        }else if( moment([today.year(), today.month(), i]).day() == 0 ){
			// sundays
            strDay += '<div class="cStartDateDayPossibleCant">'+i+'</div>';
        }else if( moment([today.year(), today.month(), i]).day() == 1 ){
            // mondays
            strDay += '<div class="cStartDateDayPossibleCant">'+i+'</div>';
        }else if( moment([today.year(), today.month(), i]).day() == 2 ){
            // tuesdays
            strDay += '<div class="cStartDateDayPossibleCant">'+i+'</div>';
		}else{
            // finally - possible days

            if(moment(Date.parse(curr_start_date)).format('MMM Do')==moment([today.year(), today.month(), i]).format('MMM Do')){
    			strDay += '<span href="javascript:;" class="btnPickStartDate" data-day="'+i+'" data-month="'+today.month()+'" data-year="'+today.year()+'"><div class="cStartDateDayPossibleChosen">'+i+'</div></span>';
            }else{

            	if( (moment(Date.parse(curr_start_date)).day() == moment([today.year(), today.month(), i]).day()) && weekCounter<=curr_weeks      ){
            		strDay += '<span href="javascript:;" class="btnPickStartDate" data-day="'+i+'" data-month="'+today.month()+'" data-year="'+today.year()+'"><div class="cStartDateDayPossibleFutureDelivery">'+i+'</div></span>';
                    weekCounter ++;
            	}else{
            		strDay += '<span href="javascript:;" class="btnPickStartDate" data-day="'+i+'" data-month="'+today.month()+'" data-year="'+today.year()+'"><div class="cStartDateDayPossible">'+i+'</div></span>';
            	}
            }
		}


		$('.cMonth1Days').append(strDay);
		counter7++;
		if(counter7>7){
			$('.cMonth1Days').append('<div style="clear:both;"></div>');
			counter7 = 1;
		}
	}

	// complete the week
	for(var i=counter7; i<=7;i++){
		var strDay = '<div class="cStartDateDayEmpty"></div>';
		$('.cMonth1Days').append(strDay);
	}





    // ----------------------------------------
	// MONTH 2

	today = today.add(1, 'month');

	strTit = '';
	strTit += '<div class="cStartDateDayTitle">Sun</div>';
	strTit += '<div class="cStartDateDayTitle">Mon</div>';
	strTit += '<div class="cStartDateDayTitle">Tue</div>';
	strTit += '<div class="cStartDateDayTitle">Wed</div>';
	strTit += '<div class="cStartDateDayTitle">Thu</div>';
	strTit += '<div class="cStartDateDayTitle">Fri</div>';
	strTit += '<div class="cStartDateDayTitle">Sat</div>';

	$('.cMonth2Days').append(strTit);
	$('.cMonth2Days').append('<div style="clear:both;"></div>');

	counter7 = 1;

	for(var i=1;i<=parseInt(month2StartDateWeekday);i++){
		var strDay = '<div class="cStartDateDayEmpty"></div>';
		$('.cMonth2Days').append(strDay);
		counter7++;
		if(counter7>7){
			$('.cMonth2Days').append('<div style="clear:both;"></div>');
			counter7 = 1;
		}
	}


    for(var i=1;i<=parseInt(nextMonthDays);i++){
        var strDay = '';

        // console.log('today',today.toString(),nextPossibleDay.toString());

        if( moment([today.year(), today.month(), i]).isBefore(new Date(), "day") ){
            // days before today
            strDay += '<div class="cStartDateDayBefore"><span style="color:red;text-decoration:line-through; "><span style="color:#999999;">&nbsp;'+i+'&nbsp;</span></span></div>';
        }else if( moment([today.year(), today.month(), i]).isSame(new Date(), "day") ){
            // today
            strDay += '<div class="cStartDateDayToday">'+i+'</div>';
        }else if( moment([today.year(), today.month(), i]).isBefore(nextPossibleDay) ){
            // cut-off days
            strDay += '<div class="cStartDateDayPossibleCant">'+i+'</div>';

        }else if( moment([today.year(), today.month(), i]).day() == 0 ){
            // sundays
            strDay += '<div class="cStartDateDayPossibleCant">'+i+'</div>';
        }else if( moment([today.year(), today.month(), i]).day() == 1 ){
            // mondays
            strDay += '<div class="cStartDateDayPossibleCant">'+i+'</div>';
        }else if( moment([today.year(), today.month(), i]).day() == 2 ){
            // tuesdays
            strDay += '<div class="cStartDateDayPossibleCant">'+i+'</div>';
        }else{
            // finally - possible days

            if(moment(Date.parse(curr_start_date)).format('MMM Do')==moment([today.year(), today.month(), i]).format('MMM Do')){
                strDay += '<span href="javascript:;" class="btnPickStartDate" data-day="'+i+'" data-month="'+today.month()+'" data-year="'+today.year()+'"><div class="cStartDateDayPossibleChosen">'+i+'</div></span>';
            }else{

                if( (moment(Date.parse(curr_start_date)).day() == moment([today.year(), today.month(), i]).day()) && weekCounter<=curr_weeks      ){
                // if(moment(Date.parse(curr_start_date)).day() == moment([today.year(), today.month(), i]).day()){
                    strDay += '<span href="javascript:;" class="btnPickStartDate" data-day="'+i+'" data-month="'+today.month()+'" data-year="'+today.year()+'"><div class="cStartDateDayPossibleFutureDelivery">'+i+'</div></span>';
                    weekCounter ++;
                }else{
                    strDay += '<span href="javascript:;" class="btnPickStartDate" data-day="'+i+'" data-month="'+today.month()+'" data-year="'+today.year()+'"><div class="cStartDateDayPossible">'+i+'</div></span>';
                }
            }
        }




        $('.cMonth2Days').append(strDay);
        counter7++;
        if(counter7>7){
            $('.cMonth2Days').append('<div style="clear:both;"></div>');
            counter7 = 1;
        }
    }

	// complete the week
	for(var i=counter7; i<=7;i++){
		var strDay = '<div class="cStartDateDayEmpty"></div>';
		$('.cMonth2Days').append(strDay);
	}



}


$(document).on('click','.btnPickStartDate',function(e){
	var year = $(this).data('year');
	var month = $(this).data('month');
	var day = $(this).data('day');
	var start_date = moment([year, month, day]);

    setActiveTooltip("customize");

	$('.cStartDateDayFridayChosen').removeClass('cStartDateDayFridayChosen').addClass('cStartDateDayFriday');
	$(this).find('div').removeClass('cStartDateDayFriday').addClass('cStartDateDayFridayChosen');

	curr_start_date = start_date;

	$('.txtDebugDateStart').html(curr_start_date.format('MMM Do'));

	Cookies.set('curr_start_date', curr_start_date);

	// calculateTotalMeals();
	if(auto_jump==true){
		if(auto_jump_customize){
			do_auto_jump_customize();
		}else{
			go('customize');
		}
	}
});


function customizeMeals(){
	$('.cScreen').hide();
	$('#cCustomizeMeals').fadeIn();

	TweenMax.to('.foodery_fit_meal_timeline_ball_on',0.3,{delay:0.0, alpha:0});
	TweenMax.to('.foodery_fit_meal_timeline_ball8_on',0.3,{delay:0.0, alpha:1});

	renderCustomizeMeals();
	calculateTotalMeals();
}


function renderCustomizeMeals(){

    curr_protein_energy_kj = 0;
    curr_protein_energy_kcal = 0;
    curr_protein_fat = 0;
    curr_protein_saturates = 0;
    curr_protein_carbs = 0;
    curr_protein_sugar = 0;
    curr_protein_protein = 0;
    curr_protein_salt = 0;
    curr_protein_portion = 0;
    curr_protein_notes = 0;

	$('#cCustomizer').html('');

	for(var i=1; i<=curr_weeks; i++){
		str = '';
		str += '<div class="customizerSpacer1"></div>';
		str += '<div class="cWeekHeader">';
			str += '<div class="btnWeekCopyPaste hand tippyWeek cWeekTitle" data-week="'+i+'"><h3 style="line-height:50px !important;">Week '+i+'</h3></div>';
			// str += '<div class="" style="float:left; background-color:#ddd; height:50px; padding:8px 20px 0 0px; line-height:50px;"><img src="https://cdn3.iconfinder.com/data/icons/stroke/53/Copy-512.png" style="width:24px;"></div>';
			str += '<div class="cWeekDate">'+ moment(Date.parse(curr_start_date)).add(i-1, 'week').format('MMM Do') +'</div>';

			str += '<div class="clear"></div>';
		str += '</div>';
		str += '<div class="cCustomizerWeek" data-week="'+i+'"></div>';
		$('#cCustomizer').append(str);
	}

	$('.cCustomizerWeek').each(function(i,item){

		str = '<div class="">';
		for(var d=1; d<=curr_days; d++){
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
			for(var m=1; m<=curr_meals; m++){
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


    // console.log(customizerList);
    // console.log('kcal:',curr_total_energy_kcal,'protein:',curr_total_protein,'fat:',curr_total_fat);

	$.each(customizerList,function(i,item){

		var w = item["w"];
		var d = item["d"];
		var m = item["m"];
		var desc = item["desc"];
		var slug = item["slug"];
		var type = item["type"];

		updateCustomizerMeal(w,d,m,type,desc,slug);

	});


	tippyWeek = new Tippy('.tippyWeek',{
		interactive:true,
		html: '#tooltipcopypasteweek',
		arrow: true,
		position: 'right',
	});

	tippyDay = new Tippy('.tippyDay',{
		interactive:true,
		html: '#tooltipcopypasteday',
		arrow: true,
	});
}

// ............................

$(document).on('mouseenter','.btnWeekCopyPaste',function(){
	copyPasteWeek = $(this).data("week");
});

$(document).on('mouseenter','.btnDayCopyPaste',function(){
	copyPasteWeek = $(this).data("week");
	copyPasteDay = $(this).data("day");
});


$(document).on('click','.btnTooltipCopyDay',function(){
	doCopyDay(copyPasteWeek,copyPasteDay);

	// force close tippy
	var new_id = 't_'+copyPasteWeek+'_'+copyPasteDay;
	$('.btnDayCopyPaste[data-week="'+copyPasteWeek+'"][data-day="'+copyPasteDay+'"]').addClass(new_id);
	var popper = tippyDay.getPopperElement(document.querySelector('.'+new_id));
  	tippyDay.hide(popper);
});

$(document).on('click','.btnTooltipPasteDay',function(){
	doPasteDay(copyPasteWeek,copyPasteDay);

	// force close tippy
	var new_id = 't_'+copyPasteWeek+'_'+copyPasteDay;
	$('.btnDayCopyPaste[data-week="'+copyPasteWeek+'"][data-day="'+copyPasteDay+'"]').addClass(new_id);
	var popper = tippyDay.getPopperElement(document.querySelector('.'+new_id));
  	tippyDay.hide(popper);
});

$(document).on('click','.btnTooltipCopyWeek',function(){
	doCopyWeek(copyPasteWeek);

	// force close tippy
	var new_id = 't_'+copyPasteWeek;
	$('.btnWeekCopyPaste[data-week="'+copyPasteWeek+'"]').addClass(new_id);
	var popper = tippyWeek.getPopperElement(document.querySelector('.'+new_id));
  	tippyWeek.hide(popper);
});

$(document).on('click','.btnTooltipPasteWeek',function(){
	doPasteWeek(copyPasteWeek);

	// force close tippy
	var new_id = 't_'+copyPasteWeek;
	$('.btnWeekCopyPaste[data-week="'+copyPasteWeek+'"]').addClass(new_id);
	var popper = tippyWeek.getPopperElement(document.querySelector('.'+new_id));
  	tippyWeek.hide(popper);
});


function doCopyDay(week,day){

	copyDay = [];

	$.each(customizerList,function(i,item){
		var id = customizerList[i]['id'];
		var w = customizerList[i]['w'];
		var d = customizerList[i]['d'];
		var m = customizerList[i]['m'];
		var slug = customizerList[i]['slug'];
		var type = customizerList[i]['type'];
		var desc = customizerList[i]['desc'];

		if( week==w && day==d ){

			copyDay.push({
				id: id,
				w: w,
				d: d,
				m: m,
				type: type,
				slug: slug,
				desc: desc
			});
		}
	});

}

function doPasteDay(week,day){

	var ii = customizerList.length;
	while (ii--) {
		if(customizerList[ii]['w']==week && customizerList[ii]['d']==day){
			var m = customizerList[ii]['m'];
			customizerList.splice(ii,1);
			updateCustomizerMeal(week,day,m,'','','');
		}
	}

	$.each(copyDay,function(i,item){
		var id = copyDay[i]['id'];
		var w = copyDay[i]['w'];
		var d = copyDay[i]['d'];
		var m = copyDay[i]['m'];
		var type = copyDay[i]['type'];
		var slug = copyDay[i]['slug'];
		var desc = copyDay[i]['desc'];

		customizerList.push({
			id: id,
			w: week,
			d: day,
			m: m,
			type: type,
			slug: slug,
			desc: desc
		});

		updateCustomizerMeal(week,day,m,type,desc,slug);

	});

	localStorage["customizerList"] = JSON.stringify(customizerList);

	calculateTotalMeals();
}

function doCopyWeek(week){

	copyWeek = [];

	$.each(customizerList,function(i,item){
		var id = customizerList[i]['id'];
		var w = customizerList[i]['w'];
		var d = customizerList[i]['d'];
		var m = customizerList[i]['m'];
		var slug = customizerList[i]['slug'];
		var type = customizerList[i]['type'];
		var desc = customizerList[i]['desc'];

		if( week==w){

			copyWeek.push({
				id: id,
				w: w,
				d: d,
				m: m,
				type: type,
				slug: slug,
				desc: desc
			});
		}
	});

	// console.log('copyWeek',copyWeek);

}

function doPasteWeek(week){

	var ii = customizerList.length;
	while (ii--) {
		if(customizerList[ii]['w']==week){
			var d = customizerList[ii]['d'];
			var m = customizerList[ii]['m'];
			customizerList.splice(ii,1);
			updateCustomizerMeal(week,d,m,'','','');
		}
	}

	$.each(copyWeek,function(i,item){
		var id = copyWeek[i]['id'];
		var w = copyWeek[i]['w'];
		var d = copyWeek[i]['d'];
		var m = copyWeek[i]['m'];
		var type = copyWeek[i]['type'];
		var slug = copyWeek[i]['slug'];
		var desc = copyWeek[i]['desc'];

		customizerList.push({
			id: id,
			w: week,
			d: d,
			m: m,
			type: type,
			slug: slug,
			desc: desc
		});

		updateCustomizerMeal(week,d,m,type,desc,slug);

	});

	localStorage["customizerList"] = JSON.stringify(customizerList);

	calculateTotalMeals();
}














$(document).on('click','.btnCustomizerMeal',function(e){
      // console.log("$(this): ", $(this));

    $('#myModal').modal('show');
         var data_week = $(this).attr('data-week');
         var data_day = $(this).attr('data-day');
         var data_date = $(this).attr('data-date');
         // var info = $(this)('.btnCustomizerMealDesc').text();
         // var meal_item = $(this).

        $(document).on('click','#modal-add-meal-btn',function(){
        var meal_item = $('.modal-left #nav-tabs-wrapper .active a').text();
            $('#myModal').modal('hide');
            $('.btnCustomizerMealDesc').text(meal_item);
    });

});


$(document).on('click','.btnCustomizerTabOriginals',function(){
	$('.cCustomizerOriginals').show();
	$('.cCustomizerCreate').hide();

	$('.btnCustomizerTab').css({"border-bottom":"none"});
	$(this).css({"border-bottom":"solid 3px #4B5EEB"});

	resetMealCustomizerNutricionalValues();
});

$(document).on('click','.btnCustomizerTabCreate',function(){
	$('.cCustomizerOriginals').hide();
	$('.cCustomizerCreate').show();

	$('.btnCustomizerTab').css({"border-bottom":"none"});
	$(this).css({"border-bottom":"solid 3px #4B5EEB"});

	resetMealCustomizerNutricionalValues();

    calculateNutricionalValuesCustomMeal();
});

function resetMealCustomizerNutricionalValues(){
	curr_meal_energy_kj = 0;
	curr_meal_energy_kcal = 0;
	curr_meal_fat = 0;
	curr_meal_saturates = 0;
	curr_meal_carbs = 0;
	curr_meal_sugar = 0;
	curr_meal_protein = 0;
	curr_meal_salt = 0;
	curr_meal_portion = 0;
	curr_meal_notes = '';

	curr_protein_energy_kj = 0;
	curr_protein_energy_kcal = 0;
	curr_protein_fat = 0;
	curr_protein_saturates = 0;
	curr_protein_carbs = 0;
	curr_protein_sugar = 0;
	curr_protein_protein = 0;
	curr_protein_salt = 0;
	curr_protein_portion = 0;
	curr_protein_notes = '';

	curr_carbs_energy_kj = 0;
	curr_carbs_energy_kcal = 0;
	curr_carbs_fat = 0;
	curr_carbs_saturates = 0;
	curr_carbs_carbs = 0;
	curr_carbs_sugar = 0;
	curr_carbs_protein = 0;
	curr_carbs_salt = 0;
	curr_carbs_portion = 0;
	curr_carbs_notes = '';

	curr_vegs_energy_kj = 0;
	curr_vegs_energy_kcal = 0;
	curr_vegs_fat = 0;
	curr_vegs_saturates = 0;
	curr_vegs_carbs = 0;
	curr_vegs_sugar = 0;
	curr_vegs_protein = 0;
	curr_vegs_salt = 0;
	curr_vegs_portion = 0;
	curr_vegs_notes = '';
}


$(document).on('click','.btnCustomizerOriginalsMealItem',function(){
	var title = $(this).data('title');
	var slug = $(this).data('slug');
	var week = $(this).data('week');
	var day = $(this).data('day');
	var meal = $(this).data('meal');
	var type = $(this).data('type');

	var img = '';

	var male_energy_kj = '';
	var male_energy_kcal = '';
	var male_fat = '';
	var male_saturates = '';
	var male_carbs = '';
	var male_sugar = '';
	var male_protein = '';
	var male_salt = '';
	var male_portion = '';
	var male_notes = '';

	var female_energy_kj = '';
	var female_energy_kcal = '';
	var female_fat = '';
	var female_saturates = '';
	var female_carbs = '';
	var female_sugar = '';
	var female_protein = '';
	var female_salt = '';
	var female_portion = '';
	var female_notes = '';

	$(list_base_meals).each(function(i,item){
		if( list_base_meals[i]["slug"] == slug ){
			img = list_base_meals[i]['img'];

			male_energy_kj = list_base_meals[i]['male_energy_kj'];
			male_energy_kcal = list_base_meals[i]['male_energy_kcal'];
			male_fat = list_base_meals[i]['male_fat'];
			male_saturates = list_base_meals[i]['male_saturates'];
			male_carbs = list_base_meals[i]['male_carbs'];
			male_sugar = list_base_meals[i]['male_sugar'];
			male_protein = list_base_meals[i]['male_protein'];
			male_salt = list_base_meals[i]['male_salt'];
			male_portion = list_base_meals[i]['male_portion'];
			male_notes = list_base_meals[i]['male_notes'];

			female_energy_kj = list_base_meals[i]['female_energy_kj'];
			female_energy_kcal = list_base_meals[i]['female_energy_kcal'];
			female_fat = list_base_meals[i]['female_fat'];
			female_saturates = list_base_meals[i]['female_saturates'];
			female_carbs = list_base_meals[i]['female_carbs'];
			female_sugar = list_base_meals[i]['female_sugar'];
			female_protein = list_base_meals[i]['female_protein'];
			female_salt = list_base_meals[i]['female_salt'];
			female_portion = list_base_meals[i]['female_portion'];
			female_notes = list_base_meals[i]['female_notes'];
		}
	});

	// clear bg images
	$(allBgClasses).each(function(i,item){
		$('.imgCustomizerInfoItem').removeClass(allBgClasses[i]);
	});

	// adds bg image
	$('.imgCustomizerInfoItem').addClass('bgMeal_'+slug);

	if(img!=""){

	}

	if(curr_gender=="m"){
		$('.txt_nutrition_facts_energy_kj').html(String(male_energy_kj).replace(/\.00$/,''));
		$('.txt_nutrition_facts_energy_kcal').html(String(male_energy_kcal).replace(/\.00$/,''));
		$('.txt_nutrition_facts_fat').html(String(male_fat).replace(/\.00$/,'')+' g');
		$('.txt_nutrition_facts_saturates').html(String(male_saturates).replace(/\.00$/,'')+' g');
		$('.txt_nutrition_facts_carbs').html(String(male_carbs).replace(/\.00$/,'')+' g');
		$('.txt_nutrition_facts_sugar').html(String(male_sugar).replace(/\.00$/,'')+' g');
		$('.txt_nutrition_facts_protein').html(String(male_protein).replace(/\.00$/,'')+' g');
		$('.txt_nutrition_facts_salt').html(String(male_salt).replace(/\.00$/,'')+' g');
		$('.txt_nutrition_facts_portion').html(String(male_portion).replace(/\.00$/,'')+' g');
		// $('.txt_nutrition_facts_notes').html(String(male_notes).replace(/\.00$/,'')+' g');
	}else{
		$('.txt_nutrition_facts_energy_kj').html(String(female_energy_kj).replace(/\.00$/,''));
		$('.txt_nutrition_facts_energy_kcal').html(String(female_energy_kcal).replace(/\.00$/,''));
		$('.txt_nutrition_facts_fat').html(String(female_fat).replace(/\.00$/,'')+' g');
		$('.txt_nutrition_facts_saturates').html(String(female_saturates).replace(/\.00$/,'')+' g');
		$('.txt_nutrition_facts_carbs').html(String(female_carbs).replace(/\.00$/,'')+' g');
		$('.txt_nutrition_facts_sugar').html(String(female_sugar).replace(/\.00$/,'')+' g');
		$('.txt_nutrition_facts_protein').html(String(female_protein).replace(/\.00$/,'')+' g');
		$('.txt_nutrition_facts_salt').html(String(female_salt).replace(/\.00$/,'')+' g');
		$('.txt_nutrition_facts_portion').html(String(female_portion).replace(/\.00$/,'')+' g');
		// $('.txt_nutrition_facts_notes').html(male_notes);
	}


	// $('.txtCustomizerOriginalsStatus').html(title);
	$('.txtCustomizerOriginalsStatus').hide();
	$('.cCheckAllWeeks').show();
    //$('.btnCustomizerOriginalsOk').data('week',week).data('day',day).data('meal',meal).data('type',type).data('title',title).data('slug',slug).html('Continue with '+title).show();
	$('.btnCustomizerOriginalsOk').data('week',week).data('day',day).data('meal',meal).data('type',type).data('title',title).data('slug',slug).html('Add meal').show();
});

$(document).on('click','.btnCustomizerOriginalsOk',function(){
	var title = $(this).data('title');
	var slug = $(this).data('slug');
	var week = $(this).data('week');
	var day = $(this).data('day');
	var meal = $(this).data('meal');
	var type = $(this).data('type');
	var allWeek = false;
	if($(".inputCheckAllWeeks").is(':checked')){
		allWeek = true;
	}

	if(allWeek==false){
		mem_allWeek = false;

		var vals = {
			'id': 'w'+week+',d'+day+',m'+meal,
			'w':week,
			'd':day,
			'm':meal,
			'slug': slug,
			'type': type,
			'desc': title,
		};

        // clean previous vals, if exist
        var ii = customizerList.length;
        while (ii--) {
            if(customizerList[ii]['w']==week && customizerList[ii]['d']==day && customizerList[ii]['m']==meal){
                customizerList.splice(ii,1);
            }
        }

		customizerList.push(vals);
		localStorage["customizerList"] = JSON.stringify(customizerList);

		updateCustomizerMeal(week,day,meal,type,title,slug);
	}else{
		mem_allWeek = true;

		// for each week, push array, webstorage and update
		for(var w=1; w<=curr_weeks; w++){
			var vals = {
				'id': 'w'+w+',d'+day+',m'+meal,
				'w':w,
				'd':day,
				'm':meal,
				'slug': slug,
				'type': type,
				'desc': title,
			};

            // clean previous vals, if exist
            var ii = customizerList.length;
            while (ii--) {
                if(customizerList[ii]['w']==w && customizerList[ii]['d']==day && customizerList[ii]['m']==meal){
                    customizerList.splice(ii,1);
                }
            }

			customizerList.push(vals);
			localStorage["customizerList"] = JSON.stringify(customizerList);

			updateCustomizerMeal(w,day,meal,type,title,slug);
		}
	}


	$.magnificPopup.close();

	calculateTotalMeals();
});




$(document).on('click','.btnProteinItem',function(){
	var proteinColor = $(this).data("color");
	var proteinSlug = $(this).data("slug");

	curr_protein = proteinSlug;

    $(list_proteins).each(function(i,item){
        if( list_proteins[i]["slug"] == curr_protein ){

            curr_protein_energy_kj = list_proteins[i]['energy_kj'];
            curr_protein_energy_kcal = list_proteins[i]['energy_kcal'];
            curr_protein_fat = list_proteins[i]['fat'];
            curr_protein_saturates = list_proteins[i]['saturates'];
            curr_protein_carbs = list_proteins[i]['carbs'];
            curr_protein_sugar = list_proteins[i]['sugar'];
            curr_protein_protein = list_proteins[i]['protein'];
            curr_protein_salt = list_proteins[i]['salt'];
            curr_protein_portion = list_proteins[i]['portion'];
            curr_protein_notes = list_proteins[i]['notes'];
        }
    });

    calculateNutricionalValuesCustomMeal();

	$('.cProteinItem').css({'background-color':'#ffffff'});
	$('.cProteinItem[data-slug="'+proteinSlug+'"]').css({'background-color':'#dddddd'}).addClass('selected');

	$('.cBgImageProtein').css({'background-color':proteinColor});

	checkCustomAllItems();
});

$(document).on('click','.btnCarbsItem',function(){
	var carbsColor = $(this).data("color");
	var carbsSlug = $(this).data("slug");

	curr_carbs = carbsSlug;

    $(list_carbs).each(function(i,item){
        if( list_carbs[i]["slug"] == curr_carbs ){

            curr_carbs_energy_kj = list_carbs[i]['energy_kj'];
            curr_carbs_energy_kcal = list_carbs[i]['energy_kcal'];
            curr_carbs_fat = list_carbs[i]['fat'];
            curr_carbs_saturates = list_carbs[i]['saturates'];
            curr_carbs_carbs = list_carbs[i]['carbs'];
            curr_carbs_sugar = list_carbs[i]['sugar'];
            curr_carbs_protein = list_carbs[i]['protein'];
            curr_carbs_salt = list_carbs[i]['salt'];
            curr_carbs_portion = list_carbs[i]['portion'];
            curr_carbs_notes = list_carbs[i]['notes'];
        }
    });

    calculateNutricionalValuesCustomMeal();

	$('.cCarbsItem').css({'background-color':'#ffffff'});
	$('.cCarbsItem[data-slug="'+carbsSlug+'"]').css({'background-color':'#dddddd'}).addClass('selected');;

	$('.cBgImageCarbs').css({'background-color':carbsColor});

	checkCustomAllItems();
});

$(document).on('click','.btnVegsItem',function(){
	var vegsColor = $(this).data("color");
	var vegsSlug = $(this).data("slug");

	curr_vegs = vegsSlug;

    $(list_vegs).each(function(i,item){
        if( list_vegs[i]["slug"] == curr_vegs ){

            curr_vegs_energy_kj = list_vegs[i]['energy_kj'];
            curr_vegs_energy_kcal = list_vegs[i]['energy_kcal'];
            curr_vegs_fat = list_vegs[i]['fat'];
            curr_vegs_saturates = list_vegs[i]['saturates'];
            curr_vegs_carbs = list_vegs[i]['carbs'];
            curr_vegs_sugar = list_vegs[i]['sugar'];
            curr_vegs_protein = list_vegs[i]['protein'];
            curr_vegs_salt = list_vegs[i]['salt'];
            curr_vegs_portion = list_vegs[i]['portion'];
            curr_vegs_notes = list_vegs[i]['notes'];
        }
    });

    calculateNutricionalValuesCustomMeal();

	$('.cVegsItem').css({'background-color':'#ffffff'});
	$('.cVegsItem[data-slug="'+vegsSlug+'"]').css({'background-color':'#dddddd'}).addClass('selected');;

	$('.cBgImageVegs').css({'background-color':vegsColor});

	checkCustomAllItems();
});

function calculateNutricionalValuesCustomMeal(){
    $('.txt_nutrition_facts_energy_kj').html( (curr_protein_energy_kj + curr_carbs_energy_kj + curr_vegs_energy_kj).toFixed(0).replace(/\.00$/,''));
    $('.txt_nutrition_facts_energy_kcal').html( (curr_protein_energy_kcal + curr_carbs_energy_kcal + curr_vegs_energy_kcal).toFixed(0).replace(/\.00$/,''));
    $('.txt_nutrition_facts_fat').html( (curr_protein_fat + curr_carbs_fat + curr_vegs_fat).toFixed(1).replace(/\.00$/,'')+' g');
    $('.txt_nutrition_facts_saturates').html( (curr_protein_saturates + curr_carbs_saturates + curr_vegs_saturates).toFixed(1).replace(/\.00$/,'')+' g');
    $('.txt_nutrition_facts_carbs').html( (curr_protein_carbs + curr_carbs_carbs + curr_vegs_carbs).toFixed(1).replace(/\.00$/,'')+' g');
    $('.txt_nutrition_facts_sugar').html( (curr_protein_sugar + curr_carbs_sugar + curr_vegs_sugar).toFixed(1).replace(/\.00$/,'')+' g');
    $('.txt_nutrition_facts_protein').html( (curr_protein_protein + curr_carbs_protein + curr_vegs_protein).toFixed(1).replace(/\.00$/,'')+' g');
    $('.txt_nutrition_facts_salt').html( (curr_protein_salt + curr_carbs_salt + curr_vegs_salt).toFixed(2).replace(/\.00$/,'')+' g');
    $('.txt_nutrition_facts_portion').html( (curr_protein_portion + curr_carbs_portion + curr_vegs_portion).toFixed(2).replace(/\.00$/,'')+' g');
}


function checkCustomAllItems(){
	//txtCustomizerCreateStatus
	if(curr_protein!='' && curr_carbs!='' && curr_vegs!=''){

		var title = '';
		var slug = curr_protein+'|'+curr_carbs+'|'+curr_vegs;

		$('.btnCustomizerCreateOk').show();
		$('.cCheckAllWeeks').show();
		$('.txtCustomizerCreateStatus').hide();

        // $('.btnCustomizerCreateOk').data('week',curr_week).data('day',curr_day).data('meal',curr_meal).data('type','custom').data('title',title).data('slug',slug).html('Continue with '+title).show();
		$('.btnCustomizerCreateOk').data('week',curr_week).data('day',curr_day).data('meal',curr_meal).data('type','custom').data('title',title).data('slug',slug).html('Add meal').show();
	}
};


$(document).on('click','.btnCustomizerCreateOk',function(){
	var title = $(this).data('title');
	var slug = $(this).data('slug');
	var week = $(this).data('week');
	var day = $(this).data('day');
	var meal = $(this).data('meal');
	var type = $(this).data('type');
	var allWeek = false;

	if($(".inputCheckAllWeeks").is(':checked')){
		allWeek = true;
        mem_allWeek = true;

        // for each week, push array, webstorage and update
        for(var w=1; w<=curr_weeks; w++){
            var vals = {
                'id': 'w'+w+',d'+day+',m'+meal,
                'w':w,
                'd':day,
                'm':meal,
                'slug': slug,
                'type': type,
                'desc': "CUSTOM MEAL",
            };

            // clean previous vals, if exist
            var ii = customizerList.length;
            while (ii--) {
                if(customizerList[ii]['w']==w && customizerList[ii]['d']==day && customizerList[ii]['m']==meal){
                    customizerList.splice(ii,1);
                }
            }

            customizerList.push(vals);
            localStorage["customizerList"] = JSON.stringify(customizerList);

            updateCustomizerMeal(w,day,meal,type,title,slug);
        }
	}else{
        // not all week
		mem_allWeek = false;

		var vals = {
			'id': 'w'+week+',d'+day+',m'+meal,
			'w':week,
			'd':day,
			'm':meal,
			'slug': slug,
			'type': type,
			'desc': 'CUSTOM MEAL',
		};

		// clean previous vals, if exist
        var ii = customizerList.length;
        while (ii--) {
            if(customizerList[ii]['w']==week && customizerList[ii]['d']==day && customizerList[ii]['m']==meal){
                customizerList.splice(ii,1);
            }
        }

		customizerList.push(vals);
		localStorage["customizerList"] = JSON.stringify(customizerList);

		updateCustomizerMeal(week,day,meal,type,title,slug);

	}

 //    else{
	// 	mem_allWeek = true;

	// 	// for each week, push array, webstorage and update
	// 	for(var w=1; w<=curr_weeks; w++){
	// 		var vals = {
	// 			id: 'w'+w+',d'+day+',m'+meal,
	// 			w:w,
	// 			d:day,
	// 			m:meal,
	// 			slug: slug,
	// 			type: type,
	// 			desc: 'CUSTOM MEAL',
	// 		};

	// 		customizerList.push(vals);
	// 		localStorage["customizerList"] = JSON.stringify(customizerList);

	// 		updateCustomizerMeal(w,day,meal,type,title,slug);
	// 	}
	// }

	$.magnificPopup.close();

	calculateTotalMeals();
});



function updateCustomizerMeal(week,day,meal,type,title,slug){

	var bgImage = '';

	// clear bg images
	$(allBgClasses).each(function(i,item){
		$('.btnCustomizerMeal[data-week="'+week+'"][data-day="'+day+'"][data-meal="'+meal+'"]').find('.btnCustomizerMealDescBg').removeClass(allBgClasses[i]);
	});

	bgImage = 'bgColorMeal_'+slug;
	var strCustom = '';

	// custom
	if(slug!='' && slug!=undefined){
		if(slug.indexOf('|')>=0){
			var items = slug.split('|');
			bgImage = 'bgColorMeal_custom';

            // prot
            $(list_proteins).each(function(i,prot){
                if(items[0]==prot['slug']){
                    strCustom += '<div class="foodery_fit_meal_builder_customize_custom_meal_item">'+prot["title"]+'</div>';
                }
            });

            // carbs
            $(list_carbs).each(function(i,carbs){
                if(items[1]==carbs['slug']){
                    strCustom += '<div class="foodery_fit_meal_builder_customize_custom_meal_item">'+carbs["title"]+'</div>';
                }
            });

            // vegs
            $(list_vegs).each(function(i,vegs){
                if(items[2]==vegs['slug']){
                    strCustom += '<div class="foodery_fit_meal_builder_customize_custom_meal_item">'+vegs["title"]+'</div>';
                }
            });

		}else{
            // originals

        }
	}

	if(type=='originals'){

		$('.btnCustomizerMeal[data-week="'+week+'"][data-day="'+day+'"][data-meal="'+meal+'"]').data('slug',slug).data('type',type);
		$('.btnCustomizerMeal[data-week="'+week+'"][data-day="'+day+'"][data-meal="'+meal+'"]').find('.btnCustomizerMealDescBg').addClass(bgImage);
		$('.btnCustomizerMeal[data-week="'+week+'"][data-day="'+day+'"][data-meal="'+meal+'"]').find('.btnCustomizerMealDesc').html('&nbsp;').css({'font-weight':'800','color':'#000000'});
		$('.btnCustomizerMeal[data-week="'+week+'"][data-day="'+day+'"][data-meal="'+meal+'"]').find('.btnCustomizerMealTitle').html(title).css({'font-weight':'700','font-size':'10px'});

    }else if(type=='custom'){
        $('.btnCustomizerMeal[data-week="'+week+'"][data-day="'+day+'"][data-meal="'+meal+'"]').find('.btnCustomizerMealTitle').html(strCustom).css({'font-weight':'700','font-size':'10px'});
		$('.btnCustomizerMeal[data-week="'+week+'"][data-day="'+day+'"][data-meal="'+meal+'"]').data('slug',slug).data('type',type);
		$('.btnCustomizerMeal[data-week="'+week+'"][data-day="'+day+'"][data-meal="'+meal+'"]').find('.btnCustomizerMealDescBg').addClass(bgImage);
		$('.btnCustomizerMeal[data-week="'+week+'"][data-day="'+day+'"][data-meal="'+meal+'"]').find('.btnCustomizerMealDesc').html(''); //html(strCustom+'');
	}else{
		$('.btnCustomizerMeal[data-week="'+week+'"][data-day="'+day+'"][data-meal="'+meal+'"]').removeClass(bgImage);
		$('.btnCustomizerMeal[data-week="'+week+'"][data-day="'+day+'"][data-meal="'+meal+'"]').data('slug',slug).data('type',type);
		$('.btnCustomizerMeal[data-week="'+week+'"][data-day="'+day+'"][data-meal="'+meal+'"]').find('.btnCustomizerMealTitle').css({'font-weight':'inherit'});
		$('.btnCustomizerMeal[data-week="'+week+'"][data-day="'+day+'"][data-meal="'+meal+'"]').find('.btnCustomizerMealDesc').css({'font-weight':'inherit','color':'#ff0000'});
		$('.btnCustomizerMeal[data-week="'+week+'"][data-day="'+day+'"][data-meal="'+meal+'"]').find('.btnCustomizerMealDesc').html('choose your meal');
	}

    // console.log('kcal:',curr_total_energy_kcal,'protein:',curr_total_protein,'fat:',curr_total_fat);
}






$(document).on('click','.btnCustomizerOriginalsBack',function(){
	$.magnificPopup.close();
});

$(document).on('click','.btnCustomizerCreateBack',function(){
	$.magnificPopup.close();
});



function calculateTotalMeals(){

	listDayStats = {};

    if(curr_choose_plan!=undefined){
        if(curr_choose_plan=="Athleat"){
            $('.txtDebugChoosePlan').html("Athleat/Fat loss");
        }else if(curr_choose_plan=="Customized") {
            $('.txtDebugChoosePlan').html("Customized");
        }else{
            $('.txtDebugChoosePlan').html("Choose your meal plan?");
        }
        }else{
            $('.txtDebugChoosePlan').html("Choose your meal plan?");
        }

	if(curr_gender!=undefined){
		if(curr_gender=="m"){
			$('.txtDebugGender').html("Male");
		}else if(curr_gender=="f") {
			$('.txtDebugGender').html("Female");
		}else{
			$('.txtDebugGender').html("Gender");
		}
    	}else{
            $('.txtDebugGender').html("Gender");
        }    

	if(curr_days!=undefined){
		$('.txtDebugNumDays').html(curr_days);
	}
	if(curr_meals!=undefined){
		$('.txtDebugNumMeals').html(curr_meals);
	}
	if(curr_weeks!=undefined){
		$('.txtDebugNumWeeks').html(curr_weeks);
	}
	if(curr_start_date!=undefined){
		$('.txtDebugDateStart').html(moment(Date.parse(curr_start_date)).format('MMM Do'));
	}


	curr_total_meals_week = parseInt(curr_days)*parseInt(curr_meals);
	curr_total_meals = parseInt(curr_weeks)*parseInt(curr_days)*parseInt(curr_meals);
	// console.log('calculateTotalMeals',curr_weeks, curr_days, curr_meals,'=',curr_total_meals);
	$('.txtDebugTotalMeals').html(curr_total_meals+ ' Meals');
	$('.txtDebugTotalMealsWeek').html(curr_total_meals_week);

	// pricing week
	$.each(pricing_week,function(i,item){
		if(pricing_week[i]['num_meals']==curr_total_meals_week){
			curr_meal_price = pricing_week[i]['price_meal'];
			curr_week_price = pricing_week[i]['price'];
			curr_week_discount = pricing_week[i]['discount'];
		}
		// console.log(pricing_week[i]['num_meals']);
	});

	$('.txtDebugTotalSaving').html( (Math.round(curr_week_discount * parseInt(curr_weeks) *100) /100).toFixed(2) );
	$('.txtStatsPricePerMeal').html(curr_meal_price);

	curr_total_price = Math.round(curr_week_price * parseInt(curr_weeks) *100)/100;
    if(isNaN(curr_total_price)){
        $('.txtStatsPriceTotal').html( '' );
    }else{
        $('.txtStatsPriceTotal').html( 'AED'+00.toFixed(2) );
    }


    // calculo stats .....................

    curr_total_energy_kj = 0;
    curr_total_energy_kcal = 0;
    curr_total_fat = 0;
    curr_total_saturates = 0;
    curr_total_carbs = 0;
    curr_total_sugar = 0;
    curr_total_protein = 0;
    curr_total_salt = 0;
    curr_total_portion = 0;

    var this_week = 0;
    var this_day = 0;
    var total_day_kcal = 0;
    var total_day_prot = 0;
    var total_day_carbs = 0;
    var total_day_fat = 0;

    $(customizerList).each(function(i,list){

    	meal_total_energy_kj = 0;
	    meal_total_energy_kcal = 0;
	    meal_total_fat = 0;
	    meal_total_saturates = 0;
	    meal_total_carbs = 0;
	    meal_total_sugar = 0;
	    meal_total_protein = 0;
	    meal_total_salt = 0;
	    meal_total_portion = 0;

        var slug = list["slug"];
        this_week = list["w"];
        this_day = list["d"];



        if(slug!='' && slug!=undefined){
            if(slug.indexOf('|')>=0){
                var items = slug.split('|');

                // prot
                $(list_proteins).each(function(i,prot){
                    if(items[0]==prot['slug']){

                        meal_total_energy_kj += prot['energy_kj'];
                        meal_total_energy_kcal += prot['energy_kcal'];
                        meal_total_fat += prot['fat'];
                        meal_total_saturates += prot['saturates'];
                        meal_total_carbs += prot['carbs'];
                        meal_total_sugar += prot['sugar'];
                        meal_total_protein += prot['protein'];
                        meal_total_salt += prot['salt'];
                        meal_total_portion += prot['portion'];
                    }
                });

                // carbs
                $(list_carbs).each(function(i,carbs){
                    if(items[1]==carbs['slug']){
                        meal_total_energy_kj += carbs['energy_kj'];
                        meal_total_energy_kcal += carbs['energy_kcal'];
                        meal_total_fat += carbs['fat'];
                        meal_total_saturates += carbs['saturates'];
                        meal_total_carbs += carbs['carbs'];
                        meal_total_sugar += carbs['sugar'];
                        meal_total_protein += carbs['protein'];
                        meal_total_salt += carbs['salt'];
                        meal_total_portion += carbs['portion'];
                    }
                });

                // vegs
                $(list_vegs).each(function(i,vegs){
                    if(items[2]==vegs['slug']){
                        meal_total_energy_kj += vegs['energy_kj'];
                        meal_total_energy_kcal += vegs['energy_kcal'];
                        meal_total_fat += vegs['fat'];
                        meal_total_saturates += vegs['saturates'];
                        meal_total_carbs += vegs['carbs'];
                        meal_total_sugar += vegs['sugar'];
                        meal_total_protein += vegs['protein'];
                        meal_total_salt += vegs['salt'];
                        meal_total_portion += vegs['portion'];
                    }
                });

            }else{
                // originals
                 $(list_base_meals).each(function(i,base){
                    if(slug==base['slug']){
                        if(curr_gender=="m"){
                            meal_total_energy_kj += base['male_energy_kj'];
                            meal_total_energy_kcal += base['male_energy_kcal'];
                            meal_total_fat += base['male_fat'];
                            meal_total_saturates += base['male_saturates'];
                            meal_total_carbs += base['male_carbs'];
                            meal_total_sugar += base['male_sugar'];
                            meal_total_protein += base['male_protein'];
                            meal_total_salt += base['male_salt'];
                            meal_total_portion += base['male_portion'];
                        }else{
                            meal_total_energy_kj += base['female_energy_kj'];
                            meal_total_energy_kcal += base['female_energy_kcal'];
                            meal_total_fat += base['female_fat'];
                            meal_total_saturates += base['female_saturates'];
                            meal_total_carbs += base['female_carbs'];
                            meal_total_sugar += base['female_sugar'];
                            meal_total_protein += base['female_protein'];
                            meal_total_salt += base['female_salt'];
                            meal_total_portion += base['female_portion'];
                        }
                    }
                 });

            }
        }


        curr_total_energy_kj += meal_total_energy_kj;
		curr_total_energy_kcal += meal_total_energy_kcal;
		curr_total_fat += meal_total_fat;
		curr_total_saturates += meal_total_saturates;
		curr_total_carbs += meal_total_carbs;
		curr_total_sugar += meal_total_sugar;
		curr_total_protein += meal_total_protein;
		curr_total_salt += meal_total_salt;
		curr_total_portion += meal_total_portion;

		var key = 'w'+this_week+'d'+this_day+'';
		if(key in listDayStats){
			var temp_kcal = parseFloat(listDayStats['w'+this_week+'d'+this_day]["kcal"]);
			var temp_protein = parseFloat(listDayStats['w'+this_week+'d'+this_day]["protein"]);
			var temp_carbs = parseFloat(listDayStats['w'+this_week+'d'+this_day]["carbs"]);
			var temp_fat = parseFloat(listDayStats['w'+this_week+'d'+this_day]["fat"]);
			listDayStats['w'+this_week+'d'+this_day] = {
				"kcal":temp_kcal + meal_total_energy_kcal,
				"protein":temp_protein + meal_total_protein,
				"carbs":temp_carbs + meal_total_carbs,
				"fat":temp_fat + meal_total_fat,
				"w":this_week,
				"d":this_day
			};
		}else{
			listDayStats['w'+this_week+'d'+this_day] = {
				"kcal":meal_total_energy_kcal,
				"protein":meal_total_protein,
				"carbs":meal_total_carbs,
				"fat":meal_total_fat,
				"w":this_week,
				"d":this_day
			};
		}

    }); // end each

    // ........................
    // render daily stats
    $.each(listDayStats,function(i,dayStat){
    	var w = dayStat["w"];
    	var d = dayStat["d"];

        var txtDayStatKcal = (dayStat["kcal"]).toFixed(0).replace(/\.00$/,'');;
        var txtDayStatProtein = (dayStat["protein"]).toFixed(1).replace(/\.00$/,'');
        var txtDayStatCarbs = (dayStat["carbs"]).toFixed(1).replace(/\.00$/,'');
        var txtDayStatFat = (dayStat["fat"]).toFixed(1).replace(/\.00$/,'');

    	$('.cCustomizerDayNutrition[data-week="'+w+'"][data-day="'+d+'"]').find('.txtDayKCals').html(txtDayStatKcal+" kCal");
    	$('.cCustomizerDayNutrition[data-week="'+w+'"][data-day="'+d+'"]').find('.txtDayProtein').html(txtDayStatProtein+" g protein");
    	$('.cCustomizerDayNutrition[data-week="'+w+'"][data-day="'+d+'"]').find('.txtDayCarbs').html(txtDayStatCarbs+" g carbs");
    	$('.cCustomizerDayNutrition[data-week="'+w+'"][data-day="'+d+'"]').find('.txtDayFat').html(txtDayStatFat+" g fat");
    });



    // console.log(curr_total_energy_kcal,curr_total_meals,curr_total_energy_kcal/curr_total_meals);
    var currCustomizedMeals = customizerList.length;

    var avg_cals = (curr_total_energy_kcal/(curr_weeks*curr_days)).toFixed(0).replace(/\.00$/,'');
    var avg_protein = (curr_total_protein/(curr_weeks*curr_days)).toFixed(1).replace(/\.00$/,'');
    var avg_fat = (curr_total_fat/(curr_weeks*curr_days)).toFixed(1).replace(/\.00$/,'');
    var avg_carbs = (curr_total_carbs/(curr_weeks*curr_days)).toFixed(1).replace(/\.00$/,'');

    if(isNaN(avg_cals)){avg_cals=0;}
    if(isNaN(avg_protein)){avg_protein=0;}
    if(isNaN(avg_fat)){avg_fat=0;}
    if(isNaN(avg_carbs)){avg_carbs=0;}

    $('.txtDebugDailyCals').html( avg_cals +' kCal');
    $('.txtDebugDailyProtein').html( avg_protein  +' g');
    $('.txtDebugDailyFat').html( avg_fat +' g');
    $('.txtDebugDailyCarbs').html( avg_carbs +' g');

	// customized meals
	curr_customized_meals = customizerList.length;
	var percent_done = Math.floor(curr_customized_meals / curr_total_meals * 100);
	// console.log('curr_customized_meals',curr_customized_meals, curr_total_meals, percent_done+'%');
	if(isNaN(percent_done)){
        $('.txtDebugCustomize').html('0%');
    }else{
        $('.txtDebugCustomize').html(percent_done+'%');
    }
}

$(document).on('mouseenter','.txtDayKCals',function(){
    var w = $(this).data("week");
	// $('.cDailyExtraValues').addClass('cDailyExtraShow');
	$('.cDailyExtraValues[data-week="'+w+'"]').stop(true, true).fadeIn();
});

$(document).on('mouseleave','.cCustomizerDayNutrition',function(){
	// $('.cDailyExtraValues').removeClass('cDailyExtraShow');
	$('.cDailyExtraValues').fadeOut('fast');
});


// ---------------------------------------------------------------------------
$(document).on('click','.btnClearChoices',function(){
    clearEverything();
});

function clearEverything(){
    localStorage["customizerList"] = '';
    customizerList = [];

    clearCookies();

    curr_choose_plan = ''
    curr_gender = 'g';
    curr_days = '0';
    curr_meals = '0';
    curr_weeks = '0';
    curr_start_date = '';

    go('start');
    // renderCustomizeMeals();

    calculateTotalMeals();
}




// ---------------------------------------------------------------------------
$(document).on('click','.btnContinueToCheckout',function(){

    var ajaxurl = '/post-values/'

    if(curr_choose_plan==undefined){
        alert('Please select Choose your meal plan');
        go('chooseYourMealPlan');
        return;
    }

    if(curr_gender==undefined){
        alert('Please select your gender');
        go('gender');
        return;
    }
    if(curr_days==undefined){
        alert('Please select the number of days per week');
        go('weekdays');
        return;
    }
    if(curr_meals==undefined){
        alert('Please select the number of meals per day');
        go('meals');
        return;
    }
    if(curr_weeks==undefined){
        alert('Please select the number of weeks for your plan');
        go('weeks');
        return;
    }
    if(curr_start_date==undefined){
        alert('Please select the start date for your plan');
        go('datestart');
        return;
    }
    

	// all meals defined?
	if(curr_customized_meals<curr_total_meals){
		alert('There are still some meals to be defined');
	}else{
        
		// valid date?
		if(curr_start_date==''){
			alert('Please choose a starting date');
		}else{

			$(document).off('click','.btnContinueToCheckout');
			$(this).html('please wait...');


			var objLista = {};
			for(var i=0; i<customizerList.length;i++){
				objLista[i]=customizerList[i];
			}


			var serializedList = JSON.stringify(customizerList);
			// console.log(serialized);

			varsSave = {
				// 'action': 'foodery_fit_meal_builder_add_to_cart',
                'chooseyourmealplan': curr_choose_plan,
				'gender': curr_gender,
				'daysperweek': curr_days,
				'mealsperday': curr_meals,
				'weeks': curr_weeks,
				'startingdate': moment(curr_start_date, 'YYYY/MM/DD HH:mm:ss').format('YYYY-MM-DD HH:mm:ss'),
				'listmeals': serializedList,
				'totalprice': curr_total_price,
				'totalmeals': curr_total_meals,

            };

            $.ajax({
                  url: ajaxurl,
                  contentType: 'application/json',
                  data: JSON.stringify(varsSave),
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

			// $.post(ajaxurl,varsSave,function(data){
			// 	// console.log('vars',vars);
	  //           clearEverything();
			// 	// window.location = "../checkout/index.html";
			// },'json');


		}

	}
});




// TIMELINE --------------------------------

	var wwTimeline = 0;
	var wwTimelineBall1 = 22;
	var one_sixth = 0;
	var margin = 0;

	var x1;
	var x2;
	var x3;
	var x4;
	var x5;
	var x6;
	var x7;
    var x8;
	var posRandom;

	var timerRenderTimelineBlueLine;
	timerRenderTimelineBlueLine = setInterval(function(){

		wwTimeline = $('.foodery_fit_meal_timeline_base_line').width() - margin;
		one_sixth = Math.floor(wwTimeline/7);

		x1 = Math.floor(margin/2 + 0 - wwTimelineBall1/2);
		x2 = Math.floor(margin/2 + (1 * one_sixth) - wwTimelineBall1/2);
		x3 = Math.floor(margin/2 + (2 * one_sixth) - wwTimelineBall1/2);
		x4 = Math.floor(margin/2 + (3 * one_sixth) - wwTimelineBall1/2);
		x5 = Math.floor(margin/2 + (4 * one_sixth) - wwTimelineBall1/2);
		x6 = Math.floor(margin/2 + (5 * one_sixth) - wwTimelineBall1/2);
		x7 = Math.floor(margin/2 + (6 * one_sixth) - wwTimelineBall1/2);
        x8 = Math.floor(margin/2 + (7 * one_sixth) - wwTimelineBall1/2);

		$('.foodery_fit_meal_timeline_ball1').css({'left':x1+'px'});
		$('.foodery_fit_meal_timeline_ball2').css({'left':x2+'px'});
		$('.foodery_fit_meal_timeline_ball3').css({'left':x3+'px'});
		$('.foodery_fit_meal_timeline_ball4').css({'left':x4+'px'});
		$('.foodery_fit_meal_timeline_ball5').css({'left':x5+'px'});
		$('.foodery_fit_meal_timeline_ball6').css({'left':x6+'px'});
		$('.foodery_fit_meal_timeline_ball7').css({'left':x7+'px'});
        $('.foodery_fit_meal_timeline_ball8').css({'left':x8+'px'});

		$('.foodery_fit_meal_timeline_ball1_on').css({'left':x1+'px'});
		$('.foodery_fit_meal_timeline_ball2_on').css({'left':x2+'px'});
		$('.foodery_fit_meal_timeline_ball3_on').css({'left':x3+'px'});
		$('.foodery_fit_meal_timeline_ball4_on').css({'left':x4+'px'});
		$('.foodery_fit_meal_timeline_ball5_on').css({'left':x5+'px'});
		$('.foodery_fit_meal_timeline_ball6_on').css({'left':x6+'px'});
		$('.foodery_fit_meal_timeline_ball7_on').css({'left':x7+'px'});
        $('.foodery_fit_meal_timeline_ball8_on').css({'left':x8+'px'});

		$('.foodery_fit_meal_timeline_ball1_ok').css({'left':x1+'px'});
		$('.foodery_fit_meal_timeline_ball2_ok').css({'left':x2+'px'});
		$('.foodery_fit_meal_timeline_ball3_ok').css({'left':x3+'px'});
		$('.foodery_fit_meal_timeline_ball4_ok').css({'left':x4+'px'});
		$('.foodery_fit_meal_timeline_ball5_ok').css({'left':x5+'px'});
		$('.foodery_fit_meal_timeline_ball6_ok').css({'left':x6+'px'});
		$('.foodery_fit_meal_timeline_ball7_ok').css({'left':x7+'px'});
        $('.foodery_fit_meal_timeline_ball8_ok').css({'left':x8+'px'});

		$('.foodery_fit_meal_timeline_ball1_text').css({'left':(x1-39)+'px'});
		$('.foodery_fit_meal_timeline_ball2_text').css({'left':(x2-39)+'px'});
		$('.foodery_fit_meal_timeline_ball3_text').css({'left':(x3-39)+'px'});
		$('.foodery_fit_meal_timeline_ball4_text').css({'left':(x4-39)+'px'});
		$('.foodery_fit_meal_timeline_ball5_text').css({'left':(x5-39)+'px'});
		$('.foodery_fit_meal_timeline_ball6_text').css({'left':(x6-39)+'px'});
		$('.foodery_fit_meal_timeline_ball7_text').css({'left':(x7-39)+'px'});
        $('.foodery_fit_meal_timeline_ball8_text').css({'left':(x8-39)+'px'});

	},500);

	$(document).on('click','.tooltip_foodery_fit_start',function(){
        go('start');
        x = x1;

    });

    $(document).on('click','.tooltip_foodery_fit_choose_your_meal_plan',function(){
        go('chooseYourMealPlan');
        x = x2;

    });

    $(document).on('click','.tooltip_foodery_fit_gender',function(){
        go('gender');
        x = x3;

    });

    $(document).on('click','.tooltip_foodery_fit_days',function(){
        go('weekdays');
        x = x4;

    });

    $(document).on('click','.tooltip_foodery_fit_meals',function(){
        go('meals');
        x = x5;

    });

    $(document).on('click','.tooltip_foodery_fit_weeks',function(){
        go('weeks');
        x = x6;

    });

    $(document).on('click','.tooltip_foodery_fit_datestart',function(){
        go('datestart');
        x = x7;

    });

    $(document).on('click','.tooltip_foodery_fit_customize',function(){
        go('customize');
        x = x8;

    });


	function completeAnimBlueLine(){
		// console.log('completed '+posRandom);
	}






})( jQuery );
