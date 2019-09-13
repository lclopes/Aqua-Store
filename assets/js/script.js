/// <reference path="../../typings/globals/jquery/index.d.ts" />

$(function() {
   $('[data-toggle="tooltip"]').tooltip();
   $('[data-toggle="popover"]').popover();

   $("#submitbtn").click(function(){
       //alert("consegui");
       $("#nome").addClass("is-invalid");
   })


})

