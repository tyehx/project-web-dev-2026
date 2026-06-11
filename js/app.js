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

function controleerKnop() {
    var naam = document.getElementById("naamInvoer").value;
    var checkbox = document.getElementById("regels").checked;

    if (naam !== "" && checkbox) {
        document.getElementById("RollKnop").disabled = false; //knop word klikbaar
    } else {
        document.getElementById("RollKnop").disabled = true;  //knop word gedisabled
    }
}

document.getElementById("regels").addEventListener("change", controleerKnop);
document.getElementById("naamInvoer").addEventListener("input", controleerKnop);

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

document.getElementById("shakeKnop").addEventListener("click", function() {
  document.body.classList.add("shake");
  setTimeout(function() {
    document.body.classList.remove("shake");
  }, 500);
});



//sources
//https://www.w3schools.com/jsref/prop_checkbox_checked.asp 
//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
//https://www.w3schools.com/js/js_random.asp
//https://www.w3schools.com/jsref/met_document_getelementbyid.asp
//https://www.w3schools.com/jsref/prop_text_value.asp
//https://www.w3schools.com/jsref/event_oninput.asp
