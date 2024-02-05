import iziToast from "izitoast/dist/js/iziToast.min.js";
import "izitoast/dist/css/iziToast.min.css";

document.addEventListener('submit', (event) => {
    event.preventDefault();

    const form = document.querySelector('.form');
    const delayInput = form.querySelector('input[name="delay"]');
    const stateInput = form.querySelector('input[name="state"]:checked');

    if (!delayInput.checkValidity() || !stateInput) {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a valid delay and select a state.',
        });
        
        return;
    }

    const delay = parseInt(delayInput.value);

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (stateInput.value === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });

    promise
        .then((delay) => {
            iziToast.success({
                message: `Fulfilled promise in ${delay}ms`,
            });
        })
        .catch((delay) => {
            iziToast.error({
                message: `Rejected promise in ${delay}ms`,
            });
        });
   form.reset();
});

