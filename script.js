console.log("H&H Football Academy");

/* 🍎 APPLE STYLE SCROLL REVEAL */

const scrollElements = document.querySelectorAll(
    "section, section h2, section h3, section p, section .card, section img, section .btn"
);

scrollElements.forEach((element) => {
    element.classList.add("scrollReveal");
});

const scrollObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold:0.12,
        rootMargin:"0px 0px -60px 0px"
    }
);

document
    .querySelectorAll(".scrollReveal")
    .forEach(element => {
        scrollObserver.observe(element);
    });
