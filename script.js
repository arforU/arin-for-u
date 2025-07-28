window.onload = function () {
  alert("🎀 Selamat datang di Barbie World! 🎀");
};

document.addEventListener("DOMContentLoaded", function () {
  const img = document.querySelector(".barbie-img");
  img.addEventListener("click", function (e) {
    const sparkle = document.createElement("div");
    sparkle.textContent = "✨";
    sparkle.style.position = "absolute";
    sparkle.style.left = e.pageX + "px";
    sparkle.style.top = e.pageY + "px";
    sparkle.style.fontSize = "2rem";
    sparkle.style.pointerEvents = "none";
    sparkle.style.animation = "fadeOut 1s ease-out forwards";
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
  });
});
