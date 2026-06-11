
  var buttons = document.querySelectorAll("button[data-target]");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var target = button.getAttribute("data-target");
      if (target) {
        window.location.href = target;
      }
    });
  });

  // shake
  if (document.getElementById("shakeKnop")) {
    document.getElementById("shakeKnop").addEventListener("click", function() {
      document.body.classList.add("shake");
      setTimeout(function() {
        document.body.classList.remove("shake");
      }, 500);
    });
  }

  // game 
  if (document.getElementById("regels")) {
    document.getElementById("regels").addEventListener("change", controleerKnop);
    document.getElementById("naamInvoer").addEventListener("input", controleerKnop);

    document.getElementById("RollKnop").addEventListener("click", function() {
      var cijfer1 = Math.floor(Math.random() * 10);
      var cijfer2 = Math.floor(Math.random() * 10);
      var cijfer3 = Math.floor(Math.random() * 10);

      document.getElementById("resultaat").innerText = cijfer1 + " " + cijfer2 + " " + cijfer3;

      if (cijfer1 === cijfer2 && cijfer2 === cijfer3) {
        document.getElementById("bericht").innerText = "WIN!";
      } else {
        document.getElementById("bericht").innerText = "Probeer opnieuw!";
      }
    });
  }


function controleerKnop() {
  var naam = document.getElementById("naamInvoer").value;
  var checkbox = document.getElementById("regels").checked;

  if (naam !== "" && checkbox) {
    document.getElementById("RollKnop").disabled = false;
  } else {
    document.getElementById("RollKnop").disabled = true;
  }
}

//sources
//https://www.w3schools.com/jsref/prop_checkbox_checked.asp 
//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
//https://www.w3schools.com/js/js_random.asp
//https://www.w3schools.com/jsref/met_document_getelementbyid.asp
//https://www.w3schools.com/jsref/prop_text_value.asp
//https://www.w3schools.com/jsref/event_oninput.asp