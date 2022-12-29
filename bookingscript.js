const submitBtn = document.getElementById("submitBtn");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const numPeople = document.getElementById("number-of-people");

// dropdown
const dropdownBtn = document.getElementById("dropdown-arrow");
const dropdownMenu = document.getElementById("dropdown-menu");
const dropdownTrigger = document.getElementById("dropdown-trigger");
const dropdownItems = document.querySelectorAll(".dropdown__item");
const selectedMeridiem = document.getElementById("selected-meridiem");

minusBtn.onclick = () => changeNumberOfPeople(false);
plusBtn.onclick = () => changeNumberOfPeople(true);

function changeNumberOfPeople(isPlus) {
  let currentNumberOfPeople = parseInt(numPeople.textContent);
  if (isPlus) {
    numPeople.textContent = currentNumberOfPeople + 1;
  } else {
    if (currentNumberOfPeople != 1) {
      numPeople.textContent = currentNumberOfPeople - 1;
    }
  }
}

dropdownTrigger.onclick = () => {
  dropdownMenu.classList.toggle("open");
  dropdownBtn.classList.toggle("open");
};

dropdownItems.forEach((item) => {
  item.onclick = () => {
    selectedMeridiem.textContent = item.children[1].textContent;
    // remove the old checked class
    dropdownItems.forEach((oldItem) => {
      oldItem.children[0].classList.remove("checked");
    });
    // add the checked class to current clicked item
    item.children[0].classList.add("checked");
  };
});
