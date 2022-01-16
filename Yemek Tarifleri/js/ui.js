class UI {
    static addToUI(newfood) {
        const cardBody = document.querySelector(".card-body");

        cardBody.innerHTML += `
        <div class="row ara">
        <div class="col-md-5 image">
        <img src="${newfood.image}" style="width: 100%;" class="img-thumbnail" alt="">
    </div>
    <div class="col-md text">
            <small style="color: gray;">${newfood.name}</small>
            <hr>
            <h2>${newfood.food}</h2>
            <br>
            
            <pre> ${newfood.description}</pre>
            <button style="float:right" class = "btn btn-warning" id="food-delete">Yemeği Sil</button>

        </div>
        </div>
        `;
    }

    static addToLocalUI(foods){

        foods.forEach(function(food) {
        const cardBody = document.querySelector(".card-body");
            cardBody.innerHTML += `
        <div class="row ara">
            <div class="col-md-5 image">
                <img src="${food.image}" style="width: 100%;" class="img-thumbnail" alt="">
            </div>
            <div class="col-md text">
                <small style="color: gray;">${food.name}</small>
                <hr>
                <h2>${food.food}</h2>

                <br>
                <pre> ${food.description}
                <button style="float:right" class = "btn btn-warning" id="food-delete">Yemeği Sil</button>
                </pre>
            </div>
        
        </div>
        `;
        });
    }
    static deleteFood(name){
        name.parentElement.parentElement.remove();
    }

    static controlDelete(){
        const tumunusil = document.querySelector("#tumunu-sil");


        if( localStorage.getItem("food") != null){
            tumunusil.setAttribute("style", "display:block");
        }
        else{
            tumunusil.setAttribute("style", "display:none");
        }
    }

    static searchToUI(data){
        const dizi = Storage.controlToStorage();
        
        dizi.forEach((element, index) => {
            const veri = element.food.toLowerCase();

            if (veri.indexOf(data) === -1) {
                console.log("yok");
                const row = document.querySelectorAll(".ara")[index];
                row.setAttribute("style", "display: none !important");
            }
            else{
                const row = document.querySelectorAll(".ara")[index];
                row.setAttribute("style", "display: flex");
                console.log("var");
            }
        });


    }

    static inputDelete(asci, yemek, resim, tarif){
        asci = "";
        yemek = "";
        resim = "";
        tarif = "";
    }
}