/// <reference path="../../typings/globals/jquery/index.d.ts" />

$(function(){   
   $("#submitbtn").submit(function(){
      var valid = true;
      $(this).remove("is-invalid");
      if(!$("#nome").val()){
         valid = false;
         $(this).addClass("is-invalid");
      }
   })
})

//checkbox do formulário de cartão de crédito
$(function () {
  $("#chk-formcard").click(function () {
     if ($(this).is(":checked")) {
        $("#creditcard").prop("disabled", true);
        $("#chk-end").prop("disabled", true);
        $("#num-card").attr("disabled", "disabled");
        $("#cvv").attr("disabled", "disabled");
        $("#endereco-cob").attr("disabled", "disabled");
        $("#expiration").attr("disabled", "disabled");
     } else {
        $("#creditcard").prop("disabled", false);
        $("#chk-end").prop("disabled", false);
        $("#num-card").removeAttr("disabled");
        $("#cvv").removeAttr("disabled");
        $("#endereco-cob").removeAttr("disabled");
        $("#expiration").removeAttr("disabled");
     }
  })
})

//checkbox de endereço de cobrança
$(function () {
  $("#chk-end").click(function () {
     if ($("#chk-end").is(":checked")) {
        $("#endereco-cob").attr("disabled", "disabled");
     } else {
        $("#endereco-cob").removeAttr("disabled");
        $("#endereco-cob").focus();
     }
  })
})

//ESSE PEDAÇO ESTÁ VALIDANDO ESSES CAMPOS AO CLICAR EM ENVIAR
//FALTA MELHORAR UM POUCO ESSE CÓDIGO, MAS A VALIDAÇÃO ATÉ QUE FUNCIONA
$('#submitbtn').on('click', function () {
  if ($('#nome').val()) {
     $('#nome').removeClass("is-invalid");
  }
  if (!$('#nome').val()) {
     $('#nome').addClass("is-invalid");
     $('#nome').focus();
  }
  if ($('#email').val()) {
     $('#email').removeClass("is-invalid");
  }
  if (!$('#email').val()) {
     $('#email').addClass("is-invalid");
     $('#email').focus();
  }
  if ($('#phone').val()) {
     $('#phone').removeClass("is-invalid");
  }
  if (!$('#phone').val()) {
     $('#phone').addClass("is-invalid");
     $('#phone').focus();
  }

  if(!$("input[name=sexo]").is(":checked")){
     $('#sexo-masc').addClass("is-invalid");
     $('#sexo-fem').addClass("is-invalid");
  }   
  if($("input[name=sexo]").is(":checked")){
     $('#sexo-masc').removeClass("is-invalid");
     $('#sexo-fem').removeClass("is-invalid");
  }
  

  if($("#creditcard").val() == -1 && !$("#chk-formcard").is(":checked")){
     $('#creditcard').addClass("is-invalid");
  } if($("#creditcard").val() != -1){
     $('#creditcard').removeClass("is-invalid");
  }

  if ($('#endereco').val()) {
     $('#endereco').removeClass("is-invalid");
  }
  if (!$('#endereco').val()) {
     $('#endereco').addClass("is-invalid");
     $('#endereco').focus();
  }
  if (!$('#num-card').val() && !$("#chk-formcard").is(":checked")) {
     $('#num-card').addClass("is-invalid");
     $('#num-card').focus();
  }

  if ($('#num-card').val() && !$("#chk-formcard").is(":checked")) {
     $('#num-card').removeClass("is-invalid");
  }

  if (!$('#cvv').val() && !$("#chk-formcard").is(":checked")) {
     $('#cvv').addClass("is-invalid");
     $('#cvv').focus();
  }

  if ($('#cvv').val() && !$("#chk-formcard").is(":checked")) {
     $('#cvv').removeClass("is-invalid");
  }

  if (!$('#expiration').val() && !$("#chk-formcard").is(":checked")) {
     $('#expiration').addClass("is-invalid");
     $('#expiration').focus();
  }

  if ($('#expiration').val() && !$("#chk-formcard").is(":checked")) {
     $('#expiration').removeClass("is-invalid");
  }

  if (!$('#endereco-cob').val() && !$("#chk-formcard").is(":checked")) {
     if (!$("#chk-end").is(":checked")) {
        $('#endereco-cob').addClass("is-invalid");
        $('#endereco-cob').focus();
     }

  }

  if ($('#endereco-cob').val() && !$("#chk-formcard").is(":checked")) {
     if (!$("#chk-end").is(":checked")) {
        $('#endereco-cob').removeClass("is-invalid");
     }
  }
});


