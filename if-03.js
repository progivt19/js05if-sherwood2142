//TODO: Впишите имя функции из задания вместо ...
//TODO: Добавьте правильные параметры
//TODO: Напишите функцию

function f(a,b,c,d)() {
	if (a!=b) && (c!=d) {
		if (a>b) {
			let min1 = a;
		} else {
			let min1 = b;
		}
		if (c>d) {
			let min2 = c;
		} else {
			let min2 = d;
		}
	}

		if (min1!=min2) {
			if (min1<min2) {
				return min1;
			} else {
				return min2;
			}
		}
	}

module.exports = f;