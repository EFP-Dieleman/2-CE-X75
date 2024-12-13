"use strict";

document.getElementById('colorizer').addEventListener('submit', function (event) {

  let text = document.getElementById('text').value;
  let result = document.getElementById('colorized');
  let colors = ['color_1', 'color_2', 'color_3'];

  if (result.firstChild) {
    removeChildren(result);
  }

  for(let i=0; i<text.length; ++i){
    result.appendChild(makeSpan(text.charAt(i), colors[i%3]));
  }

  event.preventDefault();
});


const makeSpan = (content, attr_class) => {
  let elt = document.createElement('span');
  elt.className = attr_class;
  elt.appendChild(document.createTextNode(content));

  return elt;
}

const removeChildren = (parent) => {
  while (parent.lastChild) {
      parent.removeChild(parent.lastChild);
  }
};
