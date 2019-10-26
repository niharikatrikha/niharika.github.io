// JavaScript Document
$(document).ready(function(){
	"use strict";
	$("h1").click(function(){
		$("p").eq(1).replaceWith("This Is A Replaced Text");
//		$("p").html('This is <strong style="color:red">new</strong> text');
//		$("div").empty();
		//$ ("div").append("This is an append text");
		
	//$("#picture1").click(function(){
		//$("picture1").attr("src","picture2");
	});
	
});