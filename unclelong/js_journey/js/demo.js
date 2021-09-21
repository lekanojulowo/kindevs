const signUpform = document.querySelector('#signUpform');
signUpform.addEventListener('submit', registerParticipant);

function registerParticipant(event) {

    event.preventDefault();
    const fullname = document.querySelector('#fullname')
    const olDisplay = document.querySelector('#olDisplay')
    const tableDisplay = document.querySelector('#tableDisplay')
    olDisplay.innerHTML = ` <li>${fullname.value}</li>`
    tableDisplay.innerHTML = `
    < tr >
        <td >1< /td> 
        <td>${fullname.value} < /td>
         </tr>
         `
        // console.log(event);
}