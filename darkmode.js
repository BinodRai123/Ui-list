const ToggleDiv = document.querySelector(".toogle-darkmode-whitemode");
const LightMode = ToggleDiv.querySelector(".light-mode");
const DarkMode = ToggleDiv.querySelector(".dark-mode");
const Main = document.querySelector("main");
let count = 0;

const ToggleDetails = [
    {   icon: LightMode,
        display: 'block'
    },
    {
        icon: DarkMode,
        display: 'none'
    }
]

ToggleDiv.addEventListener("click", function(e) {
    //Hiding all the icon first
    ToggleDiv.querySelectorAll("i").forEach(icon => icon.style.display = 'none');
    
    //selecting index, icon and color of the icon
    const Index = count % ToggleDetails.length;
    const Icon = ToggleDetails[Index].icon;
    const Color = Icon.getAttribute("aria-valuetext");
    
    //Changing BackgroundColor and Icon
    Icon.style.display = 'block';
    Main.style.backgroundColor = Color;
    ToggleDiv.parentNode.style.backgroundColor = Color;
    
    //Moving to another icon
    count++;
})