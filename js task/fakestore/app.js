let show = () => {
    fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => displayProducts(data));

    console.log("data show in Card");
}

function displayProducts(products) {
    // Get the container where you want to display the cards
    var container = document.getElementById("productContainer");

    // Loop through the products and create a card for each
    products.forEach((product) => {
        var card = document.createElement("div");
        card.className = "card";

        // Add product details to the card
        card.innerHTML = `<img src="${product.image}"/> <h6>${product.title}</h6><p>Price: $${product.price}</p>  `;

        // Append the card to the container
        container.appendChild(card);
    });
}