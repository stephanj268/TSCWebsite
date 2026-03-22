let slideIndex: number = 0;

document.addEventListener("DOMContentLoaded", () => {
    showSlides();
});

function showSlides(): void {
    const slides = document.getElementsByClassName("myslides") as HTMLCollectionOf<HTMLElement>;

    
    if (slides.length === 0) return;


    for (let i = 0; i < slides.length; i++) {
        const slide =slides[i];
        if (slide) {
            slide.style.display = "none";
        }
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    const nextSlide = slides[slideIndex - 1];
    if (nextSlide) {
        nextSlide.style.display = "block";
    }

    setTimeout(showSlides, 2000);
}