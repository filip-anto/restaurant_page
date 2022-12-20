import Logo from './logo.png';

export default function restaurantInfo(){
    let containerElement= document.createElement("div");
    containerElement.classList.add("restaurantInfo");
    containerElement.appendChild(restName());
    containerElement.appendChild(restDescription());
    containerElement.appendChild(restLogo());
    return (containerElement)
}
function restName(){ 
    let restaurantName = document.createElement("h1");
    restaurantName.innerHTML = "Our lovely restaurant";
    return(restaurantName);
}

const restDescription = () => { 
    let restaurantDescription = document.createElement("h3");
    restaurantDescription.innerHTML = "This is an example of a restaurant that aims to deliver different menus to you!";
    return(restaurantDescription);
}

const restLogo = () => { 
    const myLogo = new Image();
    myLogo.src = Logo;
    return(myLogo);
}