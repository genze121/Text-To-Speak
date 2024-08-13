const textInput = document.querySelector(".text-area");
const speechReadButton = document.querySelector(".submit-button");

speechReadButton.addEventListener("click", () => {
  const inputData = textInput.value;
  const utterence = new SpeechSynthesisUtterance(inputData);
  const voices = speechSynthesis.getVoices();
  utterence.voice = voices[0];
  speechSynthesis.speak(utterence);
});