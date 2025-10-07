const counts = document.querySelectorAll(".note-count");

counts.forEach((count) => {
    const articles = document.querySelectorAll(`[aria-labelledby=${count.parentElement.parentElement.parentElement.getAttribute('aria-labelledby')}] article`)    
    const noteToBeCounted = document.querySelector(`[aria-labelledby=${count.parentElement.parentElement.parentElement.getAttribute('aria-labelledby')}] .note-count`);
    noteToBeCounted.innerText = articles.length;
})