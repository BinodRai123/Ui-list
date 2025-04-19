const Main = document.querySelector('main');
const DeleteSigns = document.querySelectorAll(".delete-sign");

const deleting = (details) => {
    //Selecting deletesign and Card
    const TargetSign = details.target;
    const TargetCard = TargetSign.closest('.card');

   // Removing from screen
   Main.removeChild(TargetCard);
}

DeleteSigns.forEach((deleteSign) => deleteSign.addEventListener("click", deleting))