export default function createNavBar() {
    let navigationBar = document.getElementsByTagName("ul")[0];
    let homeButton = document.createElement("li");
    homeButton.classList.add("homebtn");
    homeButton.textContent = "Home";
    navigationBar.appendChild(homeButton);
    let menuButton = document.createElement("li");
    menuButton.textContent = "Menu";
    menuButton.classList.add("menubtn");
    navigationBar.appendChild(menuButton);
    let aboutButton = document.createElement("li");
    aboutButton.textContent = "About";
    aboutButton.classList.add("aboutbtn");
    navigationBar.appendChild(aboutButton);

}