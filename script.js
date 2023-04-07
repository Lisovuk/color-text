let wrapper = document.getElementById('wrapper');
let text = document.getElementById('text');


wrapper.addEventListener('click', (e) => {
   if (e.target.tagName != 'DIV') {
      return;
   }
   else  {
      text.style.color = e.target.dataset.color;
   }
});
