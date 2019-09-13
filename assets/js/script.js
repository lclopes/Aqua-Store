/// <reference path="../../typings/globals/jquery/index.d.ts" />

$(function () {
   $('[data-toggle="tooltip"]').tooltip();
   $('[data-toggle="popover"]').popover();
   /*
      $("#submitbtn").click(function(){
          //alert("consegui");
          $("#nome").validate();   
          $("#sexo-masc").addClass("is-invalid");
          $("#sexo-fem").addClass("is-invalid");
          $("#endereco").addClass("is-invalid");
      })
   */

   $("#cadastro").validate({
      rules: {
         nome: "required",
         sexo:{
            required: function () {
               return $('[name="sexo"]:checked').length === 0;
            }
         },
         endereco: "required",
         
      },
      errorPlacement: function (error, element) {
         if (element.is(":radio")) {
            error.appendTo('#erro-sexo');
         }
         else { // This is the default behavior 
            error.insertAfter(element);
         }
      },
      submitHandler: function (form) {
         form.submit();
      }
   });

})



