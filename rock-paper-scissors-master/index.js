var rules = {
  spock: ["scissors", "rock"],
  scissors: ["paper", "lizard"],
  paper: ["rock", "spock"],
  rock: ["lizard", "scissors"],
  lizard: ["spock", "paper"],
};
var scoreNum = 0;

function hideModal() {
  $(".modal").addClass("hide");
}

function selectPick(value) {
  $("#galleryContainer").removeClass("show");
  $("#galleryContainer").addClass("hide");

  setTimeout(() => {
    $("#yPickImg img").addClass(value);
    $("#yPickImg img").attr("src", "images/icon-" + value + ".svg");
    $("#result").addClass("hide");
    $("#battle").removeClass("hide");
    $("#battle").addClass("show");
    let all = Object.keys(rules);
    let hPick = all[Math.floor(Math.random() * all.length)];
    setTimeout(() => {
      $("#result").removeClass("hide");
      $("#hPickImg span").addClass("hide");
      $("#hPickImg img").removeClass("hide");
      $("#hPickImg img").addClass(hPick);
      $("#hPickImg img").attr("src", "images/icon-" + hPick + ".svg");
      if (hPick === value) {
        $("#resultText").text("DRAW");
      } else if (rules[value].includes(hPick)) {
        scoreNum++;
        $("#resultText").text("YOU WIN");
        $("#scoreNum").text(scoreNum);
        $("#yPickImg img").addClass("win");
      } else {
        scoreNum--;
        $("#resultText").text("YOU LOSE");
        $("#scoreNum").text(scoreNum);
        $("#hPickImg img").addClass("win");
      }
    }, 1000);
  }, 500);
}

function playagain() {
  $("#battle").removeClass("show");
  $("#battle").addClass("hide");
  $("#galleryContainer").removeClass("hide");
  $("#galleryContainer").addClass("show");
  $("#yPickImg img").removeClass();
  $("#yPickImg img").addClass("circleBorder");
  $("#yPickImg img").attr("src", "");
  $("#hPickImg img").removeClass();
  $("#hPickImg img").addClass("circleBorder hide");
  $("#hPickImg img").attr("src", "");
  $("#hPickImg span").removeClass("hide");
  $("#result").addClass("hide");
  $("#resultText").text("");
  $("#yPickImg img").removeClass("win");
  $("#hPickImg img").removeClass("win");
}

$(document).ready(async function () {
  $(".modal .modalContent").click((event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    return;
  });
  $(".modal .close").click(() => {
    hideModal();
  });
  $(".modal").click(() => {
    hideModal();
  });
  $("#ruleBtn").click(() => {
    $(".modal").removeClass("hide");
  });
});
