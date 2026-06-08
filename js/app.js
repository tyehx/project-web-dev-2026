document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll("button[data-target]");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var target = button.getAttribute("data-target");
      if (target) {
        window.location.href = target;
      }
    });
  });
});

