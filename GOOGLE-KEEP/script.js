const noteInput = document.querySelector(".note-input input");

noteInput.addEventListener("focus", () => {
  document.querySelector(".note-input").style.boxShadow =
    "0 4px 12px rgba(60, 64, 67, 0.45)";
});

noteInput.addEventListener("blur", () => {
  document.querySelector(".note-input").style.boxShadow =
    "0 2px 8px rgba(60, 64, 67, 0.35)";
});