// JavaScript Document
$(document).ready(function(){
	"use strict";
	$ ("h2").hide();
	
	$("h1").click(function(){
		
		$("h2").fadeIn(1000, function(){
			$("h3").slideUp(2000);
		});
	});
	
	
});