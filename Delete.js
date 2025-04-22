const Main = document.querySelector('main');
const DeleteSigns = document.querySelectorAll(".delete-sign");

const deleting = (details) => {
    //Selecting deletesign and Card
    const TargetSign = details.target;
    const TargetCard = TargetSign.closest('.card');

   // Removing from screen
   TargetCard.style.transform = 'scale(0.8)';
   TargetCard.style.opacity = 0;
   setTimeout(() => {
        Main.removeChild(TargetCard);
   }, 250);
}

DeleteSigns.forEach((deleteSign) => deleteSign.addEventListener("click", deleting))