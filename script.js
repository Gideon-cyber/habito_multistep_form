const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");

const progress = document.querySelector(".steps_progress");
const count = document.querySelector(".first-number");
const steps = document.querySelectorAll(".steps");
const back = document.querySelector(".go_back");
const form = document.querySelector("#multi-step-form");

let userInputs = []; // array to store user text inputs
const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const userNumber = document.querySelector("#number");

let registrationData = {}; // object to store all user inputs

const navButton = document.querySelector(".container_nav");
const rightSection = document.querySelector(".container_right");
const topContainer = document.querySelector(".container_right_box_top");
const bottomContainer = document.querySelector(".container_right_box_bottom");

let currentStep = 1;
function showStep(step) {
  // Hide all steps
  for (let i = 0; i < steps.length; i++) {
    steps[i].style.left = "800px";
  }
  // Show the current step
  steps[step - 1].style.left = "0px";
  // Update the current step
  currentStep = step;
}

showStep(currentStep);
function nextStep(step) {
  steps[step - 1].style.left = "-800px";
  steps[step].style.left = "0px";
  progress.style.width = `${((step + 1) / steps.length) * 100}%`;
  count.innerHTML = step + 1;
  //   steps[step + 1].style.left = "0px";
  currentStep = step + 1;
}

function prevStep(step) {
  steps[step - 1].style.left = "800px";
  steps[step - 2].style.left = "0px";
  progress.style.width = `${((step - 1) / steps.length) * 100}%`;
  count.innerHTML = step - 1;
  currentStep = step - 1;
}

const validate = (input) => {
  if (input.value.trim() !== "") {
    nextStep(currentStep);
  }
};

back.addEventListener("click", (event) => {
  prevStep(currentStep);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const yourNeedInputs = document.querySelectorAll('input[name="yourNeed"]');
  let yourNeedValue;
  for (let i = 0; i < yourNeedInputs.length; i++) {
    if (yourNeedInputs[i].checked) {
      yourNeedValue = yourNeedInputs[i].value;
      break;
    }
  }
  const liveInPropertyInputs = document.querySelectorAll(
    'input[name="liveInProperty"]'
  );
  let liveInPropertyValue;
  for (let i = 0; i < liveInPropertyInputs.length; i++) {
    if (liveInPropertyInputs[i].checked) {
      liveInPropertyValue = liveInPropertyInputs[i].value;
      break;
    }
  }

  userInputs.push(userName.value, userEmail.value, userNumber.value);

  registrationData["yourNeed"] = yourNeedValue;
  registrationData["liveInProperty"] = liveInPropertyValue;
  registrationData["userInputs"] = userInputs;

  console.log(registrationData);
});

navButton.addEventListener("click", (event) => {
  rightSection.classList.toggle("hidden");
  topContainer.classList.toggle("hidden");
  bottomContainer.classList.toggle("hidden");
});
