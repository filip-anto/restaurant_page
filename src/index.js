import restaurantInfo from "./pageLoad"
import logo from './logo.png';
import './style.css';
import fontStyle from './my-font.ttf'
import menu from './menuPage';
import createNavBar from './nav';
import about from './about';
createNavBar();

function clear() {
    let e = document.getElementById("content");
    var child = e.lastElementChild;
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}

let buttons = document.getElementsByTagName("li");

buttons[0].addEventListener("click", () => {
    clear();
    document.getElementById("content").appendChild(restaurantInfo());
});
buttons[1].addEventListener("click", () => {
    clear();
    document.getElementById("content").appendChild(menu());
});
buttons[2].addEventListener("click", () => {
    clear();
    document.getElementById("content").appendChild(about());
});


document.getElementById("content").appendChild(restaurantInfo());

