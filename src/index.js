function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings:
      "I saw no Way—The Heavens were stitched, <br> I felt the Columns, <br>The Earth reversed her Hemispheres I, <br> touched the Universe...",
    autoStart: true,
    delay: 75,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#cosmic-poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
