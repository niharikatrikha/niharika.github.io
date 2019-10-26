// JavaScript Document
$(document).ready (function() {
	"use strict";
    $( ".widget input[type=submit], .widget a, .widget button" ).button();
    $( "button, input, a" ).click( function( event ) {
      event.preventDefault();
    });
  });