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

$(document).ready(function () {
  $("#copyButton").click(function () {
    let text = $("#textBlock").text();

    let tempInput = $("<input>");
    $("body").append(tempInput);

    tempInput.val(text).select();
    document.execCommand("copy");

    tempInput.remove();

    let blockToDisplay = $("#success");
    blockToDisplay.show();
    setTimeout(function () {
      blockToDisplay.hide();
    }, 2000);
  });
  $(document).ready(function () {
    $("#NewdomainInput").on("input", function () {
      var text = $(this).val();
      $("#your-domain").val(text);
    });
  });
});
