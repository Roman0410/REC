const video = document.getElementById("video");
const circlePlayButton = document.getElementById("circle-play-b");

function togglePlay() {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
}

circlePlayButton.addEventListener("click", togglePlay);
video.addEventListener("playing", function () {
  circlePlayButton.style.opacity = 0;
});
video.addEventListener("pause", function () {
  circlePlayButton.style.opacity = 1;
});

$(".toggle-password").click(function () {
  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

$(".sign-in").click(function () {
  $(".signUpWrapper").addClass("hidden");
  $(".signInWrapper").toggleClass("hidden");
});
$(".close-signInWrapper").click(function () {
  $(".signInWrapper").addClass("hidden");
});
$(".sign-up").click(function () {
  $(".signInWrapper").addClass("hidden");
  $(".signUpWrapper").toggleClass("hidden");
});
$(".close-signUpWrapper").click(function () {
  $(".signUpWrapper").addClass("hidden");
});

$("#generateForm").submit(function (event) {
  event.preventDefault();

  let formData = $(this).serialize();
  let inputText = $("#domainInput").val();

  $.post("", formData)
    .done(function (response) {
      $(".chat-prew ").addClass("chat-open");
      $("#domain").text(inputText);
    })
    .fail(function () {
      $("#result").removeClass("error");
      $.alert("ERROR");
    });
});
