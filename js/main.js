const transactType = document.querySelector('#transact-type');

const paymentCard = document.querySelector('.payment-card');

const transferCard = document.querySelector('.transfer-card');
const depositCard = document.querySelector('.deposit-card');

transactType.addEventListener('change', function () {
    switch(transactType.value){
        case"payment":
        paymentCard.style.display= "block";
        paymentCard.nextElementSibling.style.display="none";
        break;

        case "transfer":
            transfeCard.previousElementSibling.style.display="none";
            transfeCard.style.display= "block";
            paymentCard.nextElementSibling.style.display="none";
            break;


    }

});