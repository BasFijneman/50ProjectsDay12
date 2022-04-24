const toggles = document.querySelectorAll(".faq-toggle")          //use queryselectorall because its more then 1
                                                                // (.)
toggles.forEach(toggles => {                                    //loop through them because you need them both
    toggles.addEventListener("click", () => {
        toggles.parentNode.classList.toggle("active")             // you want to add the active class on the parent node (.faq) so use   
    })                                                            //.parentNode to make that possible
})

