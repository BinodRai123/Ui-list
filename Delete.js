import { changePanel } from './tab.js';

const Main = document.querySelector('main');
const DeleteSigns = document.querySelectorAll(".delete-sign");
const AddButton = document.querySelector(".add-button");
const StoreDeletedCards = [];

const deleting = (details) => {
    //Selecting deletesign and Card
    const TargetSign = details.target;
    const TargetCard = TargetSign.closest('.card');

    //Adding the removing card into storing Array
    StoreDeletedCards.push(TargetCard.outerHTML);

    //animating before removing for user experience
    TargetCard.style.animation = 'deleteAnimation 0.3s ease forwards';

    // Removing from screen after 2.5 milisecond
   setTimeout(() => {
        Main.removeChild(TargetCard);
   }, 300);
}

const AddingCard = () => {
   if(StoreDeletedCards.length > 0){
      const cardHTML = StoreDeletedCards.splice(0, 1)[0];
      Main.insertAdjacentHTML('beforeend', cardHTML);

      //-- Restoring the delete and tab list feature --//;

      //Selecting the last element 
      const newCard = Main.lastElementChild;
      newCard.style.animation = 'append 0.3s ease forwards';

      //Selecting delete and tab list from the card
      const newDeleteSign = newCard.querySelector('.delete-sign');
      const Tab = newCard.querySelectorAll(".tab-list_dot");

      //using event listener like we did before by importing
      newDeleteSign.addEventListener("click", deleting);
      Tab.forEach((Tab) => Tab.addEventListener("click", changePanel));
   }
};


DeleteSigns.forEach((deleteSign) => deleteSign.addEventListener("click", deleting))

AddButton.addEventListener("click", AddingCard);