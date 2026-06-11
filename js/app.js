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

document.getElementById("regels").addEventListener("change", function() {
    
    if (this.checked) {
        document.getElementById("speelKnop").disabled = false; // knop wordt klikbaar
    } else {
        document.getElementById("speelKnop").disabled = true; // knop wordt grijs
    }
});


//sources voor checkbox \
//https://www.w3schools.com/jsref/prop_checkbox_checked.asp 
//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
