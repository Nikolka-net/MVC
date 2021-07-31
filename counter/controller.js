import model from "./model.js";
import view from "./view.js";

const btnMinus = document.getElementById('btnMinus');
const btnReset = document.getElementById('btnReset');
const btnPlus = document.getElementById('btnPlus');

view.updateCounter(model.counter);

btnPlus.addEventListener('click', function () {
	model.increase();
	view.updateCounter(model.counter);

});

btnMinus.addEventListener('click', function () {
	model.decrease();
	view.updateCounter(model.counter);

});

btnReset.addEventListener('click', function () {
	model.reset();
	view.updateCounter(model.counter);

});
