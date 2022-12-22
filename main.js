const emailButton= document.getElementById('email')
const emailLog = document.getElementById('deskTopMenu');

let display = 1;

emailButton.addEventListener('click', twirlDeskTopMenu);

function twirlDeskTopMenu() {
  if (display === 1) {
    emailLog.style.display= 'block';
    return display = 2;
  }else{
    emailLog.style.display= 'none';
    return display = 1
  }
}