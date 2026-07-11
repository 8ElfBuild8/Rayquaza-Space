window.onload = function () {
  const input = document.getElementById("buscador");
  const items = document.querySelectorAll(".item");

  input.addEventListener("input", function () {
    let texto = this.value.toLowerCase();

    items.forEach(item => {
      let match = item.textContent.toLowerCase().includes(texto);
      item.style.display = match ? "" : "none";
    });
  });
};