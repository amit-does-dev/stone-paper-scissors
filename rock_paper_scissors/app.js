document.documentElement.style.zoom = "80%";

let after_clicking_stone_win = document.getElementById(
  "after-clicking-stone-win"
);
let after_clicking_paper_win = document.getElementById(
  "after-clicking-paper-win"
);
let after_clicking_scissors_win = document.getElementById(
  "after-clicking-scissors-win"
);
let after_clicking_stone_lost = document.getElementById(
  "after-clicking-stone-lost"
);
let after_clicking_paper_lost = document.getElementById(
  "after-clicking-paper-lost"
);
let after_clicking_scissors_lost = document.getElementById(
  "after-clicking-scissors-lost"
);
let after_clicking_stone_tie = document.getElementById(
  "after-clicking-stone-tie"
);
let after_clicking_paper_tie = document.getElementById(
  "after-clicking-paper-tie"
);
let after_clicking_scissors_tie = document.getElementById(
  "after-clicking-scissors-tie"
);

let second_line_of_the_main_page = document.getElementById(
  "second-line-of-the-main-page"
);

after_clicking_stone_win.style.display = "none";
after_clicking_paper_win.style.display = "none";
after_clicking_scissors_win.style.display = "none";
after_clicking_stone_lost.style.display = "none";
after_clicking_paper_lost.style.display = "none";
after_clicking_scissors_lost.style.display = "none";
after_clicking_stone_tie.style.display = "none";
after_clicking_paper_tie.style.display = "none";
after_clicking_scissors_tie.style.display = "none";

let rockSign = document.querySelector("#rockSign");
let paperSign = document.querySelector("#paperSign");
let scissorsSign = document.querySelector("#scissorsSign");
let game_rules = document.querySelectorAll("#rules");

let game_rules_part = document.getElementById("game-rules-part");
let x = document.getElementById("x");

x.addEventListener("click", function () {
  game_rules_part.style.display = "none";
});

// code to generate PC Pick value

function getRandomValue() {
  let values = ["stone", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
}

let pc_pick = getRandomValue();

let play_again_buttons = document.querySelectorAll("#play-again-button");

// adding hover effect
[rockSign, paperSign, scissorsSign, x, ...play_again_buttons, ...game_rules].forEach(function (
  element
) {
  element.addEventListener("mouseenter", function () {
    element.style.cursor = "pointer";
  });

  element.addEventListener("mouseleave", function () {
    element.style.cursor = "default";
  });
});

// adding functionality to the score board

let computer_score = document.querySelector("#score_Computer span");
let your_score = document.querySelector("#score_Yourscore span");


// adding functionality to the next button 
let next_button = document.querySelectorAll('#next');
next_button.forEach(function(button) {
  button.style.display = "none";
});





// when we click on rock

rockSign.addEventListener("click", function () {
  handleRockClick(pc_pick);
});

function handleRockClick(pc_pick) {
  if (pc_pick == "scissors") {
    after_clicking_stone_win.style.removeProperty("display");
    second_line_of_the_main_page.style.display = "none";
    let currentValue = parseInt(your_score.innerText);
    let newValue = currentValue + 1;
    your_score.innerText = newValue;
  } else if (pc_pick == "paper") {
    after_clicking_stone_lost.style.removeProperty("display");
    second_line_of_the_main_page.style.display = "none";
    let currentValue = parseInt(computer_score.innerText);
    let newValue = currentValue + 1;
    computer_score.innerText = newValue;
  } else {
    after_clicking_stone_tie.style.removeProperty("display");
    second_line_of_the_main_page.style.display = "none";
  }
  let your_current_score= parseInt(your_score.innerText);
  let computer_current_score = parseInt(computer_score.innerText);
  if (computer_current_score < your_current_score) {
    next_button.forEach(function(button) {
      button.style.removeProperty("display");
    });
  }
}

// when we click paper

paperSign.addEventListener("click", function () {
  handlePaperClick(pc_pick);
});

function handlePaperClick(pc_pick) {
  if (pc_pick == "stone") {
    after_clicking_paper_win.style.removeProperty("display");
    second_line_of_the_main_page.style.display = "none";
    let currentValue = parseInt(your_score.innerText);
    let newValue = currentValue + 1;
    your_score.innerText = newValue;
  } else if (pc_pick == "scissors") {
    after_clicking_paper_lost.style.removeProperty("display");
    second_line_of_the_main_page.style.display = "none";
    let currentValue = parseInt(computer_score.innerText);
    let newValue = currentValue + 1;
    computer_score.innerText = newValue;
  } else {
    after_clicking_paper_tie.style.removeProperty("display");
    second_line_of_the_main_page.style.display = "none";
  }
  let your_current_score= parseInt(your_score.innerText);
  let computer_current_score = parseInt(computer_score.innerText);
  if (computer_current_score < your_current_score) {
    next_button.forEach(function(button) {
      button.style.removeProperty("display");
    });
  }
}

// when we click on scissors

scissorsSign.addEventListener("click", function () {
  handleScissorsClick(pc_pick);
});

function handleScissorsClick(pc_pick) {
  if (pc_pick == "paper") {
    after_clicking_scissors_win.style.removeProperty("display");
    second_line_of_the_main_page.style.display = "none";
    let currentValue = parseInt(your_score.innerText);
    let newValue = currentValue + 1;
    your_score.innerText = newValue;
  } else if (pc_pick == "stone") {
    after_clicking_scissors_lost.style.removeProperty("display");
    second_line_of_the_main_page.style.display = "none";
    let currentValue = parseInt(computer_score.innerText);
    let newValue = currentValue + 1;
    computer_score.innerText = newValue;
  } else {
    after_clicking_scissors_tie.style.removeProperty("display");
    second_line_of_the_main_page.style.display = "none";
  }
  let your_current_score= parseInt(your_score.innerText);
  let computer_current_score = parseInt(computer_score.innerText);
  if (computer_current_score < your_current_score) {
    next_button.forEach(function(button) {
      button.style.removeProperty("display");
    });
  }
}

// play again button and rules button functionality

// let play_again_buttons = document.querySelectorAll('#play-again-button');

[...play_again_buttons, ...game_rules].forEach(function (button) {
  button.addEventListener("click", function () {
    after_clicking_stone_win.style.display = "none";
    after_clicking_paper_win.style.display = "none";
    after_clicking_scissors_win.style.display = "none";
    after_clicking_stone_lost.style.display = "none";
    after_clicking_paper_lost.style.display = "none";
    after_clicking_scissors_lost.style.display = "none";
    after_clicking_stone_tie.style.display = "none";
    after_clicking_paper_tie.style.display = "none";
    after_clicking_scissors_tie.style.display = "none";
    second_line_of_the_main_page.style.removeProperty("display");
    pc_pick = getRandomValue();
    game_rules_part.style.removeProperty("display");
    next_button.style.display="none";
  });
});


