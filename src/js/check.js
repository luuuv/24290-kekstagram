"use strict";
var getMessage = function (a, b) {
	
	if (typeof a == "boolean") {
		if (a == true) {
			return ("Переданное GIF-изображение анимировано и содержит " + b + " кадров");
		}
		else {
			return ("Переданное GIF-изображение не анимировано");
		}
	} else if (typeof a == "number") {
		return ("Переданное SVG-изображение содержит " + a + " объектов и " + b*4 + " атрибутов");
	} else if (typeof a == "object" && typeof b != "object") {
		var amountOfRedPoints = 0;
		for (var i = 0; i < a.length; i++) {
			amountOfRedPoints += a[i];
		}
		return ( "Количество красных точек во всех строчках изображения: " + amountOfRedPoints);
	} else if (typeof a == "object" && typeof b == "object") {
		var artifactsSquare = 0;
		if (a.lenght == b.lenght) {
			for (var j = 0; j < a.length; j++) {
				var c = a[j] * b[j];
				artifactsSquare += c;
			}
		}		
		return ("Общая площадь артефактов сжатия: " + artifactsSquare + " пикселей");
	} else {
		return ("Переданы некорректные данные");
	}
}