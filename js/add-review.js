var modalReviewWrapper = document.querySelector(".modal-wrapper");
var modalClose = document.querySelectorAll(".icon-close"), result;

var addReviewLink = document.querySelector(".add-review-btn");
var addReviewModal = document.querySelector(".add-review__modal");
var addReviewForm = addReviewModal.querySelector(".add-review__form");
var addReviewName = addReviewForm.querySelector("[name=Name]");
var addReviewCity = addReviewForm.querySelector("[name=City]");
var addReviewMessage = addReviewForm.querySelector("[name=Review]");
var addReviewFile = addReviewForm.querySelector("[name=Photo]");


var addReviewPopup = document.querySelector(".add-review__popup");




//============= Добавить отзыв ===============

var openReviewModal = function () {
	modalReviewWrapper.classList.add("modal-wrapper--opened");
	addReviewModal.classList.add("add-review__modal--opened");
	document.body.classList.add("no-scroll");
	modalReviewWrapper.addEventListener('click', clickReviewWrapper);
	setupReviewEsc();
};

addReviewLink.addEventListener('click', function (e) {
	e.preventDefault();
	openReviewModal();
});

addReviewFile.addEventListener('invalid', function(e) {
	if (addReviewFile.validity.valueMissing) {
		e.preventDefault();
		addReviewFile.parentElement.parentElement.parentElement.classList.add("add-review--error");
	}
});

addReviewName.addEventListener('invalid', function(e) {
	if (addReviewName.validity.valueMissing) {
		e.preventDefault();
		addReviewName.parentElement.classList.add("add-review--error");
	}
});

addReviewCity.addEventListener('invalid', function(e) {
	if (addReviewCity.validity.valueMissing) {
		e.preventDefault();
		addReviewCity.parentElement.classList.add("add-review--error");
	}
});

addReviewMessage.addEventListener('invalid', function(e) {
	if (addReviewMessage.validity.valueMissing) {
		e.preventDefault();
		addReviewMessage.parentElement.classList.add("add-review--error");	
	}
});

addReviewForm.addEventListener('submit', function(e) {
	if (addReviewFile.validity.valid && addReviewName.validity.valid && addReviewCity.validity.valid && addReviewMessage.validity.valid) {
		addReviewName.parentElement.classList.remove("add-review--error");
		addReviewCity.parentElement.classList.remove("add-review--error");
		addReviewMessage.parentElement.classList.remove("add-review--error");
		addReviewFile.parentElement.parentElement.parentElement.classList.remove("add-review--error");

		e.preventDefault();
		addReviewModal.classList.remove("add-review__modal--opened");
		addReviewPopup.classList.add("add-review__popup--opened");
		document.body.classList.remove("no-scroll");
		addReviewForm.reset();

		setTimeout( function() {
			if(addReviewPopup.classList.contains("add-review__popup--opened")) {
				addReviewPopup.classList.remove("add-review__popup--opened");
				modalReviewWrapper.classList.remove("modal-wrapper--opened");
				modalReviewWrapper.removeEventListener('click', clickReviewWrapper);
			}
		}, 6000);
	}
});

//============= Закрытия ==============

var closeReviewModal = function() {
	addReviewModal.classList.add("add-review__modal--closed");
	addReviewModal.classList.remove("add-review__modal--opened");
	addReviewName.parentElement.classList.remove("add-review--error");
	addReviewCity.parentElement.classList.remove("add-review--error");
	addReviewMessage.parentElement.classList.remove("add-review--error");
	addReviewFile.parentElement.parentElement.parentElement.classList.remove("add-review--error");
	addReviewFile.parentElement.parentElement.parentElement.classList.remove("add-review--photo-error");	
	addReviewForm.reset();
	photoLayer.removeAttribute('style');
}

var closeReviewPopup = function () {
	addReviewPopup.classList.add("add-review__popup--closed");
	addReviewPopup.classList.remove("add-review__popup--opened");
}

var closeModalReviewWrapper = function() {
	modalReviewWrapper.classList.remove("modal-wrapper--opened");
	modalReviewWrapper.removeEventListener('click', clickReviewWrapper);
	removeReviewEsc();
	setTimeout(function() {
		addReviewModal.classList.remove("add-review__modal--closed");
		addReviewPopup.classList.remove("add-review__popup--closed");
	}, 1000);
}

var removeReviewNoScroll = function() {
	setTimeout(function() {
		document.body.classList.remove("no-scroll");
	}, 500); 
};

//========= Кликом ======
var clickReviewWrapper = function () {
	closeReviewModal();
	closeReviewPopup();
	removeReviewNoScroll();
	closeModalReviewWrapper();
};


//========= Крестик ======
var setupReviewEsc = function() {
	for (var i = 0; i < modalClose.length; i++) {
		result = modalClose[i];
		result.addEventListener('click', reviewEsc);
	}
};


var removeReviewEsc = function() {
	for (var i = 0; i < modalClose.length; i++) {
		result = modalClose[i];
		result.removeEventListener('click', reviewEsc);
	}
};

var reviewEsc = function() {
	closeReviewModal();
	closeReviewPopup();
	closeModalReviewWrapper();
	removeReviewNoScroll();
};


for (var i = 0; i < modalReviewWrapper.children.length; i++) {
	modChilder = modalReviewWrapper.children[i];
	modChilder.addEventListener('click', function (e) {
		e.stopPropagation();
	});
}




//============== Загрузка фотографии =============
var photoInp = document.querySelector('#photo');
var photoLayer = document.querySelector('.add-review__photo-inner');

photoInp.addEventListener('change', photoInsert, false);

function photoInsert() {
	var photoFile = this.files[0];

	if (!photoFile.type.startsWith('image/')){
		addReviewFile.parentElement.parentElement.parentElement.classList.remove("add-review--error");
		addReviewFile.parentElement.parentElement.parentElement.classList.add("add-review--photo-error");		
	}
	else {
		var reader = new FileReader();
		reader.onload = (function() { 
			return function(e) {
				photoLayer.style.backgroundImage = "url(" + e.target.result + ")";
				photoLayer.style.backgroundSize = "cover";
			}; 
		})(photoFile);
		reader.readAsDataURL(photoFile);
	}
	

}
