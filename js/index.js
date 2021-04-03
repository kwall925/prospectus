const init = () => {
  //enable form functionality
  const firstInput = document.querySelector('.addGoal');
  firstInput.onclick = addGoal;
  //enable functionality for closing form
  const closer = document.querySelector('.close');
  closer.onclick = close;
}


//YOUVE GOTTA PAY ATTENTION TO THE ORDER HERE I THINK THATS WHY DELETE FUNCTION NOT WORKING

const addGoal = () => {
  const userText = document.getElementById('userInp');
  if (userText.value.length > 0){
    const goalTitle = document.getElementById('goalTitle');
    document.querySelector('nav').style.opacity = 0.2;

    // document.querySelector('#wrapper').style.opacity = 0.2;
    goalTitle.innerHTML = userText.value;
    const goalForm = document.querySelector('.goalForm');
    goalForm.style.visibility = 'visible';
    const goalsList = document.getElementById('newGoal');
    goalsList.insertAdjacentHTML('afterend', `<div id='list'><li class='li'>${userText.value}</li><img src='images/trash.svg' id='trash'></div>`);

    //enable functionality for deleting goal
    const trash = document.getElementById('trash');
    console.log(trash)
    trash.addEventListener("click", function() {deleteItem(trash);});
    //edge case for no goal entered
  } else window.alert("no text bitch");
  userText.value = '';
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

window.onload = init;
