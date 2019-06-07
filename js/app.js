var n = document.getElementsByClassName("slider-content").length;
var slides = document.getElementsByClassName("slider-content");
var count = 0;

function slideLeft() {
	count--;
	showSlide();
}

function slideRight() {
	count++;
	showSlide();
}

function showSlide() {
	if (count > n - 1) {
		count = 0;
	} else if (count < 0) {
		count = n - 1;
	}
	console.log(n);

	for (var i = 0; i < n; i++) {
		slides[i].className = "slider-content hidden";
	}
	slides[count].className = "slider-content active-slide";
}


$('.js-toggle-menu').click(function (e) {
	e.preventDefault();

	$('#nav').toggleClass('nav__active')
});




$(".review-btn").click(function (e) {
	e.preventDefault();
	var lable = $(".review-btn").text();

	$(".more-read").show();
});



$(".review-btn-second").click(function (e) {
	e.preventDefault();
	var lable = $(".review-btn-second").text();

	$(".more-read").show();
});

