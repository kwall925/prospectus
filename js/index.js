const init = () => {
  //enable form functionality
  const firstInput = document.querySelector('.addGoal');
  firstInput.onclick = addGoal;
  //enable functionality for closing form
  const closer = document.querySelector('.close');
  closer.onclick = close;
}

window.onload = init;

const addGoal = () => {
  const userText = document.getElementById('userInp');
  if (userText.value.length > 0){
    const goalTitle = document.getElementById('goalTitle');
    document.querySelector('nav').style.opacity = 0.2;
    goalTitle.innerHTML = userText.value;
    const goalForm = document.querySelector('.goalForm');
    goalForm.style.visibility = 'visible';
    const goalsList = document.getElementById('newGoal');
    goalsList.insertAdjacentHTML('afterend', `<div id='list'><li class='li'>${userText.value}</li><img src='images/trash.svg' id='trash'></div>`);
    userText.value = '';
    //enable functionality for deleting goal
    const trash = document.getElementById('trash');
    trash.addEventListener("click", function() {deleteItem(trash);});
    //edge case for no text entered
  } else window.alert("please enter a goal");
}

const close = () => {
  const goalForm = document.querySelector('.goalForm');
  goalForm.style.visibility = 'hidden';
  document.querySelector('nav').style.opacity = 1;
}

const deleteItem = (el) => {
  const element = el;
  element.parentNode.remove();
}
