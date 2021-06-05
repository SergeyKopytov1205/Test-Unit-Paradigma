$(document).ready(function () {
	$('.slider').slick({

		arrows: true,
		slidesToShow: 3,
		autoplay: false,
	});

	//создаем popup на картинки
	$(".slider__pic").click(function () {	// Событие клика на маленькое изображение
		var img = $(this);	// Получаем изображение, на которое кликнули
		var src = img.attr('src'); // Достаем из этого изображения путь до картинки
		$("body").append("<div class='popup'>" + //Добавляем в тело документа разметку всплывающего окна
			"<div class='popup__bg'></div>" +
			"<div class='popup__img'><img src='" + src + "' class='popup__pic' /></div>" +

			"</div>");
		$(".popup").fadeIn(300); // Медленно выводим изображение
		$(".popup__bg").click(function () {	// Событие клика на затемненный фон	   
			$(".popup").fadeOut(300);	// Медленно убираем всплывающее окно
			setTimeout(function () {	// Выставляем таймер
				$(".popup").remove(); // Удаляем разметку всплывающего окна
			}, 300);
		});
	});

	//создаем popup на карту
	$(".header__location").click(function () {	// Событие клика на маленькое изображение
		$("body").append("<div class='popup'>" + //Добавляем в тело документа разметку всплывающего окна
			"<div class='popup__bg'></div>" +
			"<div id='mymap' class='popup__map'></div>" +
			"</div>");
		$(".popup").fadeIn(300); // Медленно выводим изображение
		$(".popup__bg").click(function () {	// Событие клика на затемненный фон	   
			$(".popup").fadeOut(300);	// Медленно убираем всплывающее окно
			setTimeout(function () {	// Выставляем таймер
				$(".popup").remove(); // Удаляем разметку всплывающего окна
			}, 300);
		});
	});
});



