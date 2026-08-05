let selectedItem = "";
let selectedPrice = 0;
let selectedImage = "";
let quantity = 1;


function orderItem(itemName, price) {

    const phone = "917909191778"; // உங்கள் WhatsApp Number

    const message =
`🍰 Fine Laban

Hello!

I would like to order.

Dessert : ${itemName}

Price : ₹${price}

Quantity : 1

Please confirm availability.

Thank you.`;

    const url =
`https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url,"_blank");

}
function openOrderModal(name, price, image) {

    selectedItem = name;
    selectedPrice = price;
    selectedImage = image;
    quantity = 1;

    document.getElementById("modalTitle").innerHTML = name;
    document.getElementById("modalPrice").innerHTML = "₹" + price;
    document.getElementById("modalImage").src = image;

    document.getElementById("qty").innerHTML = quantity;
    document.getElementById("totalPrice").innerHTML = price;

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

    document.getElementById("qty").innerHTML = quantity;

    document.getElementById("totalPrice").innerHTML = selectedPrice * quantity;

}

function closeModal() {

    document.getElementById("orderModal").style.display = "none";

}
function sendWhatsApp() {

    const phone = "917909191778"; // உங்கள் WhatsApp Number

    const total = selectedPrice * quantity;

    const message =
`🍰 Dessert House

Hello!

I would like to order.

Dessert : ${selectedItem}

Price : ₹${selectedPrice}

Quantity : ${quantity}

Total : ₹${total}

Please confirm availability.

Thank you.`;

    const url =
`https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

}