function onSwitch() {
  document.getElementById('switch').src='img/Switch-on.jpg';
  document.getElementById('switch-button').onclick=offSwitch;
  document.getElementById('switch-button').innerHTML='Turn off the switch'
}
function offSwitch() {
  document.getElementById('switch').src='img/Switch-off.png';
  document.getElementById('switch-button').onclick=onSwitch;
  document.getElementById('switch-button').innerHTML='Turn on the switch';
}