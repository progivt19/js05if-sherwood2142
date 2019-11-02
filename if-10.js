//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

let MonthName1 = 'Январь';
let MonthName2 = 'Февраль';
let MonthName3 = 'Март';
let MonthName4 = 'Апрель';
let MonthName5 = 'Май';
let MonthName6 = 'Июнь';
let MonthName7 = 'Июль';
let MonthName8 = 'Август';
let MonthName9 = 'Сентябрь';
let MonthName10 = 'Октябрь';
let MonthName11 = 'Ноябрь';
let MonthName12 = 'Декабрь';

function MonthName(n) {
	switch (n) {
		case 1:
			alert(MonthName1);
			break;
		case 2:
			alert(MonthName2);
			break;
		case 3:
			alert(MonthName3);
			break;
		case 4:
			alert(MonthName4);
			break;
		case 5:
			alert(MonthName5);
			break;
		case 6:
			alert(MonthName6);
			break;
		case 7:
			alert(MonthName7);
			break;
		case 8:
			alert(MonthName8);
			break;
		case 9:
			alert(MonthName9);
			break;
		case 10:
			alert(MonthName10);
			break;
		case 11:
			alert(MonthName11);
			break;
		case 12:
			alert(MonthName12);
			break;
		default:
			alert('');
	}
}

module.exports = MonthName;