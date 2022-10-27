addEventListener("DOMContentLoaded", function () {
	"use strict";

	//Slider
	const slides = document.querySelectorAll(".stock_block");
	const dots = document.querySelector(".slider-dots");
	const dot = document.querySelectorAll(".dot");
	let slideIndex = 1;
	const left = document.querySelector(".slider_left");
	const right = document.querySelector(".slider_right");

	showSlides(slideIndex);
	function showSlides(n) {
		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}
		slides.forEach((item) => (item.style.display = "none"));
		dot.forEach((item) => item.classList.remove("dot_active"));

		slides[slideIndex - 1].style.display = "flex";
		dot[slideIndex - 1].classList.add("dot_active");
	}

	function plusSlides(n) {
		showSlides((slideIndex += n));
	}
	function currentSlide(n) {
		showSlides((slideIndex = n));
	}

	dots.addEventListener("click", function (event) {
		for (let i = 0; i < dot.length + 1; i++) {
			if (
				event.target.classList.contains("dot") &&
				event.target == dot[i - 1]
			) {
				currentSlide(i);
			}
		}
	});

	right.addEventListener("click", function () {
		plusSlides(1);
	});
	left.addEventListener("click", function () {
		plusSlides(-1);
	});
});
