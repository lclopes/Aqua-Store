/// <reference path="../../typings/globals/jquery/index.d.ts" />

$(function () {
   var num_like = $("#like").data("like");
   var num_dislike = $("#dislike").data("dislike");

   $("#like").addClass("badge").html(num_like);
   $("#dislike").addClass("badge").html(num_dislike);
})

$("#like-button").click(function () {

   if ($("#like-button").hasClass("far") && $("#dislike-button").hasClass("far")) {
      $("#like-button").removeClass("far");
      $("#like-button").addClass("fas");

      var num_like = $("#like").data("like") + 1;

      $("#like").data("like", num_like);
      $("#like").html(num_like);
   }
   else if ($("#like-button").hasClass("far") && $("#dislike-button").hasClass("fas")) {
      $("#like-button").removeClass("far");
      $("#like-button").addClass("fas");

      $("#dislike-button").removeClass("fas");
      $("#dislike-button").addClass("far");

      var num_like = $("#like").data("like") + 1;
      var num_dislike = $("#dislike").data("dislike") - 1;

      $("#like").data("like", num_like);
      $("#like").html(num_like);

      $("#dislike").data("dislike", num_dislike);
      $("#dislike").html(num_dislike);
   }
   else {
      $("#like-button").removeClass("fas");
      $("#like-button").addClass("far");

      var num_like = $("#like").data("like") - 1;

      $("#like").data("like", num_like);
      $("#like").html(num_like);
   }
});

$("#dislike-button").click(function () {
   if ($("#like-button").hasClass("far") && $("#dislike-button").hasClass("far")) {
      $("#dislike-button").removeClass("far");
      $("#dislike-button").addClass("fas");

      var num_dislike = $("#dislike").data("dislike") + 1;

      $("#dislike").data("dislike", num_dislike);
      $("#dislike").html(num_dislike);
   }
   else if ($("#like-button").hasClass("fas") && $("#dislike-button").hasClass("far")) {
      $("#dislike-button").removeClass("far");
      $("#dislike-button").addClass("fas");

      $("#like-button").removeClass("fas");
      $("#like-button").addClass("far");

      var num_like = $("#like").data("like") - 1;
      var num_dislike = $("#dislike").data("dislike") + 1;

      $("#like").data("like", num_like);
      $("#like").html(num_like);

      $("#dislike").data("dislike", num_dislike);
      $("#dislike").html(num_dislike);
   }
   else {
      $("#dislike-button").removeClass("fas");
      $("#dislike-button").addClass("far");

      var num_dislike = $("#dislike").data("dislike") - 1;

      $("#dislike").data("dislike", num_dislike);
      $("#dislike").html(num_dislike);
   }

});