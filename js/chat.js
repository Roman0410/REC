$(".header-account").click(function () {
  $(".menu-list").toggleClass("open");
  $(".header-account").find("img").toggleClass("open");
});
$("#chat-form").submit(function (event) {
  event.preventDefault();

  let chatData = $(this).serialize();
  let inputText = $("#NewdomainInput").val();

  $.post("", chatData)
    .done(function (response) {
      $("#domain").text(inputText);
    })
    .fail(function () {});
});
$(".close-changePayWrapper").click(function () {
  $(".changePayWrapper").addClass("hidden");
});
$(".payments").click(function () {
  $(".changePayWrapper").toggleClass("hidden");
});
