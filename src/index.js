function displayPoem(response) {
  new Typewriter("#poem", {
    strings: [response.data.answer],
    autoStart: true,
    delay: 75,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "d5911530fao54btf00e229ba79929d73";
  let prompt = `User instrucstions:Generate a poem only inspired by the universe, galaxy and cosmos with ${instructionsInput.value}`;
  let context =
    "you are a romantic Poem expert and love to write short poems. Your mission is to generate a 4 line poem, with separate lines <br> and sign at the bottom on the right side with 'Your Cosmic AI Poet'. make sure to follow the user instructions";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a Cosmic poem about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#cosmic-poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
