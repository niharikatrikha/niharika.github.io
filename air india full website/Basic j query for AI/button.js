// JavaScript Document
  $(document).ready(function() {
	  'use strict';
    $( ".widget button" ).button();
    $( "button" ).click( function( event ) {
      event.preventDefault();
    } );
  } );