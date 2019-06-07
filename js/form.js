const myForm = document.querySelector('#myForm');
const sendButton = document.querySelector('#sendButton');

sendButton.addEventListener('click', function (event) {
    event.preventDefault();
    //     console.log(myForm.elements.name.value);
    //     console.log(myForm.elements.phone.value);
    //     console.log(myForm.elements.street.value);
    //     console.log(myForm.elements.home.value);
    //     console.log(myForm.elements.part.value);
    //     console.log(myForm.elements.appt.value);
    //     console.log(myForm.elements.floor.value);
    //     console.log(myForm.elements.comment.value);
    //     console.log(myForm.elements.choice.value);
  
    //     if (myForm.elements.callback.checked == true) {
    //         console.log('Не перезванивать');
    //     }
    //     else {
    //         console.log('Перезвонить при принятии заказа');
    //     }
    //     console.log(myForm.elements.clear.value);
    // });

    if (validateForm(myForm)) {
        console.log('all right');
    }
});

function validateForm(form) {
    let valid = true;

    if (!validateField(form.elements.name)) {
        valid = false;
    }

    if (!validateField(form.elements.phone)) {
        valid = false;
    }

    if (!validateField(form.elements.street)) {
        valid = false;
    }
    if (!validateField(form.elements.home)) {
        valid = false;
    }
    if (!validateField(form.elements.part)) {
        valid = false;
    }
    if (!validateField(form.elements.appt)) {
        valid = false;
    }
    if (!validateField(form.elements.floor)) {
        valid = false;
    }
    if (!validateField(form.elements.comment)) {
        valid = false;
    }
       return valid;
}

function validateField(field) {
    if (!field.checkValidity()) {
        field.nextElementSibling.textContent = field.validationMessage;

        return false;
    } else {
        field.nextElementSibling.textContent = '';

        return true;
    }
}