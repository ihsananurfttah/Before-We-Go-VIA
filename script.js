const envelope =
document.getElementById("envelope");

const paper =
document.getElementById("paper");

const envelopeContainer =
document.getElementById("envelope-container");

const letterContainer =
document.getElementById("letter-container");

envelope.addEventListener("click", () => {

    envelope.classList.add("open");

});

paper.addEventListener("click", (e) => {

    e.stopPropagation();

    envelopeContainer.style.display = "none";

    letterContainer.style.display = "flex";

});
