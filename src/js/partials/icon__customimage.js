ymaps.ready(function () {
	var myMap = new ymaps.Map('map__container', {
				center: [55.779292,37.715354],
				zoom: 16
			}, {
				searchControlProvider: 'yandex#search'
			}),

			myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
				hintContent: 'Большая Семёновская улица, 42с4',
				balloonContent: 'Большая Семёновская улица, 42с4, АндеСон Лофт'
			}, {
				// Опции.
				// Необходимо указать данный тип макета.
				iconLayout: 'default#image',
				// Своё изображение иконки метки.
				iconImageHref: 'images/png/map-icon-g.png',
				// Размеры метки.
				iconImageSize: [73, 94],
				// Смещение левого верхнего угла иконки относительно
				// её "ножки" (точки привязки).
				iconImageOffset: [-30, -100]
			});

	myMap.geoObjects.add(myPlacemark);
	myMap.behaviors.disable('scrollZoom');
	myMap.behaviors.disable('drag');
});