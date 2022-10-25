// Featured Products Start

Promise.all([fetch("https://smuknu.webmcdm.dk/products",

{headers:
    {Accept:"application/json"
}
})

// her har jeg lavet et for loop, hvor jeg har valgt at bruge ternary(?) og conditional(:) operator for at tjekke om strengen er tom "". Hvis den er tom "" så fortæller jeg at den skal være tom igen "". Men ellers så skal der være en værdi af "discountInPercent" fra API'en i <p>Spar %</p>. <----- Dette sker EFTER conditional (:)
.then(function(e){
    return e.json()
    })
    .then(function(e){
        let c="";
        for(let t=0; t < e.length; t++)
        !0==e[t].recommended && (c+=
            `<div class='Products'>
                <img class='Products-image' src='${e[t].image}'>${""==e[t].discountInPercent?"":
            `<div class='Product-Discount'><h1>Spar</h1><br><p>${e[t].discountInPercent}%</p></div>`}

             <div class='Products-details'>
                <h3 class='Products-title'>${e[t].title}</h3>
                <p class='Products-text'>${e[t].price},00 kr.</p>
            </div>
            </div>`);
          document.querySelector("#product-list").innerHTML=c
        }
        ),
    ]);
// Featured Products End

