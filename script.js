console.log("H&H Football Academy");

document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(
        "section, section h1, section h2, section h3, section p, section img, section a, section button"
    );

    elements.forEach(element => {
        element.classList.add("scrollReveal");
    });

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold: 0.15
    });

    elements.forEach(element => {
        observer.observe(element);
    });

});

console.log("SCROLL ANIMATION AKTİF");
console.log("Bulunan eleman:", document.querySelectorAll(".scrollReveal").length);
