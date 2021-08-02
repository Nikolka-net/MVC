'use strict';

export default class View {
	constructor(value) {
		this.input = document.getElementById('input');
		this.updateCounter(value);
	}

	// Находим кнопки, запис. в свойства объекта elements 
	elements = {
		btnMinus: document.getElementById('btnMinus'),
		btnPlus: document.getElementById('btnPlus'),
		btnReset: document.getElementById('btnReset'),
	};

	updateCounter(data) {
		this.input.value = data;
	}
}
