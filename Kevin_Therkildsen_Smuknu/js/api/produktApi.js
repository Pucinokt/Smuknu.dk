
// Products Start

Promise.all([fetch("https://smuknu.webmcdm.dk/products",

    {
        headers:
        {
            Accept: "application/json"
        }
    })

    // her har jeg lavet et for loop, hvor jeg har valgt at bruge ternary(?) og conditional(:) operator for at tjekke om strengen er tom "". Hvis den er tom "" så fortæller jeg at den skal være tom igen "". Men ellers så skal der være en værdi af "discountInPercent" fra API'en i <p>Spar %</p>. <----- Dette sker EFTER conditional (:)

    .then(function (KT) {
        return KT.json()
    })
    .then(function (KT) {
        let K = "";
        for (let I = 0; I < KT.length; I++) (K +=
            `<div class='Products'>
                <img class='Products-image' src='${KT[I].image}'>${"" == KT[I].discountInPercent ? "" :/* <---- Jeg tjekker om strengen fra id'et discountInPercent er tomt. Hvis dette er TRUE så SKAL strengen være tom "". Efter den tomme streng kommer vores conditional operator, der siger at hvis værdien er FALSE skal tallet fra discountInPercent i REST API'en printes ud i browseren */
                `<div class='Product-Discount'><h1>Spar</h1><p>${KT[I].discountInPercent}%</p></div>`}

             <div class='Products-details'>
                <h3 class='Products-title'>${KT[I].title}</h3>
                <p class='Products-text'>${KT[I].price},00 kr.</p>
            </div>
            </div>`);
        document.querySelector("#Products").innerHTML = K
    }
    ),
]);
// Products End
