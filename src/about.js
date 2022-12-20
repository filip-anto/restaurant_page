export default function about() {
    let aboutContainer= document.createElement("div");
    let aboutParagraph = document.createElement("p");
    aboutParagraph.textContent = "Located near the port of the city, our restaurant is the best choice for people who don't want to eat fish by the sea. Enjoy your evening steak while staring at the ocean.";
    aboutContainer.appendChild(aboutParagraph);
    let aboutPhone=document.createElement("p");
    aboutPhone.textContent="For a good time call: 8675309";
    aboutContainer.appendChild(aboutPhone);
    return (aboutContainer);
}