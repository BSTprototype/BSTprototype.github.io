var progressbar, progressLabel;

function getScope(ctrlName) {
    var ctrlElement = 'div[ng-controller="' + ctrlName + '"]';
    return angular.element(ctrlElement).scope();
}

function progresschange() {
    var $scope = getScope('quizCtrl');
    var val = $scope.currentQuiz || 0;
    val = Math.floor(val / $scope.quizzes.length * 100);
    if (val > 40) {
        $(".progresslabel").css("color", "white");
    }
    if (val <= 40) {
        $(".progresslabel").css("color", "black");
    }
    progressbar.progressbar("value", val);
    if ($scope.currentQuiz == 0) {
        $("#previouslink0").hide();
        $("#previouslink1").hide();
        $("#calcellink").hide();
        $("#previousemptylink1").show();
    }
    else {
        $("#previouslink0").show();
        $("#previouslink1").show();
        $("#calcellink").show();
        $("#previousemptylink1").hide();
    }
};

angular.module('quizApp', ['ngSanitize'])
  .controller('quizCtrl', function ($scope) {
      $scope.quizzes = quizzes;
      $scope.currentQuiz = 0;
      $scope.isSummary = false;

      $scope.addQuiz = function () {
          if ($("form").valid()) {
              if ($scope.isSummary) {
                  $("#quizStep").hide();
                  $("#quizSection").hide();
                  $("#summarySection").show();
                  $("#summarySection1").show();
              }
              if ($scope.currentQuiz < $scope.quizzes.length - 1) {
                  $scope.currentQuiz++;
                  progresschange();
              }
              if ($scope.currentQuiz == $scope.quizzes.length - 1) {
                  $("#btnNext").html("Summary");
                  $scope.isSummary = true;
              }
          }
      }

      $scope.minusQuiz = function () {
          $("#rdoAnswers-error").hide();
          if ($scope.currentQuiz > 0) {
              $scope.currentQuiz--;
              progresschange();
          }
          $("#btnNext").html("Next Question");
      }

      $scope.gotoQuiz = function (answer, value) {
          $("#quizStep").show();
          $("#quizSection").show();
          $("#summarySection").hide();
          $("#summarySection1").hide();
          $scope.currentQuiz = value;
          if (value == $scope.quizzes.length - 1) {
              $("#btnNext").html("Summary");
              $scope.isSummary = true;
          }
          else {
              $("#btnNext").html("Next Question");
              $scope.isSummary = false;
          }
          progresschange();
      }

      $scope.addUserAnswer = function (value) {
          $scope.quizzes[$scope.currentQuiz].userAnswer = value;
      }
  });

$(document).ready(function () {
    progressbar = $("#progressbar");
    progressLabel = $(".progresslabel");

    progressbar.progressbar({
        value: false,
        change: function () {
            progressLabel.text(progressbar.progressbar("value") + "% Completed");
        },
        complete: function () {
            progressLabel.text("Complete!");
        }
    });

    progresschange();

    var drate = 0.4;
    if ($(window).width() < 1000)
        drate = 0.9;

    $(".help").click(function (e) {
        e.preventDefault();

        $("#helpdialog").dialog({
            autoOpen: false,
            resizable: false,
            height: "auto",
            width: $(window).width() * drate,
            title: $(this).attr("title"),
            modal: true
        }).dialog("open");
    });
});
