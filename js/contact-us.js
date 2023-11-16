var modalContactsWrapper = document.querySelector(".modal-wrapper");
var modalClose = document.querySelectorAll(".icon-close"), result;

var contactLink = document.querySelector(".contact-link a");
var contactLinkMob = document.querySelector(".mobile-phone-icon");
var contactUsModal = document.querySelector(".contacts-us__modal");
var contactUsForm = contactUsModal.querySelector(".contacts-us__form");
var contactUsName = contactUsForm.querySelector("[name=Name]");
var contactUsPhone = contactUsForm.querySelector("[name=Phone]");
var contactUsMessage = contactUsForm.querySelector("[name=Message]");
var contactUsPopup = document.querySelector(".contacts-us__popup");


//============ Связаться с нами ============


var openContactsModal = function () {
	modalContactsWrapper.classList.add("modal-wrapper--opened");
	contactUsModal.classList.add("contacts-us__modal--opened");
	document.body.classList.add("no-scroll");
	modalContactsWrapper.addEventListener('click', clickContactsWrapper);
	setupContactsEsc();
};

contactLink.addEventListener('click', function (e) {
	e.preventDefault();
	openContactsModal();
});

contactLinkMob.addEventListener('click', function (e) {
	e.preventDefault();
	openContactsModal();
});


//================= Валидация ==============

contactUsName.addEventListener('invalid', function(e) {
	if (contactUsName.validity.valueMissing) {
		e.preventDefault();
		contactUsName.parentElement.classList.add("contacts-us--error");
	}
});
contactUsPhone.addEventListener('invalid', function(e) {
	if (contactUsPhone.validity.valueMissing) {
		e.preventDefault();
		contactUsPhone.parentElement.classList.add("contacts-us--error");
	}
});
contactUsMessage.addEventListener('invalid', function(e) {
	if (contactUsMessage.validity.valueMissing) {
		e.preventDefault();
		contactUsMessage.parentElement.classList.add("contacts-us--error");	
	}
});


//=============== Подтверждение формы ================

contactUsForm.addEventListener('submit', function(e) {
	if (contactUsName.validity.valid && contactUsPhone.validity.valid && contactUsMessage.validity.valid) {
		closeContactsModal();
		e.preventDefault();
		contactUsPopup.classList.add("contacts-us__popup--opened");

		setTimeout( function() {
			if(contactUsPopup.classList.contains("contacts-us__popup--opened")) {
				closeContactsPopup();
				closeModalContactsWrapper();
				removeContactsNoScroll();
			}
		}, 6000);
	}
});


//================== Закрытия =================


var closeContactsModal = function() {
	contactUsModal.classList.add("contacts-us__modal--closed");
	contactUsModal.classList.remove("contacts-us__modal--opened");
	contactUsName.parentElement.classList.remove("contacts-us--error");
	contactUsPhone.parentElement.classList.remove("contacts-us--error");
	contactUsMessage.parentElement.classList.remove("contacts-us--error");
	contactUsForm.reset();
}

var closeContactsPopup = function() {
	contactUsPopup.classList.add("contacts-us__popup--closed");
	contactUsPopup.classList.remove("contacts-us__popup--opened");
}

var closeModalContactsWrapper = function() {
	modalContactsWrapper.classList.remove("modal-wrapper--opened");
	modalContactsWrapper.removeEventListener('click', clickContactsWrapper);
	removeContactsEsc();
	setTimeout(function() {
		contactUsModal.classList.remove("contacts-us__modal--closed");
		contactUsPopup.classList.remove("contacts-us__popup--closed");
		
	}, 1000);
}

var removeContactsNoScroll = function() {
	setTimeout(function() {
		document.body.classList.remove("no-scroll");
	}, 500); 
};


//========= Кликом ======
var clickContactsWrapper = function () {
	closeContactsModal();
	closeContactsPopup();
	removeContactsNoScroll();
	closeModalContactsWrapper();
	contactsTitle.innerHTML = "Связаться с нами";
	contactsBtn.value = "Связаться с нами";
};


//========= Крестик ======

var setupContactsEsc = function() {
	for (var i = 0; i < modalClose.length; i++) {
		result = modalClose[i];
		result.addEventListener('click', contactsEsc);
	}
};


var removeContactsEsc = function() {
	for (var i = 0; i < modalClose.length; i++) {
		result = modalClose[i];
		result.removeEventListener('click', contactsEsc);
	}
};

var contactsEsc = function() {
	closeContactsModal();
	closeContactsPopup();
	closeModalContactsWrapper();
	removeContactsNoScroll();
};


for (var i = 0; i < modalContactsWrapper.children.length; i++) {
	modChilder = modalContactsWrapper.children[i];
	modChilder.addEventListener('click', function (e) {
		e.stopPropagation();
	});
}


//======= Заказать услугу ======
var repairLink = document.querySelector('.repair__btn');
var contactsTitle = document.querySelector('.contacts-us__title');
var contactsBtn = document.querySelector('.contacts-us__btn');

repairLink.addEventListener('click', function() {
	openContactsModal();
	contactsTitle.innerHTML = "Заказать услугу";
	contactsBtn.value = "Заказать услугу";
}); 