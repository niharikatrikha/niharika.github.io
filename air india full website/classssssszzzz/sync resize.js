// JavaScript Document
$(document).ready(function () {
	"use strict";
    $( "#resizable" ).resizable({
      alsoResize: "#also"
    });
    $( "#also" ).resizable();
  } );