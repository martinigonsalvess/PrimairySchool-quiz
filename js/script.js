//getting all required elements

const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");

// if start quiz button clicked
start_btn.onclick = () => {
  info_box.classList.add("activeInfo");
};

//if exit button click
exit_btn.onclick = () => {
  info_box.classList.remove("activeInfo");
};

//if continue button click
continue_btn.onclick = () => {
  info_box.classList.remove("activeInfo");
  quiz_box.classList.add("activeQuiz");
  showQuestions(4);
};

let que_count = 0;

//getting questions and options from array
function showQuestions(index) {
  const que_text = document.querySelector(".que_text");
  const option_list = document.querySelector(".option_list");
  let que_tag = "<span>" + questions[index].question + "</span>";
  que_text.innerHTML = que_tag;
}
