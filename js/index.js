const init = () => {
  const firstInput = document.querySelector('.addGoal');
  firstInput.onclick = addGoal;
}

const addGoal = () => {
  const goalTitle = document.getElementById('goalTitle');
  const userText = document.getElementById('userInp').value;
  document.querySelector('nav').style.opacity = 0.2;
  // document.querySelector('#wrapper').style.opacity = 0.2;
  goalTitle.innerHTML = userText;
  const goalForm = document.querySelector('.goalForm');
  goalForm.style.visibility = 'visible';
}

window.onload = init;
