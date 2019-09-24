import _ from 'lodash';
import './style.css';
import Cat from './cat.jpg';
import Data from './data.xml';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const cat = new Image();
  cat.src = Cat;
  
  element.appendChild(cat);

  console.log(Data);
  
  return element;
}

document.body.appendChild(component());