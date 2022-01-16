const span = document.getElementById("span-yazi");
const image = document.getElementById("ust-resim");
const form = document.getElementById("ekle");
const asciText = document.getElementById("asci");
const yemekText = document.getElementById("yemek");
const resimText = document.getElementById("resim");
const tarifText = document.getElementById("tarif");
const cardBody = document.querySelector(".card-body");
const deleteall = document.querySelector("#tumunu-sil");
const search = document.querySelector("#search");


UI.controlDelete();

deleteall.addEventListener("click", clearFood);
search.addEventListener("keyup", ara);
cardBody.addEventListener("click", del);
form.addEventListener("submit", list);
document.addEventListener("DOMContentLoaded", proccess);


function proccess() {
    const list = Storage.controlToStorage();
    UI.addToLocalUI(list);



}


function list(e) {
    const asci = asciText.value;
    const yemek = yemekText.value;
    const resim = resimText.value;
    const tarif = tarifText.value;

    const newfood = new Food(asci, yemek, resim, tarif);
    UI.addToUI(newfood);
    Storage.addToStorage(newfood);
    UI.controlDelete();
    UI.inputDelete(asci, yemek, resim, tarif);
    location.reload();
    e.preventDefault();
}

function del(e) {
    if (e.target.id === "food-delete") {
        const foodName = e.target.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling;
        UI.deleteFood(foodName);
        Storage.deleteFood(foodName.textContent)
    }
}

function clearFood() {
    Storage.clearFood();
}

function ara(){
    let data = search.value.toLowerCase();
    UI.searchToUI(data)
}




























































const width = window.outerWidth;
if (width <= 1005) {
    span.setAttribute("style", "display:none");
}
else {
    image.setAttribute("style", "margin-top: -40px");
}