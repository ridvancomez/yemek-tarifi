class Storage{
    static controlToStorage(){
        let element;
        if(localStorage.getItem("food") === null){
            element = [];
        }
        else{
            element = JSON.parse(localStorage.getItem("food"));
        }
        return element;
    }

    static addToStorage(foods){
        const food = Storage.controlToStorage();
        food.push(foods);
        localStorage.setItem("food", JSON.stringify(food));
    }

    static deleteFood(foodName){
        const proccess = Storage.controlToStorage();

        proccess.forEach((element, index) => {
            if(element.food === foodName){
                proccess.splice(index,1);
            }
        });
        localStorage.setItem("food", JSON.stringify(proccess));
    }

    static clearFood(){
        localStorage.removeItem("food");
        location.reload();
    }
}