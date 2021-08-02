'use strict';

// Экспорт классов
import Model from "./model.js"; // берём данные
import View from "./view.js"; // разметка, внешний вид


const model = new Model(); // созд. объект на основе класса Model, сразу обновл. счётчик

const view = new View(model.counter); // созд. объект на основе класса View, перед. данные и вставл. в инпут: стартовое значение


view.elements.btnPlus.addEventListener('click', function () {
	model.increase();
	view.updateCounter(model.counter);

});

view.elements.btnMinus.addEventListener('click', function () {
	model.decrease();
	view.updateCounter(model.counter);

});

view.elements.btnReset.addEventListener('click', function () {
	model.reset();
	view.updateCounter(model.counter);

});
