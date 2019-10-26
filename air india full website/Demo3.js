// JavaScript Document
$(document).ready(function(){
	"use strict";
	
//	var hText ="This is a new text";
//	var text1 ="This is another new text";
	//var text2 =text1+hText;
//	var lineNum = 0;
	
//	$("h1").click(function(){
//		$("p").eq(lineNum).css ("background-color","red");
//		lineNum++;
//		if(lineNum ==2){
//		$("p").eq(0).css ("background-color","lightblue");
//		}
		
//	});
		var imageName =["ethan-robertson-SYx3UCHZJlo-unsplash.jpg","luca-bravo-O453M2Liufs-unsplash.jpg","erik-odiin-jbQvJx2EWnU-unsplash.jpg"];
		var imageNum = 0;
	$("#picture").click(function(){
	$("#picture").attr("src",imageName[imageNum]);
	imageNum++;
	});
});