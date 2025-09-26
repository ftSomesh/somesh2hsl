
const scriptURL = 'https://script.google.com/macros/s/AKfycbwleDcSh8z-21SgA54P6SqxR7bmPkWGtc3ruJBLzVJu9s49jKitGlYSXD3fF5wIJym_jQ/exec'
const form = document.forms['submit-to-google-sheet']

// const toast = document.querySelector(".toast")
// const progress = document.querySelector(".progress")

function textLoading(button) {
    button.innerHTML = `Loading... <i class="fas fa-paper-plane ml-2"></i>`;
}
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            form.reset()
            sendButton.innerHTML = `Send Message <i class="fas fa-paper-plane ml-2"></i>`;
            toast.classList.add("active");
            progress.classList.add("active");
        })
        .catch(error => {
            alert ("Failed to send!")
            sendButton.innerHTML = `Send Message <i class="fas fa-paper-plane ml-2"></i>`;
        })
})
