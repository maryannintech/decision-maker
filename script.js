const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent form from submitting
  const resultSpace = document.querySelector(".result");

  const optionsInput = document.getElementById("options");
  const optionsChoices = optionsInput.value.split(",");

  const randomChoices =
    optionsChoices[Math.floor(Math.random() * optionsChoices.length)];

  resultSpace.textContent = `We suggest you choose: ${randomChoices}`;
});
