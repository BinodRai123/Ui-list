const ToggleDiv = document.querySelector(".toogle-darkmode-whitemode");
const Main = document.querySelector("main");


ToggleDiv.addEventListener("click", function(e) {
    let AllIcons = this.querySelectorAll("i");
    AllIcons.forEach(icon => {
        if(icon.style.display === 'none') {
             icon.style.display = 'block';
             Main.style.backgroundColor = `${icon.getAttribute("aria-valuetext")}`
             ToggleDiv.parentNode.style.backgroundColor = `${icon.getAttribute("aria-valuetext")}`
             
        }
        else icon.style.display = 'none';
    });

    AllIcons = null;
})