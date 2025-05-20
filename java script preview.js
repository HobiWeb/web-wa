window.onload = function () {
  const data = JSON.parse(localStorage.getItem("pilihanKasur"));

  if (data) {
    document.getElementById("base-material").value = data.baseMaterial || "";
    document.getElementById("support-layer").value = data.supportLayer || "";
    document.getElementById("comfort-layer").value = data.comfortLayer || "";
    document.getElementById("extra-layer").value = data.layerLast || "";
    document.getElementById("finishing").value = data.additionalLayer || "";
    document.getElementById("size").value = data.size || "";
  } else {
    console.warn("Tidak ada data kasur di localStorage.");
  }

  const totalPrice = localStorage.getItem("totalPrice");
  if (totalPrice) {
    const totalPriceInput = document.getElementById("total-price");
    if (totalPriceInput) {
      totalPriceInput.value = totalPrice;
    }
  }
};


let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("hidden", i !== index);
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(slideIndex);
});
