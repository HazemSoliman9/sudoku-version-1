const numberContainer = document.querySelector(".number-container");
const container = document.querySelector(".container");
const selectedValue = document.getElementById("selected-value");
const boxes = document.querySelectorAll(".box");
let numvalue = 1;
//47 missing values
let correctAnswers = 0;
const board_1 =
  "37.6..5.8..8.9.7.349.....6....7.5..1.2..8..5.1..9.6....8.....155.1.6.8..2.7..1.36";
const board_1_ANS =
  "372614598618592743495378162869745321724183659153926487986437215531269874247851936";

//changes the selected number value by choosing from the number container
numberContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("number")) {
    numvalue = +e.target.getAttribute("value");
    //   console.log(numvalue);
    selectedValue.innerText = numvalue;
    //  changeSelectedValue(numvalue);
  }
});

//gives every box tile an id
function giveID() {
  for (let i = 0; i < 81; i++) {
    boxes[i].id = i;
  }
}
giveID();

//populate grid with generated numbers
function generateBoard() {
  for (let i = 0; i < 81; i++) {
    var tile = document.getElementById(i);
    if (board_1.charAt(i) == ".") {
      tile.textContent = "";
    } else {
      tile.textContent = board_1.charAt(i);
      tile.classList.add("dont-replace");
    }
  }
}
generateBoard();

container.addEventListener("click", function (e) {
  if (!e.target.classList.contains("dont-replace")) {
    e.target.innerText = +numvalue;
    if (numvalue == board_1_ANS.charAt(e.target.id)) {
      e.target.classList.remove("wrong-answer");
      e.target.classList.add("correct-answer");
      correctAnswers++;
      if (correctAnswers == 47) {
        alert("AMAZING JOB YOU WIN");
      }
    } else if (e.target.classList.contains("correct-answer")) {
      correctAnswers--;
      e.target.classList.remove("correct-answer");
      e.target.classList.add("wrong-answer");
    }
  }
});
