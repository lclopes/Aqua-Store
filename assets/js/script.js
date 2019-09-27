/// <reference path="../../typings/globals/jquery/index.d.ts" />

$(function () {
   $('[data-toggle="tooltip"]').tooltip();
   $('[data-toggle="popover"]').popover();

})

// $(function () {
//    $(".like").click(function () {
//       var input = $(this).find('.qtd1');
//       input.val(parseInt(input.val()) + 1);
//    });
//    $(".dislike").click(function () {
//       var input = $(this).find('.qtd2');
//       input.val(parseInt(input.val()) + 1);
//    });
// });

$(function () {
   $("#data-like").click(function () {
      if ($("#like").hasClass("far fa-thumbs-up")) {
         $("#like").removeClass("far fa-thumbs-up");
         $("#like").addClass("fas fa-thumbs-up");
         
         var input = $(this).find('.qtd1');
         input.val(parseInt(input.val()) + 1);
         $("#like").data("like",input);

      } else if ($("#like").hasClass("fas fa-thumbs-up")) {
         $("#like").removeClass("fas fa-thumbs-up");
         $("#like").addClass("far fa-thumbs-up");
         var input = $(this).find('.qtd1');
         input.val(parseInt(input.val()) - 1);
      }
   });

   $("#data-dislike").click(function () {
      if ($("#dislike").hasClass("far fa-thumbs-down")) {
         $("#dislike").removeClass("far fa-thumbs-down");
         $("#dislike").addClass("fas fa-thumbs-down");
         
         var input = $(this).find('.qtd2');
         input.val(parseInt(input.val()) + 1);
         $("#dislike").data("dislike",input);
         
      } else if ($("#dislike").hasClass("fas fa-thumbs-down")) {
         $("#dislike").removeClass("fas fa-thumbs-down");
         $("#dislike").addClass("far fa-thumbs-down");
         var input = $(this).find('.qtd2');
         input.val(parseInt(input.val()) - 1);
      }
   });
})
