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
        document.getElementById("RollKnop").disabled = false; // knop wordt klikbaar
    } else {
        document.getElementById("RollKnop").disabled = true; // knop wordt grijs
    }
});

document.getElementById("RollKnop").addEventListener("click", function() {
    // genereert random cijfer van 0-10
    var cijfer1 = Math.floor(Math.random() * 10);
    var cijfer2 = Math.floor(Math.random() * 10);
    var cijfer3 = Math.floor(Math.random() * 10);

    // gerollde cijfers tonen
    document.getElementById("resultaat").innerText = cijfer1 + " " + cijfer2 + " " + cijfer3;

    // zien of ze allemaal dezelfde zijn en als het zo is dan win als het niet zo is probeer opnieuw
    if (cijfer1 === cijfer2 && cijfer2 === cijfer3) {
        document.getElementById("bericht").innerText = "WIN!";
    } else {
        document.getElementById("bericht").innerText = "Probeer opnieuw!";
    }
});

//sources
//https://www.w3schools.com/jsref/prop_checkbox_checked.asp 
//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
//https://www.w3schools.com/js/js_random.asp
//https://www.w3schools.com/jsref/met_document_getelementbyid.asp
//
