const makeBigger = () => {
   h1_elem = document.getElementsByTagName('h1');
   h1_style = window.getComputedStyle(h1_elem[0]);
   h1_font = parseFloat(h1_style.fontSize);
   h1_elem[0].style.fontSize = `${h1_font+1}px`;
   
   content_elem = document.getElementsByClassName('content');
   content_style = window.getComputedStyle(content_elem[0]);
   content_font = parseFloat(content_style.fontSize);
   content_elem[0].style.fontSize = `${content_font+1}px`;
};

const makeSmaller = () => {
   h1_elem = document.getElementsByTagName('h1');
   h1_style = window.getComputedStyle(h1_elem[0]);
   h1_font = parseFloat(h1_style.fontSize);
   h1_elem[0].style.fontSize = `${h1_font-1}px`;

   content_elem = document.getElementsByClassName('content');
   content_style = window.getComputedStyle(content_elem[0]);
   content_font = parseFloat(content_style.fontSize);
   content_elem[0].style.fontSize = `${content_font-1}px`;
};


document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);
