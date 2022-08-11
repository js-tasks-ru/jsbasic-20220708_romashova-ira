function initCarousel() {

    // контейнер с классом carousel
 		let carouselElem = document.querySelector(".carousel");
 		// кнопки стрелки слева и справа
 		let carouselArrowRight= carouselElem.querySelector(".carousel__arrow_right");
 		let carouselArrowLeft= carouselElem.querySelector(".carousel__arrow_left");
 		
 		// элемент-ленты, в котором находятся все слайды
 		let carouselinner = carouselElem.querySelector(".carousel__inner");
 		
 		// счетчик номера слайда
 		let count = 1;
 		
 		// слушатель события для левой и правой кнопок
 		carouselElem.addEventListener("click", handler);
 		
 		// начальные состояния кнопок
 		carouselArrowRight.style.display = '';
 		carouselArrowLeft.style.display = 'none';
 		
 		// ширина окна
 		let width = carouselinner.offsetWidth;
 		
 		let transition = 0;

 		// функция выполняющаяся при клике на стрелки
 		function handler(e) {
 		// клик по правой стрелке
 		if (e.target===carouselArrowRight) {
 		transition += width;
 		carouselinner.style.transform = `translateX(-${transition}px)`;
 		count++;
 		}
 		// клик по левой стрелке
 		else if (e.target===carouselArrowLeft) {
 		transition -= width;
 		carouselinner.style.transform = `translateX(-${transition}px)`;
 		count--};
 		
 		// счетчик count дошел до 1 -> скрываем левую стрелку
 		count === 1 ? carouselArrowLeft.style.display = 'none' : carouselArrowLeft.style.display = '';
 		// счетчик count дошел до 4 -> скрываем правую стрелку
 		count >= 4 ? carouselArrowRight.style.display = 'none' : carouselArrowRight.style.display = '';
 		}};
 		