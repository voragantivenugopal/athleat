(function( $ ) {
	
	var currGender = 'm';
	var maleFactor = 5;
	var femaleFactor = -161;
	var genderFactor = 0;
	var currAge = 0;
	var currWeight = 0;
	var currHeight = 0;
	var currActivity = -1;
	var currActivityArray = [1.2,1.375,1.55,1.725];

	var currGoalFactor = -1;
	

	var calculatedREE = 0;
	var calculatedTDEE = 0;
	var calculatedBMI = 0;
	var calculatedGoalTotalCals = 0;

	var startProtein = 40;
	var startCarbs = 40;
	var startFat = 20;
	var calsPerGramProtein = 4;
	var calsPerGramCarbs = 4;
	var calsPerGramFat = 9;

	var currMacroProteinPercent = startProtein;
	var currMacroProteinGrams;
	var currMacroProteinKcals;
	var currMacroCarbsPercent = startCarbs;
	var currMacroCarbsGrams;
	var currMacroCarbsKcals;
	var currMacroFatPercent = startFat;
	var currMacroFatGrams;
	var currMacroFatKcals;

	var currMacroProteinRest;
	var currMacroCarbsRest;
	var currMacroProteinCarbsRest;
	var currMacroFactorCarbsFat = currMacroCarbsPercent / currMacroFatPercent;;
	var currMacroCarbsMax;
	var currMacroFatMax;

	var resultElement;
	var sliderProtein;
	var sliderCarbs;
	var sliderFat;

	var macroSlidersStarted = false;
	
	$(document).on('click','.inputFooderyFitMacroCalculatorGender',function(){
		var mf = $('.inputFooderyFitMacroCalculatorGender:checked').val();
		currGender = mf;
		calculateValues()
	});

	$(document).on('keyup','.inputFooderyFitMacroCalculator',function(){
		calculateValues()
	});

	$(document).on('change','.inputFooderyFitMacroCalculatorActivity',function(){
		currActivity = $('.inputFooderyFitMacroCalculatorActivity').val();
		$(".inputFooderyFitMacroCalculatorActivity option[value='-']").remove();
		calculateValues();
	});


	function calculateValues(){

		currAge = $('.inputFooderyFitMacroCalculatorAge').val();
		currWeight = $('.inputFooderyFitMacroCalculatorWeight').val();
		currHeight = $('.inputFooderyFitMacroCalculatorHeight').val();

		localStorage["macroAge"] = currAge;
		localStorage["macroWeight"] = currWeight;
		localStorage["macroHeight"] = currHeight;

		if(currGender == 'm'){
			genderFactor = maleFactor;
		}else{
			genderFactor = femaleFactor;
		}

		if( !isNaN(currAge) && !isNaN(currWeight) && !isNaN(currHeight) ){
			if( currAge>0 && currWeight>0 && currHeight>0){
				
				calculatedREE = 10*currWeight + 6.25*currHeight - 5*currAge + genderFactor;
				calculatedTDEE = Math.round(currActivityArray[currActivity]*calculatedREE);
				calculatedBMI = currWeight / ((currHeight/100)*(currHeight/100));

				$('.txtREE').html(calculatedREE);	
				$('.txtTDEE').html(calculatedTDEE.toFixed(0));
				$('.txtBMI').html(calculatedBMI.toFixed(2));

			}else{
				$('.txtREE').html('&nbsp;');
				$('.txtTDEE').html('&nbsp;');
				$('.txtBMI').html('&nbsp;');
			}
			
		}else{
			$('.txtREE').html('&nbsp;');
			$('.txtTDEE').html('&nbsp;');
			$('.txtBMI').html('&nbsp;');
		}

		calculateMacroValues();
	}


	$(document).ready(function(){

		if(localStorage["macroAge"]!=undefined && localStorage["macroAge"]!=""){
			currAge = localStorage["macroAge"];
			$('.inputFooderyFitMacroCalculatorAge').val(currAge);
		};

		if(localStorage["macroWeight"]!=undefined && localStorage["macroWeight"]!=""){
			currWeight = localStorage["macroWeight"];
			$('.inputFooderyFitMacroCalculatorWeight').val(currWeight);
		};

		if(localStorage["macroHeight"]!=undefined && localStorage["macroHeight"]!=""){
			currHeight = localStorage["macroHeight"];
			$('.inputFooderyFitMacroCalculatorHeight').val(currHeight);
		};

		if(localStorage["macroAge"]!=undefined && localStorage["macroAge"]!=""){
			currAge = localStorage["macroAge"];
			$('.inputFooderyFitMacroCalculatorAge').val(currAge);
		};

		$(document).on('change','.inputFooderyFitMacroCalculatorGoal',function(){
			currGoalFactor = $('.inputFooderyFitMacroCalculatorGoal').val();
			$(".inputFooderyFitMacroCalculatorGoal option[value='-']").remove();
			calculateValues();
		});


		$( "#sliderP" ).slider({
			range: 'min',
			min:0,
			max:100,
			step:1,
			value:0,
			slide: function( event, ui ) {
				currMacroProteinPercent = ui.value;
				currMacroProteinRest = 100 - currMacroProteinPercent;
				
				// if(currMacroProteinRest==0){
				// 	currMacroFactorCarbsFat = 1;
				// 	// console.log(currMacroProteinPercent,currMacroFatPercent,currMacroCarbsPercent);
				// }

				currMacroFatPercent = Math.round(currMacroProteinRest / (1 + currMacroFactorCarbsFat));
				currMacroCarbsPercent = 100 - currMacroProteinPercent - currMacroFatPercent;

				$('#sliderC').slider("value",currMacroCarbsPercent);
				$('#sliderF').slider("value",currMacroFatPercent);
				calculateMacroValues();
			}
		});

		$( "#sliderC" ).slider({
			range: 'min',
			min:0,
			max:100,
			step:1,
			value:0,
			slide: function( event, ui ) {
				currMacroCarbsPercent = ui.value;

				currMacroProteinRest = 100 - currMacroProteinPercent;
				if(currMacroCarbsPercent>currMacroProteinRest){
					return false;
				}

				currMacroFatPercent = 100 - currMacroProteinPercent - currMacroCarbsPercent;
				$('#sliderF').slider("value",currMacroFatPercent);

				
				currMacroFactorCarbsFat = currMacroCarbsPercent / currMacroFatPercent;
				
				calculateMacroValues();
			}
		});

		$( "#sliderF" ).slider({
			range: 'min',
			min:0,
			max:100,
			step:1,
			value:0,
			slide: function( event, ui ) {

				currMacroFatPercent = ui.value;

				currMacroProteinRest = 100 - currMacroProteinPercent;

				currMacroProteinCarbsRest = currMacroProteinRest - currMacroCarbsPercent;
				currMacroCarbsPercent = 100-currMacroProteinPercent-currMacroFatPercent;

				if(currMacroFatPercent>currMacroProteinRest){
					return false;
				}else{
					$('#sliderC').slider("value",currMacroCarbsPercent);
				}

				currMacroFactorCarbsFat = currMacroCarbsPercent / currMacroFatPercent;
				calculateMacroValues();
			}
		});

		$('#sliderP > div').css({'background-color':'#4397ff'});
		$('#sliderC > div').css({'background-color':'#57388b'});
		$('#sliderF > div').css({'background-color':'#ff6141'});
		
		$('#sliderP').slider( "disable" );
		$('#sliderC').slider( "disable" );
		$('#sliderF').slider( "disable" );
		
	});

	


	function enableMacros(){
		if(calculatedTDEE>0 && currActivity!=-1 && currGoalFactor!=-1){

			$('#sliderP').slider("enable");
			$('#sliderC').slider("enable");
			$('#sliderF').slider("enable");

			$('#sliderP').slider("value",currMacroProteinPercent);
			$('#sliderC').slider("value",currMacroCarbsPercent);
			$('#sliderF').slider("value",currMacroFatPercent);

			
		}else{
			
		}
	}

	function calculateMacroValues(){
		// console.log('calculate macro');

		enableMacros();

		calculatedGoalTotalCals = calculatedTDEE*currGoalFactor;
			
		currMacroProteinKcals = Math.round(calculatedGoalTotalCals * (currMacroProteinPercent/100));
		currMacroCarbsKcals = Math.round(calculatedGoalTotalCals * (currMacroCarbsPercent/100));
		currMacroFatKcals = Math.round(calculatedGoalTotalCals * (currMacroFatPercent/100));
		
		currMacroProteinGrams = Math.round(currMacroProteinKcals/calsPerGramProtein);
		currMacroCarbsGrams = Math.round(currMacroCarbsKcals/calsPerGramCarbs);
		currMacroFatGrams = Math.round(currMacroFatKcals/calsPerGramFat);

		$('.txtTotalCalories').html(Math.round(calculatedGoalTotalCals));
		$('.cTotalCalories').show();

		$('.txtMacroProteinPercent').html(currMacroProteinPercent);
		$('.txtMacroCarbsPercent').html(currMacroCarbsPercent);
		$('.txtMacroFatPercent').html(currMacroFatPercent);

		$('.txtMacroProteinKcals').html(currMacroProteinKcals);
		$('.txtMacroCarbsKcals').html(currMacroCarbsKcals);
		$('.txtMacroFatKcals').html(currMacroFatKcals);

		$('.txtMacroProteinGrams').html(currMacroProteinGrams);
		$('.txtMacroCarbsGrams').html(currMacroCarbsGrams);
		$('.txtMacroFatGrams').html(currMacroFatGrams);
	}
	

})( jQuery );
