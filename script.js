const textInput = document.querySelector(".text-area");
const spechReadButton = document.querySelector(".submit-button");

spechReadButton.addEventListener("click", () => {
  const inputData = textInput.value;

  const utterence = new SpeechSynthesisUtterance(inputData);

  const voices = speechSynthesis.getVoices();
  utterence.voice = voices[0];

  speechSynthesis.speak(utterence);
});
