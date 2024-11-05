function room() {
    let person = prompt("Please enter your name:", "Anonymous");
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    text = "Welcome " + person + "!";
  }
  alert(text);
  sessionStorage.setItem('user', person)

}

document.getElementById('1').addEventListener('click', room);
document.getElementById('2').addEventListener('click', room);
document.getElementById('3').addEventListener('click', room);
document.getElementById('4').addEventListener('click', room);
