// JavaScript Document
$(document).ready(function(){
	"use strict";
	
	$("h1").mousedown(function(){
		$(this).css ("background-color","red");
		
	});
	
	$("h1").mouseleave(function(){
		$(this).css ("background-color","yellow");
		
	});
	
});