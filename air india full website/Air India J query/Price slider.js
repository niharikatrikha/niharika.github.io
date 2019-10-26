// JavaScript Document
$(document).ready(function() {
	'use strict';
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 3000,
      values: [ 100, 1000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "Rs." + ui.values[ 0 ] + " - Rs." + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "Rs." + $( "#slider-range" ).slider( "values", 0 ) +
      " - Rs." + $( "#slider-range" ).slider( "values", 1 ) );
  } );