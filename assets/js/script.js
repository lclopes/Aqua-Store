/// <reference path="../../typings/globals/jquery/index.d.ts" />

$(function () {
   $('[data-toggle="tooltip"]').tooltip();
   $('[data-toggle="popover"]').popover();
   
})

/*
      ($("#submitbtn").click(function(){
          //alert("consegui");
          $("#nome").addClass("is-invalid");   
          $("#sexo-masc").addClass("is-invalid");
          $("#sexo-fem").addClass("is-invalid");
          $("#endereco").addClass("is-invalid");
          $("#sexo-feedback").show(10,"invalid-feedback");

      }) */

      /*
$(document).ready(function(){
   $('#form-cadastro input[type="text"]').blur(function(){
      if(!$(this).val()){
          $(this).addClass("is-invalid");
      } else{
          $(this).removeClass("is-invalid");
      }
  });
})*/

// $(function(){   
//    $("#submitbtn").submit(function(){
//       var valid = true;
//       $(this).remove("is-invalid");
//       if(!$("#nome").val()){
//          valid = false;
//          $(this).addClass("is-invalid");
//       }
//    })
// })

//checkbox do formulário de cartão de crédito
$(function () {
   $("#chk-formcard").click(function(){
      if($(this).is(":checked")){
         $("#creditcard").prop("disabled",true);
         $("#chk-end").prop("disabled",true);
         $("#num-card").attr("disabled", "disabled");
         $("#cvv").attr("disabled", "disabled");
         $("#endereco-cob").attr("disabled", "disabled");
         $("#expiration").attr("disabled", "disabled");
      } else {
         $("#creditcard").prop("disabled",false);
         $("#chk-end").prop("disabled",false);
         $("#num-card").removeAttr("disabled");
         $("#cvv").removeAttr("disabled");
         $("#endereco-cob").removeAttr("disabled");
         $("#expiration").removeAttr("disabled");
      }
   })
})

$(function () {
   $("#chk-end").click(function(){
      if($(this).is(":checked")){
         $("#endereco-cob").attr("disabled", "disabled");
      } else {
         $("#endereco-cob").removeAttr("disabled");
         $("#endereco-cob").focus();
      }
   })
})

$('#submitbtn').on('click',function()
{
   if($('#nome').val()) {
      $('#nome').removeClass("is-invalid");
   }
   if(!$('#nome').val()) {
      $('#nome').addClass("is-invalid");
      $('#nome').focus();
   }
   if($('#email').val()) {
      $('#email').removeClass("is-invalid");
   }
   if(!$('#email').val()) {
      $('#email').addClass("is-invalid");
      $('#email').focus();
   }
   if($('#phone').val()) {
      $('#phone').removeClass("is-invalid");
   }
   if(!$('#phone').val()) {
      $('#phone').addClass("is-invalid");
      $('#phone').focus();
   }

   if($('#endereco').val()) {
      $('#endereco').removeClass("is-invalid");
   }
   if(!$('#endereco').val()) {
      $('#endereco').addClass("is-invalid");
      $('#endereco').focus();
   }
});


