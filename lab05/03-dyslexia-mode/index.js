/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

var myStorage = window.localStorage;
if (myStorage.getItem('read_mode') === null) {
  localStorage.setItem('read_mode', '');
}

const toggleDyslexia = () => {
  read_mode = localStorage.getItem('read_mode');
  new_mode = read_mode == '' ? 'dyslexia' : '';
  localStorage.setItem('read_mode', new_mode);
  document.querySelector("body").className = new_mode;
};

document.querySelector('#dyslexia-toggle').addEventListener('click', () => toggleDyslexia());