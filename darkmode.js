const ToggleDiv = document.querySelector(".toogle-darkmode-whitemode");
const LightMode = ToggleDiv.querySelector(".light-mode");
const DarkMode = ToggleDiv.querySelector(".dark-mode");
const Main = document.querySelector("main");

let count = 0;

const ToggleDetails = [
    {
        icon: DarkMode,
        display: 'none',
        color: DarkMode.getAttribute("aria-valuetext")
    },
    {   icon: LightMode,
        display: 'block',
        color: LightMode.getAttribute("aria-valuetext")
    }
]

let Icon = ToggleDiv.addEventListener("click", function(e) {
    //Hiding all the icon first
    HideIcons();
    
    //selecting index, icon and color of the icon
    const Index = count % ToggleDetails.length;
    const { icon , color } = ToggleDetails[Index];
    
    //Changing BackgroundColor and Icon
    icon.style.display = 'block';
    Main.style.backgroundColor = color;
    ToggleDiv.parentNode.style.backgroundColor = color;
    
    //Storing Color in LocalStore to save from Reload
    localStorage.setItem("Color", color);
    localStorage.setItem("index", Index)

    //Moving to another icon
    count++;
})

function HideIcons(){
    ToggleDiv.querySelectorAll("i").forEach(icon => icon.style.display = 'none');
}

window.onload = function(){
    const StoredColor = localStorage.getItem("Color");
    const index = parseInt(localStorage.getItem("index"));

    if(StoredColor && index !== null){
        Main.style.backgroundColor = StoredColor;
        ToggleDiv.parentNode.style.backgroundColor = StoredColor;

        HideIcons();
        
        ToggleDetails[index].icon.style.display = 'block';

        count = index + 1;
    }
    else {
        ToggleDetails[1].icon.style.display = 'block';
    }
}