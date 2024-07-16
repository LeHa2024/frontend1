fetch("https://dummyjson.com/products")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    renderProducts(json.products);
  });

function renderProducts(products) {
  const $productList = $(".product-list");

  const html = products
    .map((product) => {
      const productName = product.title;
      const productPrice = product.price;
      const productImage = product.thumbnail;

      return `
            <div class="product">
              <img src="${productImage}" alt="${productName}" />
              <h3>${productName}</h3>
              <p>${productPrice}</p>
            </div>
          `;
    })
    .join("");

  $productList.html(html);
}
