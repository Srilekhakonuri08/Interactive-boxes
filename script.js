let selectedBox = null;
let totalPriceEl = document.getElementById("total-price");

// Toggle expand/collapse
document.querySelectorAll(".box").forEach(box => {
  box.addEventListener("click", function(e) {
    if (e.target.tagName.toLowerCase() === "select") return;

    if (selectedBox && selectedBox !== this) {
      selectedBox.classList.remove("active");
    }

    this.classList.toggle("active");
    selectedBox = this.classList.contains("active") ? this : null;
    updateTotal();
  });
});

// Update total price
function updateTotal() {
  if (selectedBox) {
    let price = selectedBox.getAttribute("data-price");
    totalPriceEl.textContent = `$${price}.00 USD`;
  } else {
    totalPriceEl.textContent = "$0.00 USD";
  }
}

// Add to Cart button
document.getElementById("add-to-cart").addEventListener("click", () => {
  if (selectedBox) {
    alert("Added to cart: " + selectedBox.getAttribute("data-name"));
  } else {
    alert("Please select an option first!");
  }
});
