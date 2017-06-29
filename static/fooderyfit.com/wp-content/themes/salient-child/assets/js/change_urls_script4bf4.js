
/*
jQuery( document ).ready( function( $ ) {
    //alert(logged_in);

    $("a").each(function(i,item) {
    
    	if(logged_in===true){
    		//console.log('logged in');
    	}else{
    		//console.log('logged out');
    		str = item.href;
	    	if(str.indexOf("my-account")>=0){
	    		//console.log(item);
	    		//$(item).css({'background-color':'yellow'});
	    		$(item).addClass('palo-link-style palo-modal-link palo-modal-open');
	    		$(item).attr("data-form","login").data("form","login");
	    		//$(item).attr('href','http://www.google.com');
	    		$(item).attr('href','');

	    	}
    	}

    });

} );
*/