function init() {
  let button = document.getElementById('entrybutton');
  let textbox = document.getElementById('entryinput');
  let output = document.getElementById('textoutput');

  function updateContent() {
    output.innerHTML = textbox.value;
    alert("Braeden Weaver: " + textbox.value);
  }

  button.addEventListener('click', updateContent);
}

window.addEventListener('load', init);