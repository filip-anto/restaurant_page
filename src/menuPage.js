


export default function menu() {

    class MenuItem {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
        get name() {
            return this._name;
        }
        set name(value) {
            if (value.length < 3) {
                alert("Enter Bigger name")
                return;
            } else {
                this._name = value;
            }
        }
    }
    class Drink extends MenuItem {
        constructor(name, price, size) {
            super(name, price);
            this.size = size;
        }
        drink = () => {
            alert("Cheers!");
        }
    }

    class Food extends MenuItem {
        constructor(name, price) {
            super(name, price);
        }
    }
    let menu = [];
    menu.push(new Food('Pizza', '10'));
    menu.push(new Drink('cola-medium', '2', 'medium'));
    menu.push(new Food('Tacos', '5'));
    menu.push(new Drink('cola-large', '3', 'large'));
    menu.push(new Food('Pizza', '10'));
    menu.push(new Drink('cola-small', '1.5', 'small'));
    menu.push(new Food('Burritos', '8'));

    let menuContainer = document.createElement('div');
    menuContainer.classList.add("menuContainer");
    let menuItem = [];
    let menuProperty = [];
    for (let [index, item] of menu.entries()) {
        console.log(item);
        menuItem.push(document.createElement('div'));
        menuItem[index].classList.add("menuItem");
        for (menuProperty in item) {
            if (typeof (item[menuProperty]) != 'function') {
                let menuProperty2 = document.createElement('div');
                menuProperty2.textContent =item[menuProperty];
                menuItem[index].appendChild(menuProperty2);
                menuContainer.appendChild(menuItem[index]);
            }
        }
    }
    return(menuContainer);
}