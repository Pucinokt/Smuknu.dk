// Featured Products Start
Promise.all([
    fetch('https://smuknu.webmcdm.dk/products', {
        headers: {
            Accept: 'application/json'
        }
    })
    .then(function(res) {
        return res.json();
    })
    .then(function(ProductData) {
            let ProductPics = "";
            for (let i = 0; i < ProductData.length; i++) {
                if(ProductData[i].recommended == true){
                ProductPics += `<div class='Products'>
                <img class='Products-image' src='${ProductData[i].image}'>
                <div class='Product-Discount'></div>
                <div class='Products-details'>
                  <h3 class='Products-title'>${ProductData[i].title}</h3>
                  <p class='Products-text'>${ProductData[i].price}<span>,00 kr</span></p>
                </div>
                </a>
            </div>`
        }
    }
            document.getElementById("product-list").innerHTML = ProductPics;
        }
    ),
]);
// Featured Products End
