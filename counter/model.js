
export default {
	counter: 0,

	// Запус метода при обновлении стр.
	init: function() {
		this.loadFromLocalStorage();
	},

	// Сохр в localStorage счётчик в формате строки в json
	saveToLocalStorage: function () {
		localStorage.setItem('counter', JSON.stringify(this.counter));
	},
	// Получ. данные из localStorage
	loadFromLocalStorage: function () {
		const data = localStorage.getItem('counter'); // получаем
		if (data) {
			this.counter = JSON.parse(data); // запис. в счётчик, преобразовав из строки
		}
	},
	increase: function () {
		++this.counter;
		this.saveToLocalStorage(); // сохр. новые данные в local
	},
	decrease: function () {
		--this.counter;
		this.saveToLocalStorage();
	},
	reset: function () {
		this.counter = 0;
		this.saveToLocalStorage();
	}
}
