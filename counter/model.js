'use strict';


export default class Model {
	constructor() {
		this.counter = 0;
		this.loadFromLocalStorage(); // Запуск метода при обновлении стр., сразу обновл. счётчик
	}

	// Сохр в localStorage счётчик в формате строки в json
	saveToLocalStorage() {
		localStorage.setItem('counter', JSON.stringify(this.counter));
	}

	// Получ. данные из localStorage
	loadFromLocalStorage() {
		const data = localStorage.getItem('counter'); // получаем
		if (data) {
			this.counter = JSON.parse(data); // запис. в счётчик, преобразовав из строки
		}
	}

	increase() {
		++this.counter;
		this.saveToLocalStorage(); // сохр. новые данные в local
	}

	decrease() {
		--this.counter;
		this.saveToLocalStorage();
	}

	reset() {
		this.counter = 0;
		this.saveToLocalStorage();
	}

}
