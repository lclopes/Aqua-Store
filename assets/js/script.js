/// <reference path="../../typings/globals/jquery/index.d.ts" />

$(function () {
   $('[data-toggle="tooltip"]').tooltip();
   $('[data-toggle="popover"]').popover();
   
      $("#submitbtn").click(function(){
          //alert("consegui");
          $("#nome").addClass("is-invalid");   
          $("#sexo-masc").addClass("is-invalid");
          $("#sexo-fem").addClass("is-invalid");
          $("#endereco").addClass("is-invalid");
          $("#sexo-feedback").show(10,"invalid-feedback");

      })
})

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


