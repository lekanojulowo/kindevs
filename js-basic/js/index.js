const signUpForm = document.querySelector('#signUpForm');

signUpForm.addEventListener('submit', registerParticipant);


function registerParticipant(event) {
  event.preventDefault();
  const fullName = document.querySelector('#fullName')
    // console.log(fullName)
    // fullName.remove()
  const olDisplay = document.querySelector('#olDisplay')
  const tableDisplay = document.querySelector('#tableDisplay')
  olDisplay.innerHTML = `<li>${fullName.value}</li>`
  tableDisplay.innerHTML = `
    <tr>
      <td>1</td>
      <td>${fullName.value}</td>
    </tr>
  `

  // console.log(event);
}








// document.write("Hello World");
// alert("Welcome to JS")
// document.querySelector('.fullName')
// document.querySelectorAll('p')