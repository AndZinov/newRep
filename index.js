import "./index.css";
import JS_IMG from './asset/james-harrison-vpOeXr5wmR4-unsplash.jpg';


console.log('Hello world')

const jsIMG = document.createElement('img');
jsIMG.className = 'js-img';
jsIMG.src = JS_IMG;
const h1element = document.createElement('h2');
h1element.textContent = 'I lovessss JavaScript';




document.body.append(h1element,jsIMG);