//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function f(x1,y1,x2,y2,x3,y3) {
	let x = (x2+x3)/2;
	x = x*2-x1;
	let y = (y2+y3)/2;
	y = y*2-y1;
	console.log(x+";"+y);
}

module.exports = f;