class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

// items (same as Java)
const items = {
    1: new Item("Coffee Americano", 84.5),
    2: new Item("Cappuccino", 199.9),
    3: new Item("Caramel Macchiato", 120.5),
    4: new Item("Mocha", 240.5),
    5: new Item("Matcha Coffee", 150.5),
    6: new Item("Ham and Cheese", 200.0),
    7: new Item("Banana Bread", 250.77),
    8: new Item("Chocolate Chip Cookie", 199.58),
    9: new Item("Blueberry Cheesecake", 300.2),
    10: new Item("Chicken Pesto Sandwich", 289.0)
};

function processOrder() {
    let input = document.getElementById("orders").value;
    let payment = document.getElementById("payment").value;

    let orders = input.split(",").map(Number);
    let total = 0;
    let receipt = "<h3>☕Jc coffee shop☕</h3><h3>🧾 Receipt</h3>";

    orders.forEach(num => {
        if (items[num]) {
            receipt += `<div class="receipt-item"> <span>${items[num].name}</span><span>₱${items[num].price}</span></div>`;
            total += items[num].price;
        } else {
            receipt += "Invalid item<br>";
        }
    });

    receipt += "<hr>";
    receipt += `Total: ₱${total}<br>`;

    switch(payment) {
        case "1":
            receipt += "Payment: E-wallet<br>";
            receipt += "Send to: 09562271169";
            break;
        case "2":
            let pin = prompt("Enter PIN:");
            receipt += "Payment: Card<br>";
            break;
        case "3":
            receipt += "Payment: Cash<br>";
            break;
    }

    receipt += "<br>Thank you for ordering! ☕";
    receipt += "<br>Come again to our humble coffee shop!";

    document.getElementById("output").innerHTML = receipt;
}