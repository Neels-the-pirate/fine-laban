let selectedItem = "";
let selectedPrice = 0;
let selectedImage = "";
let quantity = 1;

const VENDOR_PHONE = "919876543210";

// --- Menu View Toggle ---
function toggleMenu() {
    const hiddenSection = document.getElementById('moreMenuSection');
    const toggleBtn = document.getElementById('toggleMenuBtn');

    if (!hiddenSection || !toggleBtn) return;

    if (hiddenSection.classList.contains('d-none')) {
        hiddenSection.classList.remove('d-none');
        toggleBtn.innerHTML = 'Show Less <i class="fas fa-chevron-up ml-2"></i>';
    } else {
        hiddenSection.classList.add('d-none');
        toggleBtn.innerHTML = 'View All Menu <i class="fas fa-chevron-down ml-2"></i>';
    }
}

// --- Order Modal Logic ---
function openOrderModal(name, price, image) {
    selectedItem = name;
    selectedPrice = price;
    selectedImage = image;
    quantity = 1;

    document.getElementById("modalTitle").innerText = name;
    document.getElementById("modalPrice").innerText = "₹" + price;
    document.getElementById("modalImage").src = image;

    document.getElementById("qty").innerText = quantity;
    document.getElementById("totalPrice").innerText = price;

    document.getElementById("orderModal").style.display = "flex";
}

function increaseQty() {
    quantity++;
    updateTotal();
}

function decreaseQty() {
    if (quantity > 1) {
        quantity--;
        updateTotal();
    }
}

function updateTotal() {
    document.getElementById("qty").innerText = quantity;
    document.getElementById("totalPrice").innerText = selectedPrice * quantity;
}

function resetOrderForm() {
    document.getElementById("customerName").value = "";
    document.getElementById("customerPhone").value = "";
    document.getElementById("customerAddress").value = "";
    document.getElementById("customerNote").value = "";
}

function closeModal() {
    document.getElementById("orderModal").style.display = "none";
    resetOrderForm();
}

// Close modal when tapping/clicking backdrop
window.addEventListener("click", function(event) {
    const modal = document.getElementById("orderModal");
    if (event.target === modal) {
        closeModal();
    }
});

// --- WhatsApp Dispatch ---
function sendWhatsApp() {
    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();
    const address = document.getElementById("customerAddress").value.trim();
    const note = document.getElementById("customerNote").value.trim();

    if (!name || !phone || !address) {
        alert("Please fill in your name, phone number, and delivery address.");
        return;
    }

    const total = selectedPrice * quantity;

    const message = 
`🍰 Fine Laban

Customer : ${name}
Phone : ${phone}
Address : ${address}

Dessert : ${selectedItem}
Price : ₹${selectedPrice}
Quantity : ${quantity}
Total : ₹${total}
${note ? `Special Note : ${note}\n` : ""}
Please confirm availability.

Thank you.`;

    const url = `https://wa.me/${VENDOR_PHONE}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    closeModal();
}
