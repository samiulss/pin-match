Array.from(
  document.getElementsByTagName("button")
)
.forEach(
  (button) => {
    button.addEventListener("click", handler)
  }
)
function handler(event) {
  const pinDisplay = document.getElementById("display-1st");
  const key = event.target.innerText;
  const display = document.getElementById("display-2nd");

  switch (pinDisplay, key) {
    case "C":
      display.value = "";
      break;

    case "Generate Pin":
      const randomNmbr = Math.round(Math.random()*10000);
      const addString = randomNmbr + "";
      if (addString.length == 4) {
        pinDisplay.value = randomNmbr;
      }
      else{
        pinDisplay.value = 5814;
      }
      break

  case "←":
    display.value = display.value.slice(0, -1);
    break
  
  case "Submit":
    const value = document.getElementById("display-1st").value;
    const value2 = document.getElementById("display-2nd").value;

    if (value == value2) {
      document.getElementById("match").style.display = "block";
      document.getElementById("not-match").style.display = "none";
      document.getElementById("chance-left").style.display = "none";
      liveLeftN = 4;
    }
    else{
      document.getElementById("not-match").style.display = "block";
      document.getElementById("match").style.display = "none";
      document.getElementById("chance-left").style.display = "block";
      let worngPin = onClick();
      document.getElementById("live-left").innerHTML = worngPin;
      if (worngPin == 0) {
        document.getElementById("submit-btn").disabled = true;
        document.getElementById("display-2nd").disabled = true;
        document.getElementById("display-2nd").value = "";
      }
    }
    if (value2 == "") {
      document.getElementById("display-2nd").value = "Please enter your pin";
      document.getElementById("match").style.display = "none";
    }
    break

    default:
      
      display.value += key;
      break;
  }
}
const liveLeft = document.getElementById("live-left").innerText;
let liveLeftN = parseFloat(liveLeft);
    function onClick() {
    liveLeftN += -1;
    return liveLeftN;
}
      