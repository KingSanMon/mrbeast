document.querySelectorAll('.network-block').forEach(item => {
    item.addEventListener('click', () => {

        if (document.querySelector('.network-block.border-network') !== null) {
            document.querySelector('.network-block.border-network').classList.remove('border-network');
        }
        item.classList.add('border-network');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const indicators = document.querySelectorAll(".indicator");
    const slides = document.querySelectorAll(".slide");

    indicators.forEach((indicator) => {
        indicator.addEventListener("click", () => {
            const slideNumber = indicator.getAttribute("data-slide-to");

            // Hide all slides and indicators
            slides.forEach((slide) => {
                slide.classList.remove("active");
            });
            indicators.forEach((ind) => {
                ind.classList.remove("active");
            });

            // Display the selected slide and indicator
            document.querySelector(`.slide[data-slide-number="${slideNumber}"]`).classList.add("active");
            indicator.classList.add("active");
        });
    });
});



function modalWindow() {
    var modal = document.querySelector('.modal-window');
    modal.classList.remove('hidden');
}

// document.querySelector('.button_claim').addEventListener('click', () => {
//     document.querySelector('.modal-window').classList.add('hidden');
// });

setTimeout(modalWindow, 15000);

