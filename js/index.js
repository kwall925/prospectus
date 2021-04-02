const init = () => {
  const firstInput = document.querySelector('.addGoal');
  firstInput.onclick = addGoal;
}

const addGoal = () => {
  const goalForm = document.querySelector('.goalForm');
  goalForm.style.visibility = 'visible';
}

window.onload = init;
