const textInput = document.querySelector(".text-area");
const sppechReadButton = document.querySelector(".submit-button");

sppechReadButton.addEventListener("click", () => {
  const inputData = textInput.value;

  const utterence = new SpeechSynthesisUtterance(inputData);

  const voices = speechSynthesis.getVoices();
  utterence.voice = voices[0];

  speechSynthesis.speak(utterence);
});
