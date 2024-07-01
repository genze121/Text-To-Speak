const textareaInput = document.querySelector(".text-area");
const readButton = document.querySelector(".submit-button");

readButton.addEventListener("click", () => {
  const inputData = textareaInput.value;

  const utterence = new SpeechSynthesisUtterance(inputData);

  const voices = speechSynthesis.getVoices();
  utterence.voice = voices[0];

  speechSynthesis.speak(utterence);
});
